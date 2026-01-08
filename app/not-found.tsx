import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="bg-[#121212] min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#fafafa] mb-4">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#fafafa] mb-4">
            ページが見つかりません
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] mb-8 max-w-xl mx-auto">
            お探しのページは存在しないか、移動または削除された可能性があります。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0ABAB5] text-[#121212] font-medium rounded-lg hover:bg-[#0ABAB5]/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

