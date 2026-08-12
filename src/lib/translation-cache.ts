import { connectDB } from "@/app/lib/db";
import TranslationCache from "@/app/models/TranslationCache";

// In-memory cache for fast lookups
const memoryCache = new Map<string, string>();

/**
 * Creates a unique cache key for a given target language and source text.
 */
export function buildCacheKey(targetLang: string, sourceText: string): string {
  return `${targetLang.toLowerCase()}:${sourceText.trim()}`;
}

/**
 * Get translations from cache (In-memory first, then MongoDB fallback).
 * Returns a map of sourceText -> translatedText for found items.
 */
export async function getCachedTranslations(
  texts: string[],
  targetLang: string
): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  const missingFromMemory: string[] = [];

  // 1. Check in-memory cache first
  for (const text of texts) {
    const key = buildCacheKey(targetLang, text);
    if (memoryCache.has(key)) {
      result.set(text, memoryCache.get(key)!);
    } else {
      missingFromMemory.push(text);
    }
  }

  if (missingFromMemory.length === 0) {
    return result;
  }

  // 2. Check MongoDB persistent cache for missing items
  try {
    await connectDB();

    const keysToFetch = missingFromMemory.map((text) =>
      buildCacheKey(targetLang, text)
    );

    const docs = await TranslationCache.find({ key: { $in: keysToFetch } }).lean();

    for (const doc of docs) {
      if (doc && doc.sourceText && doc.translatedText) {
        // Save to memory cache for future requests
        memoryCache.set(doc.key, doc.translatedText);
        result.set(doc.sourceText, doc.translatedText);
      }
    }
  } catch (error) {
    console.warn("⚠️ Translation cache DB query warning (fallback to memory):", error);
  }

  return result;
}

/**
 * Save new translations into both memory cache and MongoDB persistent cache.
 */
export async function setCachedTranslations(
  translations: { sourceText: string; translatedText: string }[],
  targetLang: string
): Promise<void> {
  if (!translations || translations.length === 0) return;

  const docsToSave: { key: string; targetLang: string; sourceText: string; translatedText: string }[] = [];

  for (const item of translations) {
    const key = buildCacheKey(targetLang, item.sourceText);
    memoryCache.set(key, item.translatedText);

    docsToSave.push({
      key,
      targetLang: targetLang.toLowerCase(),
      sourceText: item.sourceText,
      translatedText: item.translatedText,
    });
  }

  // Persist to MongoDB asynchronously
  try {
    await connectDB();

    const bulkOps = docsToSave.map((doc) => ({
      updateOne: {
        filter: { key: doc.key },
        update: { $set: doc },
        upsert: true,
      },
    }));

    await TranslationCache.bulkWrite(bulkOps);
  } catch (error) {
    console.warn("⚠️ Could not persist translations to MongoDB (saved in memory):", error);
  }
}
