import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsPageContent from "@/components/NewsPageContent";

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
