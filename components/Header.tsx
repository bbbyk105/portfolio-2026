"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
] as const;

const translations = {
  ja: {
    services: "サービス",
    portfolio: "制作実績",
    news: "最新情報",
    about: "会社概要",
    contact: "お問い合わせ",
  },
  en: {
    services: "Services",
    portfolio: "Portfolio",
    news: "News",
    about: "About",
    contact: "Contact",
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { language: selectedLanguage, setLanguage } = useLanguage();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[selectedLanguage];

  // ドロップダウン外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDesktop = desktopDropdownRef.current?.contains(target);
      const isInsideMobile = mobileDropdownRef.current?.contains(target);

      // どちらのドロップダウンにも含まれていない場合、閉じる
      if (languageDropdownOpen && !isInsideDesktop && !isInsideMobile) {
        setLanguageDropdownOpen(false);
      }
    };

    if (languageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [languageDropdownOpen]);

  const handleLanguageSelect = (lang: "ja" | "en") => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguageDropdownOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-sm border-b border-[#2e2e2e]">
      <nav className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 h-12 sm:h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Evimería"
            width={150}
            height={50}
            className="h-8 sm:h-10 md:h-12 w-auto"
            priority
          />
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Link
              href="/solutions"
              className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
            >
              {t.services}
            </Link>
            <Link
              href="/portfolio"
              className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
            >
              {t.portfolio}
            </Link>
            <Link
              href="/news"
              className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
            >
              {t.news}
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
            >
              {t.about}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {/* 言語切り替えプルダウン */}
            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={toggleDropdown}
                className="px-3 py-1.5 text-xs text-[#fafafa] bg-[#242424] border border-[#363636] rounded-md hover:bg-[#2e2e2e] transition-colors flex items-center gap-1.5"
              >
                <span>{selectedLanguage.toUpperCase()}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    languageDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-[#171717] border border-[#2e2e2e] rounded-md shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLanguageSelect(lang.code as "ja" | "en");
                      }}
                      className={`w-full px-4 py-2 text-sm text-left transition-colors ${
                        selectedLanguage === lang.code
                          ? "bg-[#0ABAB5]/20 text-[#0ABAB5]"
                          : "text-[#fafafa] hover:bg-[#1f1f1f]"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs text-[#fafafa] bg-[#078A85] border border-[rgba(10,186,181,0.3)] rounded-md hover:bg-[#089A95] transition-colors"
            >
              {t.contact}
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          {/* モバイル用言語切り替え */}
          <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={toggleDropdown}
              className="px-2 py-1.5 text-xs text-[#fafafa] bg-[#242424] border border-[#363636] rounded-md hover:bg-[#2e2e2e] transition-colors flex items-center gap-1"
            >
              <span>{selectedLanguage.toUpperCase()}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  languageDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#171717] border border-[#2e2e2e] rounded-md shadow-lg overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLanguageSelect(lang.code as "ja" | "en");
                    }}
                    className={`w-full px-4 py-2 text-sm text-left transition-colors ${
                      selectedLanguage === lang.code
                        ? "bg-[#0ABAB5]/20 text-[#0ABAB5]"
                        : "text-[#fafafa] hover:bg-[#1f1f1f]"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3 py-2 text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2e2e2e] bg-[#121212]">
          <div className="max-w-[1536px] mx-auto px-4 py-4 space-y-2">
            <Link
              href="/solutions"
              className="block px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.services}
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.portfolio}
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.news}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.about}
            </Link>
            <div className="pt-2 border-t border-[#2e2e2e]">
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm text-[#fafafa] bg-[#078A85] border border-[rgba(10,186,181,0.3)] rounded-md hover:bg-[#089A95] text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
