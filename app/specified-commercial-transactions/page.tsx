import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecifiedCommercialTransactionsContent from "@/components/SpecifiedCommercialTransactionsContent";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "Evimeríaの特定商取引法に基づく表記。事業者情報、支払方法、返品・キャンセルポリシーについて説明しています。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpecifiedCommercialTransactionsPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <SpecifiedCommercialTransactionsContent />
      </main>
      <Footer />
    </div>
  );
}
