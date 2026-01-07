"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import NewsSectionClient from "./NewsSectionClient";

type NewsItem = {
  id: string;
  title: string;
  publishedAt?: string;
};

export default function NewsSection() {
  const { language } = useLanguage();
  const [jaItems, setJaItems] = useState<NewsItem[]>([]);
  const [enItems, setEnItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const [jaRes, enRes] = await Promise.all([
        fetch("/api/news?lang=ja"),
        fetch("/api/news?lang=en"),
      ]);

      const jaData = await jaRes.json();
      const enData = await enRes.json();

      setJaItems(
        (jaData.contents || []).slice(0, 3).map((post: any) => ({
          id: post.id,
          title: post.title,
          publishedAt: post.publishedAt,
        }))
      );

      setEnItems(
        (enData.contents || []).slice(0, 3).map((post: any) => ({
          id: post.id,
          title: post.title,
          publishedAt: post.publishedAt,
        }))
      );
    };

    fetchNews();
  }, []);

  return <NewsSectionClient jaItems={jaItems} enItems={enItems} />;
}
