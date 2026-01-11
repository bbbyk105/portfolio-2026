"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Loading from "@/components/Loading";

type NewsItem = {
  id: string;
  title: string;
  publishedAt?: string;
  category?: {
    id: string;
    name: string;
  };
  excerpt?: string;
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

// HTMLタグを除去してテキストのみを抽出
const stripHtmlTags = (html: string): string => {
  if (typeof window !== "undefined") {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
  // サーバーサイドの場合は正規表現で除去
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ");
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
          (data.contents || []).map((post: any) => {
            // contentからexcerptを生成（HTMLタグを除去して最初の120文字）
            let excerpt = "";
            if (post.content) {
              const textContent = stripHtmlTags(post.content);
              excerpt =
                textContent.length > 120
                  ? textContent.substring(0, 120) + "..."
                  : textContent;
            }

            return {
              id: post.id,
              title: post.title,
              publishedAt: post.publishedAt,
              category: post.category,
              excerpt,
            };
          })
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
          <Loading text={t.loading} />
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

        {/* ニュース一覧 - タブ形式 */}
        {newsItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#898989]">{t.noNews}</p>
          </div>
        ) : (
          <div className="space-y-0">
            {newsItems.map((item, index) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group block px-4 sm:px-6 py-4 sm:py-5 border-b border-[#2e2e2e] hover:bg-[#171717] transition-colors duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg md:text-xl text-[#0ABAB5] group-hover:text-[#0ABAB5]/80 transition-colors font-medium mb-1 sm:mb-2">
                      {item.title}
                    </h2>
                    {item.excerpt && (
                      <p className="text-sm sm:text-base text-[#b4b4b4] line-clamp-2 leading-relaxed">
                        {item.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-2 sm:mt-3">
                      {item.publishedAt && (
                        <span className="text-xs sm:text-sm text-[#898989]">
                          {item.publishedAt.slice(0, 10).replace(/-/g, "/")}
                        </span>
                      )}
                      {item.category && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs text-[#0ABAB5] bg-[#0ABAB5]/10 rounded border border-[#0ABAB5]/20">
                          {item.category.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 w-8 h-8 sm:w-10 sm:h-10">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#898989] group-hover:text-[#0ABAB5] transition-colors"
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
