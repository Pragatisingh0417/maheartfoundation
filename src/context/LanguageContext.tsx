"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LanguageConfig,
  DEFAULT_LANGUAGE,
  DEFAULT_LANGUAGE_CONFIG,
  getActiveLanguages,
  getLanguageConfig,
} from "@/config/languages";

interface LanguageContextType {
  currentLanguage: LanguageConfig;
  setLanguage: (code: string) => void;
  t: (text: string) => string;
  translationsMap: Map<string, string>;
  registerTexts: (texts: string[]) => void;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: DEFAULT_LANGUAGE_CONFIG,
  setLanguage: () => {},
  t: (text: string) => text,
  translationsMap: new Map(),
  registerTexts: () => {},
  isTranslating: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [currentLanguage, setCurrentLanguageState] = useState<LanguageConfig>(
    DEFAULT_LANGUAGE_CONFIG
  );
  const [translationsMap, setTranslationsMap] = useState<Map<string, string>>(
    new Map()
  );
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  // Client-side registered texts queue for batch translation
  const [registeredTextsQueue, setRegisteredTextsQueue] = useState<Set<string>>(
    new Set()
  );

  // Detect current language from URL, Cookie, or LocalStorage
  useEffect(() => {
    const activeLangs = getActiveLanguages();
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];

    let targetCode = DEFAULT_LANGUAGE;

    // 1. Check URL path prefix first (e.g. /es/about or /ar/...)
    const matchedUrlLang = activeLangs.find(
      (l) => l.code.toLowerCase() === firstSegment?.toLowerCase()
    );

    if (matchedUrlLang && matchedUrlLang.code !== DEFAULT_LANGUAGE) {
      targetCode = matchedUrlLang.code;
    } else {
      // 2. Check Cookie / LocalStorage if on default route
      const storedCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("NEXT_LOCALE="))
        ?.split("=")[1];

      const storedLocal = typeof window !== "undefined" ? localStorage.getItem("ma_lang") : null;

      const codeCandidate = storedCookie || storedLocal;

      if (codeCandidate) {
        const found = activeLangs.find(
          (l) => l.code.toLowerCase() === codeCandidate.toLowerCase()
        );
        if (found) {
          targetCode = found.code;
        }
      }
    }

    const config = getLanguageConfig(targetCode);
    setCurrentLanguageState(config);

    // Apply <html lang="..." dir="..."> to document
    if (typeof document !== "undefined") {
      document.documentElement.lang = config.code;
      document.documentElement.dir = config.dir;
    }
  }, [pathname]);

  // Handle switching language
  const setLanguage = useCallback(
    (newCode: string) => {
      const config = getLanguageConfig(newCode);
      setCurrentLanguageState(config);

      // Update document HTML attributes immediately
      if (typeof document !== "undefined") {
        document.documentElement.lang = config.code;
        document.documentElement.dir = config.dir;

        // Save preference in cookie and localStorage
        document.cookie = `NEXT_LOCALE=${config.code}; path=/; max-age=31536000`;
        localStorage.setItem("ma_lang", config.code);
      }
    },
    []
  );

  // Queue texts to be translated in batches
  const registerTexts = useCallback((texts: string[]) => {
    if (!texts || texts.length === 0) return;
    setRegisteredTextsQueue((prev) => {
      let added = false;
      const nextSet = new Set(prev);
      for (const text of texts) {
        if (text && typeof text === "string") {
          const trimmed = text.trim();
          if (trimmed && !nextSet.has(trimmed)) {
            nextSet.add(trimmed);
            added = true;
          }
        }
      }
      return added ? nextSet : prev;
    });
  }, []);

  // Synchronous string translation getter (PURE during render - NO STATE UPDATES)
  const t = useCallback(
    (sourceText: string): string => {
      if (!sourceText || typeof sourceText !== "string" || currentLanguage.code === DEFAULT_LANGUAGE) {
        return sourceText;
      }
      const trimmed = sourceText.trim();
      if (translationsMap.has(trimmed)) {
        return translationsMap.get(trimmed)!;
      }
      return sourceText;
    },
    [currentLanguage.code, translationsMap]
  );

  // Clear translations map when switching target language
  const prevLangRef = React.useRef(currentLanguage.code);
  useEffect(() => {
    if (prevLangRef.current !== currentLanguage.code) {
      prevLangRef.current = currentLanguage.code;
      setTranslationsMap(new Map());
    }
  }, [currentLanguage.code]);

  // Fetch pending queued translations from /api/translate
  useEffect(() => {
    if (
      currentLanguage.code === DEFAULT_LANGUAGE ||
      registeredTextsQueue.size === 0
    ) {
      return;
    }

    const missingTexts: string[] = [];
    registeredTextsQueue.forEach((text) => {
      if (!translationsMap.has(text)) {
        missingTexts.push(text);
      }
    });

    if (missingTexts.length === 0) return;

    let isMounted = true;
    setIsTranslating(true);

    fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        texts: missingTexts,
        targetLang: currentLanguage.code,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.translations && Array.isArray(data.translations)) {
          setTranslationsMap((prevMap) => {
            const newMap = new Map(prevMap);
            missingTexts.forEach((text, i) => {
              newMap.set(text, data.translations[i] || text);
            });
            return newMap;
          });
        }
      })
      .catch((err) => {
        console.error("❌ Translation fetch failed:", err);
      })
      .finally(() => {
        if (isMounted) setIsTranslating(false);
      });

    return () => {
      isMounted = false;
    };
  }, [currentLanguage.code, registeredTextsQueue, translationsMap]);


  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        t,
        translationsMap,
        registerTexts,
        isTranslating,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
