import { DEFAULT_LANGUAGE } from "@/config/languages";
import { getCachedTranslations, setCachedTranslations } from "./translation-cache";

const GOOGLE_TRANSLATE_API_URL = "https://translation.googleapis.com/language/translate/v2";

export interface TranslationResult {
  translations: string[];
}

/**
 * Server-side function to translate a batch of texts to a target language.
 * Uses Google Cloud Translation API with server-side API Key & MongoDB caching.
 * Falls back to source text if API fails or key is unconfigured.
 */
export async function translateTexts(
  texts: string[],
  targetLang: string,
  sourceLang: string = DEFAULT_LANGUAGE
): Promise<string[]> {
  if (!texts || texts.length === 0) return [];
  
  // If target language is default English, return original texts immediately
  if (!targetLang || targetLang.toLowerCase() === DEFAULT_LANGUAGE) {
    return texts;
  }

  // Filter out empty or whitespace-only strings
  const validTexts = texts.map((t) => (t ? t : ""));
  
  // 1. Check persistent & memory cache
  const cachedMap = await getCachedTranslations(validTexts, targetLang);
  
  const missingTexts: string[] = [];
  const missingIndices: number[] = [];

  const finalTranslations: string[] = new Array(validTexts.length);

  validTexts.forEach((text, index) => {
    if (!text.trim()) {
      finalTranslations[index] = text;
    } else if (cachedMap.has(text)) {
      finalTranslations[index] = cachedMap.get(text)!;
    } else {
      missingTexts.push(text);
      missingIndices.push(index);
    }
  });

  // If all texts were found in cache, return immediately
  if (missingTexts.length === 0) {
    return finalTranslations;
  }

  // 2. Call Google Cloud Translation API for missing texts
  const apiKey = process.env.GOOGLE_TRANSLATION_API_KEY;

  if (!apiKey) {
    console.warn("⚠️ GOOGLE_TRANSLATION_API_KEY is missing in environment. Returning fallback English text.");
    // Fall back to original English text for missing items
    missingIndices.forEach((idx, i) => {
      finalTranslations[idx] = missingTexts[i];
    });
    return finalTranslations;
  }

  try {
    const response = await fetch(`${GOOGLE_TRANSLATE_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: missingTexts,
        target: targetLang,
        source: sourceLang,
        format: "text",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Google Cloud Translation API error (${response.status}):`, errorText);
      // Fallback to original text
      missingIndices.forEach((idx, i) => {
        finalTranslations[idx] = missingTexts[i];
      });
      return finalTranslations;
    }

    const data = await response.json();
    const googleTranslations: { translatedText: string }[] = data?.data?.translations || [];

    const newCachedItems: { sourceText: string; translatedText: string }[] = [];

    missingIndices.forEach((origIdx, i) => {
      const translated = googleTranslations[i]?.translatedText || missingTexts[i];
      finalTranslations[origIdx] = translated;

      newCachedItems.push({
        sourceText: missingTexts[i],
        translatedText: translated,
      });
    });

    // 3. Save newly translated items to cache
    await setCachedTranslations(newCachedItems, targetLang);

  } catch (error) {
    console.error("❌ Exception while calling Google Cloud Translation API:", error);
    missingIndices.forEach((idx, i) => {
      finalTranslations[idx] = missingTexts[i];
    });
  }

  return finalTranslations;
}
