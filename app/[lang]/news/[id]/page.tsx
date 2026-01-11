import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogClient, type Blog } from "@/lib/microcms";

type Props = {
  params: Promise<{
    lang: "ja" | "en";
    id: string;
  }>;
};

export const revalidate = 60;

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.evimeria105.com";

// HTMLタグを除去してテキストのみを抽出
const stripHtmlTags = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params;
  const client = getBlogClient(lang);
  const post = await client
    .get<Blog>({
      endpoint: "blogs",
      contentId: id,
    })
    .catch(() => null);

  if (!post || !post.publishedAt) {
    return {
      title: "Not Found",
    };
  }

  const contentText = stripHtmlTags(
    typeof post.content === "string" ? post.content : ""
  );
  const description =
    contentText.length > 160
      ? contentText.substring(0, 160) + "..."
      : contentText || "Evimería news article";

  const title = post.title || "News";
  const ogImage = post.eyecatch?.url || `${baseUrl}/images/og-image.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Evimería"],
      images: [
        {
          url: ogImage,
          width: post.eyecatch?.width || 1200,
          height: post.eyecatch?.height || 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${baseUrl}/news/${id}`,
    },
  };
}

export async function generateStaticParams() {
  const getAllPosts = async (lang: "ja" | "en") => {
    const client = getBlogClient(lang);
    const allPosts: Blog[] = [];
    let offset = 0;
    const limit = 100;

    while (true) {
      const data = await client.getList<Blog>({
        endpoint: "blogs",
        queries: {
          limit,
          offset,
        },
      });

      allPosts.push(...data.contents);

      if (
        data.contents.length < limit ||
        !data.totalCount ||
        offset + limit >= data.totalCount
      ) {
        break;
      }

      offset += limit;
    }

    return allPosts;
  };

  const [jaPosts, enPosts] = await Promise.all([
    getAllPosts("ja"),
    getAllPosts("en"),
  ]);

  const params = [
    ...jaPosts.map((post: Blog) => ({
      lang: "ja" as const,
      id: post.id,
    })),
    ...enPosts.map((post: Blog) => ({
      lang: "en" as const,
      id: post.id,
    })),
  ];

  return params;
}

export default async function NewsDetailPage({ params }: Props) {
  const { lang, id } = await params;
  const client = getBlogClient(lang);
  const post = await client
    .get<Blog>({
      endpoint: "blogs",
      contentId: id,
    })
    .catch(() => null);

  if (!post) {
    return notFound();
  }

  return (
    <div className="bg-[#121212] min-h-screen w-full text-white">
      <main className="max-w-[960px] mx-auto px-4 py-12">
        <p className="text-xs text-[#898989] mb-2">
          {post.publishedAt?.slice(0, 10).replace(/-/g, "/")}
        </p>
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

        {post.eyecatch && (
          <div className="mb-6">
            <Image
              src={post.eyecatch.url}
              alt={post.title}
              width={post.eyecatch.width}
              height={post.eyecatch.height}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: typeof post.content === "string" ? post.content : "",
          }}
        />
      </main>
    </div>
  );
}
