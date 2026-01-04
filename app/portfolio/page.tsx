import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioPageContent from "@/components/PortfolioPageContent";

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
