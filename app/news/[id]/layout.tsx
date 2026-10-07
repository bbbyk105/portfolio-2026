import type { Metadata } from "next";

// 記事ページ本体は "use client" で metadata を書けないため、ここで canonical を記事の URL にする
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    alternates: { canonical: `/news/${id}` },
  };
}

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
