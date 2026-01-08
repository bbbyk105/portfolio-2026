"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import NewsSectionClient from "./NewsSectionClient";

type NewsItem = {
  id: string;
  title: string;
  publishedAt?: string;
};

type Props = {
  isHomePage?: boolean;
};

export default function NewsSection({ isHomePage = true }: Props) {
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

      const limit = isHomePage ? 3 : undefined;

      setJaItems(
        (jaData.contents || [])
          .slice(0, limit)
          .map((post: any) => ({
            id: post.id,
            title: post.title,
            publishedAt: post.publishedAt,
          }))
      );

      setEnItems(
        (enData.contents || [])
          .slice(0, limit)
          .map((post: any) => ({
            id: post.id,
            title: post.title,
            publishedAt: post.publishedAt,
          }))
      );
    };

    fetchNews();
  }, [isHomePage]);

  return <NewsSectionClient jaItems={jaItems} enItems={enItems} isHomePage={isHomePage} />;
}
