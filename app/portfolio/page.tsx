import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioPageContent from "@/components/PortfolioPageContent";

export const metadata: Metadata = {
  title: "制作実績",
  description: "Evimeriaがこれまでに制作したWebサイト、アプリ、システムの実績をご紹介します。",
  openGraph: {
    title: "制作実績 | Evimeria",
    description: "Evimeriaがこれまでに制作したWebサイト、アプリ、システムの実績をご紹介します。",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <PortfolioPageContent />
      </main>
      <Footer />
    </div>
  );
}
