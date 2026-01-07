import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogClient, type Blog } from "@/lib/microcms";

type Props = {
  params: {
    lang: "ja" | "en";
    id: string;
  };
};

export const revalidate = 60;

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
  const client = getBlogClient(params.lang);
  const post = await client
    .get<Blog>({
      endpoint: "blogs",
      contentId: params.id,
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
