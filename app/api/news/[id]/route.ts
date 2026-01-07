import { NextRequest, NextResponse } from "next/server";
import { getBlogClient, type Blog } from "@/lib/microcms";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(req.url);
  const lang = (searchParams.get("lang") || "ja") as "ja" | "en";

  try {
    const client = getBlogClient(lang);
    const post = await client.get<Blog>({
      endpoint: "blogs",
      contentId: id,
    });

    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
