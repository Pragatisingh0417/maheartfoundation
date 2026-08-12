"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";
import { getActiveLanguages, LanguageConfig } from "@/config/languages";
import { Globe, ChevronDown, Check } from "lucide-react";

export default function LanguageSelector() {
  const { currentLanguage, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = getActiveLanguages();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: LanguageConfig) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37] text-gray-900 font-semibold text-sm hover:bg-amber-400 transition shadow-sm"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} className="text-gray-900" />
        <span>{currentLanguage.name}</span>
        <ChevronDown
          size={14}
          className={`text-gray-900 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 ltr:right-0 rtl:left-0 mt-2 w-48 rounded-xl bg-white shadow-2xl ring-1 ring-black/10 z-[1000] overflow-hidden py-1 divide-y divide-gray-100"
          role="menu"
        >
          <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50">
            Select Language
          </div>
          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = currentLanguage.code.toLowerCase() === lang.code.toLowerCase();
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition ${
                    isSelected
                      ? "bg-red-50 text-red-600 font-semibold"
                      : "text-gray-700 hover:bg-[#d4af37]/20 hover:text-red-600"
                  }`}
                  role="menuitem"
                >
                  <span className="flex items-center gap-2">
                    <span>{lang.name}</span>
                    {lang.dir === "rtl" && (
                      <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-mono">
                        RTL
                      </span>
                    )}
                  </span>
                  {isSelected && <Check size={16} className="text-red-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
