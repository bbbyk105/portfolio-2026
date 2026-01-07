import Link from "next/link";
import { getBlogClient, type Blog } from "@/lib/microcms";

type Props = {
  params: {
    lang: "ja" | "en";
  };
};

export const revalidate = 60;

export default async function NewsListPage({ params }: Props) {
  const { lang } = params;
  const client = getBlogClient(lang);

  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit: 20,
      orders: "-publishedAt",
      //   filters: `lang[equals]${lang}`,
    },
  });

  const title = lang === "ja" ? "ブログ" : "Blog";

  return (
    <div className="bg-[#121212] min-h-screen w-full text-white">
      <main className="max-w-[960px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <ul className="space-y-4">
          {data.contents.map((post: Blog) => (
            <li key={post.id} className="border-b border-[#2e2e2e] pb-4">
              <Link
                href={`/${lang}/news/${post.id}`}
                className="block hover:opacity-80"
              >
                <p className="text-xs text-[#898989] mb-1">
                  {post.publishedAt?.slice(0, 10).replace(/-/g, "/")}
                </p>
                <h2 className="text-lg font-semibold">{post.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
