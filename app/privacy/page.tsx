import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Evimeriaのプライバシーポリシー。お客様の個人情報の取り扱いについて説明しています。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}
