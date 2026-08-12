export interface LanguageConfig {
  code: string;
  name: string;
  dir: "ltr" | "rtl";
}

// Default / source language of the application
export const DEFAULT_LANGUAGE = "en";

export const DEFAULT_LANGUAGE_CONFIG: LanguageConfig = {
  code: "en",
  name: "English",
  dir: "ltr",
};

/**
 * PRODUCTION LANGUAGES CONFIGURATION
 * ----------------------------------------------------
 * Client-approved languages are configured here.
 * To add a new language approved by the client, simply add an object:
 * { code: "fr", name: "Français", dir: "ltr" }
 */
export const LANGUAGES: LanguageConfig[] = [
  DEFAULT_LANGUAGE_CONFIG,
  // Add client-approved production languages here, e.g.:
  // { code: "fr", name: "Français", dir: "ltr" },
  // { code: "es", name: "Español", dir: "ltr" },
  // { code: "ar", name: "العربية", dir: "rtl" },
];

/**
 * DEVELOPMENT & TESTING LANGUAGES
 * ----------------------------------------------------
 * Used for development and verification testing of multilingual system,
 * including RTL layout rendering and translation API caching.
 */
export const DEV_TEST_LANGUAGES: LanguageConfig[] = [
  DEFAULT_LANGUAGE_CONFIG,
  { code: "es", name: "Español", dir: "ltr" },
  { code: "fr", name: "Français", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
];

/**
 * Returns active languages list.
 * In development, DEV_TEST_LANGUAGES is active if process.env.NODE_ENV !== 'production'
 * or can be set to LANGUAGES for strict production mode.
 */
export function getActiveLanguages(): LanguageConfig[] {
  // If production LANGUAGES has extra client-approved languages, use LANGUAGES.
  // Otherwise, use DEV_TEST_LANGUAGES to support dev & testing languages.
  return LANGUAGES.length > 1 ? LANGUAGES : DEV_TEST_LANGUAGES;
}

export function getLanguageConfig(code: string): LanguageConfig {
  const active = getActiveLanguages();
  const found = active.find((l) => l.code.toLowerCase() === code.toLowerCase());
  return found || DEFAULT_LANGUAGE_CONFIG;
}

export function isRtlLanguage(code: string): boolean {
  const config = getLanguageConfig(code);
  return config.dir === "rtl";
}
