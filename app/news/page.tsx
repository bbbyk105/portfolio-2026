import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";

export default function NewsPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
