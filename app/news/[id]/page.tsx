"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsShareButtons from "@/components/NewsShareButtons";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Blog } from "@/lib/microcms";

const translations = {
  ja: {
    loading: "読み込み中...",
    publishedAt: "公開日:",
    updatedAt: "更新日:",
  },
  en: {
    loading: "Loading...",
    publishedAt: "Published:",
    updatedAt: "Updated:",
  },
};

export default function NewsDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { language } = useLanguage();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const t = translations[language];

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/news/${params.id}?lang=${language}`);
        if (!res.ok) {
          router.push("/");
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch {
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPost();
    }
  }, [params.id, language, router]);

  if (loading) {
    return (
      <div className="bg-[#121212] min-h-screen w-full text-white flex items-center justify-center">
        <p>{t.loading}</p>
      </div>
    );
  }

  if (!post) return null;

  const html = typeof post.content === "string" ? post.content : "";
  const locale = language === "ja" ? "ja-JP" : "en-US";
  const publishedAt =
    post.publishedAt && new Date(post.publishedAt).toLocaleDateString(locale);
  const updatedAt =
    post.updatedAt && new Date(post.updatedAt).toLocaleDateString(locale);

  return (
    <div className="bg-[#121212] min-h-screen w-full text-white">
      <Header />
      <main className="max-w-[960px] mx-auto px-4 py-12">
        <div className="mb-4 space-y-1">
          {publishedAt && (
            <p className="text-xs text-[#898989]">
              {t.publishedAt} <span className="ml-1">{publishedAt}</span>
            </p>
          )}
          {updatedAt && (
            <p className="text-xs text-[#898989]">
              {t.updatedAt} <span className="ml-1">{updatedAt}</span>
            </p>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-6 text-[#fafafa]">{post.title}</h1>

        {post.eyecatch && (
          <div className="mb-6 max-w-md mx-auto">
            <Image
              src={post.eyecatch.url}
              alt={post.title}
              width={post.eyecatch.width}
              height={post.eyecatch.height}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <article
          className="prose prose-invert max-w-none text-[#fafafa]"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <NewsShareButtons title={post.title} />
      </main>
      <Footer />
    </div>
  );
}
