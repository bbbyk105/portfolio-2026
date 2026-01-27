import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsPageContent from "@/components/NewsPageContent";

export const metadata: Metadata = {
  title: "ニュース",
  description: "Evimeriaの最新情報、技術トレンド、プロジェクトのアップデートなどをお届けします。",
  openGraph: {
    title: "ニュース | Evimeria",
    description: "Evimeriaの最新情報、技術トレンド、プロジェクトのアップデートなどをお届けします。",
    url: "/news",
  },
};

export default function NewsPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <NewsPageContent />
      </main>
      <Footer />
    </div>
  );
}
