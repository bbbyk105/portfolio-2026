import { MetadataRoute } from "next";
import { getBlogClient } from "@/lib/microcms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.evimeria105.com";

  // 静的ページ
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // microCMSから記事を取得して追加
  const newsPages: MetadataRoute.Sitemap = [];

  try {
    // 日本語記事
    const jaClient = getBlogClient("ja");
    const jaData = await jaClient.getList({
      endpoint: "blogs",
      queries: {
        limit: 100,
        orders: "-publishedAt",
      },
    });

    jaData.contents.forEach((post) => {
      if (post.publishedAt) {
        newsPages.push({
          url: `${baseUrl}/news/${post.id}`,
          lastModified: new Date(post.updatedAt || post.publishedAt),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    });

    // 英語記事（別サービスがある場合）
    const enClient = getBlogClient("en");
    try {
      const enData = await enClient.getList({
        endpoint: "blogs",
        queries: {
          limit: 100,
          orders: "-publishedAt",
        },
      });

      enData.contents.forEach((post) => {
        if (post.publishedAt) {
          // 既に追加されていない記事のみ追加（IDが異なる場合）
          const existingPage = newsPages.find(
            (page) => page.url === `${baseUrl}/news/${post.id}`
          );
          if (!existingPage) {
            newsPages.push({
              url: `${baseUrl}/news/${post.id}`,
              lastModified: new Date(post.updatedAt || post.publishedAt),
              changeFrequency: "weekly",
              priority: 0.6,
            });
          }
        }
      });
    } catch (enError) {
      // 英語サービスが存在しない場合は無視
      console.warn("English microCMS service not available:", enError);
    }
  } catch (error) {
    console.error("Failed to fetch news for sitemap:", error);
  }

  return [...staticPages, ...newsPages];
}
