import Image from "next/image";
import { notFound } from "next/navigation";
import { microcmsClient, type Blog } from "@/lib/microcms";

type Props = {
  params: {
    lang: "ja" | "en";
    id: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const data = await microcmsClient.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: 1000,
    },
  });

  return data.contents.map((post) => ({
    lang: post.lang,
    id: post.id,
  }));
}

export default async function NewsDetailPage({ params }: Props) {
  const post = await microcmsClient
    .get<Blog>({
      endpoint: "blogs",
      contentId: params.id,
    })
    .catch(() => null);

  if (!post || post.lang !== params.lang) {
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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </div>
  );
}


