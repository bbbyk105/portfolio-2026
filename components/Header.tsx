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
    webDevelopment: "Web制作",
    appDevelopment: "アプリ制作",
    metaAds: "Meta広告代理",
    aiAutomation: "AI自動化",
    companyInfo: "会社情報",
    contact: "お問い合わせ",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    specifiedCommercialTransactions: "特定商取引法",
    resources: "リソース",
    news: "ニュース",
    portfolio: "制作実績",
    support: "サポート",
    faq: "よくある質問",
  },
  en: {
    services: "Services",
    webDevelopment: "Web Development",
    appDevelopment: "App Development",
    metaAds: "Meta Advertising",
    aiAutomation: "AI Automation",
    companyInfo: "Company",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    specifiedCommercialTransactions: "Specified Commercial Transactions Act",
    resources: "Resources",
    news: "News",
    portfolio: "Portfolio",
    support: "Support",
    faq: "FAQ",
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [expandedMenuItems, setExpandedMenuItems] = useState<Set<string>>(new Set());
  const { language: selectedLanguage, setLanguage } = useLanguage();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const t = translations[selectedLanguage];

  const toggleMenuItem = (item: string) => {
    setExpandedMenuItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

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

  // モバイルメニュー開閉時のbodyスクロール制御
  useEffect(() => {
    if (mobileMenuOpen) {
      // メニューが開いている時はbodyのスクロールを無効化
      document.body.style.overflow = "hidden";
    } else {
      // メニューが閉じている時はbodyのスクロールを再有効化
      document.body.style.overflow = "";
    }

    // クリーンアップ
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLanguageSelect = (lang: "ja" | "en") => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguageDropdownOpen((prev) => !prev);
  };

  return (
    <>
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
                <div className="absolute right-0 mt-2 w-32 bg-[#171717] border border-[#2e2e2e] rounded-md shadow-lg overflow-hidden z-[70]">
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
              <div className="absolute right-0 mt-2 w-32 bg-[#171717] border border-[#2e2e2e] rounded-md shadow-lg overflow-hidden z-[70]">
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
      </header>
      {/* Mobile Menu - Full Screen */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[#121212] z-[60] overflow-y-auto flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${mobileMenuOpen ? "" : "pointer-events-none"}`}
      >
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#2e2e2e] shrink-0">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Evimería"
                width={150}
                height={50}
                className="h-8 sm:h-10 md:h-12 w-auto"
                priority
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
              aria-label="Close menu"
            >
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
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col flex-1">
            {/* サービス */}
            <div className="border-b border-[#2e2e2e]">
              <button
                onClick={() => toggleMenuItem("services")}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-base text-[#fafafa] hover:bg-[#1f1f1f] transition-colors"
              >
                <span>{t.services}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedMenuItems.has("services") ? "rotate-180" : ""
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
              {expandedMenuItems.has("services") && (
                <div className="bg-[#171717] border-t border-[#2e2e2e]">
                  <Link
                    href="/solutions"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.services}
                  </Link>
                  <Link
                    href="/solutions#web"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.webDevelopment}
                  </Link>
                  <Link
                    href="/solutions#app"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.appDevelopment}
                  </Link>
                  <Link
                    href="/solutions#meta"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.metaAds}
                  </Link>
                  <Link
                    href="/solutions#automation"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.aiAutomation}
                  </Link>
                </div>
              )}
            </div>

            {/* 会社情報 */}
            <div className="border-b border-[#2e2e2e]">
              <button
                onClick={() => toggleMenuItem("company")}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-base text-[#fafafa] hover:bg-[#1f1f1f] transition-colors"
              >
                <span>{t.companyInfo}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedMenuItems.has("company") ? "rotate-180" : ""
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
              {expandedMenuItems.has("company") && (
                <div className="bg-[#171717] border-t border-[#2e2e2e]">
                  <Link
                    href="/contact"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.contact}
                  </Link>
                  <Link
                    href="/privacy"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.privacy}
                  </Link>
                  <Link
                    href="/terms"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.terms}
                  </Link>
                  <Link
                    href="/specified-commercial-transactions"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.specifiedCommercialTransactions}
                  </Link>
                </div>
              )}
            </div>

            {/* リソース */}
            <div className="border-b border-[#2e2e2e]">
              <button
                onClick={() => toggleMenuItem("resources")}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-base text-[#fafafa] hover:bg-[#1f1f1f] transition-colors"
              >
                <span>{t.resources}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedMenuItems.has("resources") ? "rotate-180" : ""
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
              {expandedMenuItems.has("resources") && (
                <div className="bg-[#171717] border-t border-[#2e2e2e]">
                  <Link
                    href="/news"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.news}
                  </Link>
                  <Link
                    href="/portfolio"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.portfolio}
                  </Link>
                </div>
              )}
            </div>

            {/* サポート */}
            <div className="border-b border-[#2e2e2e]">
              <button
                onClick={() => toggleMenuItem("support")}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-base text-[#fafafa] hover:bg-[#1f1f1f] transition-colors"
              >
                <span>{t.support}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedMenuItems.has("support") ? "rotate-180" : ""
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
              {expandedMenuItems.has("support") && (
                <div className="bg-[#171717] border-t border-[#2e2e2e]">
                  <Link
                    href="/contact"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.contact}
                  </Link>
                  <Link
                    href="/#faq"
                    className="block px-4 sm:px-6 py-3 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] hover:text-[#fafafa] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.faq}
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="px-4 sm:px-6 py-6 shrink-0 border-t border-[#2e2e2e]">
            <div className="flex items-center justify-center gap-4 sm:gap-5 mb-6">
              <a
                href="https://github.com/bbbyk105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] hover:text-[#0ABAB5] transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/byakko-kondo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] hover:text-[#0ABAB5] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/evimeria__official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] hover:text-[#0ABAB5] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.23 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/evimeria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] hover:text-[#0ABAB5] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            {/* Call-to-Action Button */}
            <Link
              href="/contact"
              className="block px-4 py-4 text-base font-medium text-[#fafafa] bg-[#078A85] border border-[rgba(10,186,181,0.3)] rounded-md hover:bg-[#089A95] text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.contact}
            </Link>
          </div>
        </div>
    </>
  );
}
