"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type NewsItem = {
  id: string;
  title: string;
  publishedAt?: string;
};

type Props = {
  jaItems: NewsItem[];
  enItems: NewsItem[];
  isHomePage?: boolean;
};

const translations = {
  ja: {
    label: "News",
    title: "最新情報",
    newsPageTitle: "ニュース",
  },
  en: {
    label: "News",
    title: "Latest News",
    newsPageTitle: "News",
  },
};

export default function NewsSectionClient({ jaItems, enItems, isHomePage = true }: Props) {
  const { language } = useLanguage();
  const t = translations[language];
  const newsItems = language === "ja" ? jaItems : enItems;
  const title = isHomePage ? t.title : t.newsPageTitle;

  return (
    <section className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm text-[#898989] uppercase tracking-wider mb-3 sm:mb-4">
            {t.label}
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              {title}
            </h2>
          </div>
        </div>
        <div className="space-y-0">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="block py-4 sm:py-5 md:py-6 border-b border-[#2e2e2e] hover:bg-[#1f1f1f] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <div className="w-24 sm:w-28 shrink-0">
                  <span className="text-sm sm:text-base text-[#898989]">
                    {item.publishedAt?.slice(0, 10).replace(/-/g, "/")}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base md:text-lg text-[#fafafa]">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
