import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "Evimeriaへのお問い合わせはこちらから。Web制作、アプリ開発、広告運用、業務効率化など、お気軽にご相談ください。",
  openGraph: {
    title: "お問い合わせ | Evimeria",
    description:
      "Evimeriaへのお問い合わせはこちらから。Web制作、アプリ開発、広告運用、業務効率化など、お気軽にご相談ください。",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
