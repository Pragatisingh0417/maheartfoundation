"use client";

import React, { useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";

interface TranslateProps {
  children: string;
}

/**
 * Reusable <T> component for translating text in JSX:
 * Example: <T>Donate Now</T>
 */
export function T({ children }: TranslateProps) {
  const { t, registerTexts, currentLanguage } = useTranslation();

  useEffect(() => {
    if (typeof children === "string" && currentLanguage.code !== "en") {
      registerTexts([children]);
    }
  }, [children, registerTexts, currentLanguage.code]);

  if (typeof children !== "string") {
    return <>{children}</>;
  }

  return <>{t(children)}</>;
}

export default T;
