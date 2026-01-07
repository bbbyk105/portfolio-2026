import { NextRequest, NextResponse } from "next/server";
import { getBlogClient, type Blog } from "@/lib/microcms";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = (searchParams.get("lang") || "ja") as "ja" | "en";

  try {
    const client = getBlogClient(lang);
    const data = await client.getList<Blog>({
      endpoint: "blogs",
      queries: {
        limit: 20,
        orders: "-publishedAt",
      },
    });

    return NextResponse.json({ contents: data.contents });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ contents: [] }, { status: 500 });
  }
}
