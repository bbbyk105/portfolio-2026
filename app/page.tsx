import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import PortfolioSection from "@/components/PortfolioSection";
import DashboardSection from "@/components/DashboardSection";
import CommunitySection from "@/components/CommunitySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Evimeria - Web制作・EC・業務効率化",
  description:
    "Web制作からアプリ開発、広告運用、業務効率化まで、すべてのサービスを統合的に提供。競争優位性を生み出すデジタルシステムを構築します。",
  openGraph: {
    title: "Evimeria - Web制作・EC・業務効率化",
    description:
      "Web制作からアプリ開発、広告運用、業務効率化まで、すべてのサービスを統合的に提供。",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <HeroSection />
        <LogoMarquee />
        <FeaturesSection />
        <NewsSection />
        <PortfolioSection />
        <DashboardSection />
        <CommunitySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
