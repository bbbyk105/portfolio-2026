import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsOfServiceContent from "@/components/TermsOfServiceContent";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Evimeriaの利用規約。サービスの利用条件について説明しています。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <TermsOfServiceContent />
      </main>
      <Footer />
    </div>
  );
}
