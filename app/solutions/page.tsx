import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/SolutionsHero";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";
import AppDevelopmentSection from "@/components/AppDevelopmentSection";
import MetaAdsSection from "@/components/MetaAdsSection";
import AutomationSection from "@/components/AutomationSection";

export const metadata: Metadata = {
  title: "ソリューション",
  description:
    "Web開発、アプリ開発、SNS広告運用、業務効率化など、Evimeriaが提供する包括的なデジタルソリューションをご紹介します。",
  openGraph: {
    title: "ソリューション | Evimeria",
    description:
      "Web開発、アプリ開発、SNS広告運用、業務効率化など、Evimeriaが提供する包括的なデジタルソリューションをご紹介します。",
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <SolutionsHero />
        <WebDevelopmentSection />
        <AppDevelopmentSection />
        <MetaAdsSection />
        <AutomationSection />
      </main>
      <Footer />
    </div>
  );
}
