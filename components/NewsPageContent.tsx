"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type NewsItem = {
  id: string;
  title: string;
  publishedAt?: string;
  category?: {
    id: string;
    name: string;
  };
};

const translations = {
  ja: {
    title: "ニュース",
    label: "News",
    loading: "読み込み中...",
    noNews: "ニュースがありません",
  },
  en: {
    title: "News",
    label: "News",
    loading: "Loading...",
    noNews: "No news available",
  },
};

export default function NewsPageContent() {
  const { language } = useLanguage();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const t = translations[language];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`/api/news?lang=${language}`);
        const data = await res.json();
        setNewsItems(
          (data.contents || []).map((post: any) => ({
            id: post.id,
            title: post.title,
            publishedAt: post.publishedAt,
            category: post.category,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [language]);

  if (loading) {
    return (
      <section className="w-full bg-[#121212] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center py-20">
            <p className="text-[#898989]">{t.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#121212] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ヘッダー */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#fafafa]">
              {t.title}
            </h1>
          </div>
        </div>

        {/* ニュース一覧 */}
        {newsItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#898989]">{t.noNews}</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {newsItems.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group block p-5 sm:p-6 rounded-lg border border-[#2e2e2e] bg-[#171717] hover:border-[#0ABAB5]/50 hover:bg-[#1a1a1a] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                  {/* 日付とカテゴリ */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 shrink-0">
                    <span className="text-xs sm:text-sm text-[#898989] font-medium whitespace-nowrap">
                      {item.publishedAt?.slice(0, 10).replace(/-/g, "/")}
                    </span>
                    {item.category && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] sm:text-xs text-[#0ABAB5] bg-[#0ABAB5]/10 rounded border border-[#0ABAB5]/20 w-fit">
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        {item.category.name}
                      </span>
                    )}
                  </div>
                  {/* タイトル */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg md:text-xl text-[#fafafa] group-hover:text-[#0ABAB5] transition-colors font-medium leading-relaxed">
                      {item.title}
                    </h2>
                  </div>
                  {/* 矢印アイコン */}
                  <div className="hidden sm:flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-[#2e2e2e] group-hover:bg-[#0ABAB5]/20 transition-colors">
                    <svg
                      className="w-4 h-4 text-[#898989] group-hover:text-[#0ABAB5] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
