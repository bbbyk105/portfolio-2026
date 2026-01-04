export default function FinalCTA() {
  return (
    <section className="bg-[#121212] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1536px] mx-auto flex flex-col items-center gap-3 sm:gap-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[34.6px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[43.2px] text-center px-4">
          <span className="text-[#898989]">プロジェクトのご相談、</span>
          <span className="text-[#fafafa]">お気軽にお問い合わせください</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] text-center max-w-2xl px-4">
          お見積もりは無料です。まずはお気軽にご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 w-full sm:w-auto mt-2">
          <a
            href="/contact"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#078A85] border border-[rgba(10,186,181,0.3)] rounded-md text-xs sm:text-[13.8px] text-[#fafafa] hover:bg-[#089A95] transition-colors text-center"
          >
            お問い合わせ
          </a>
          <a
            href="/contact?type=estimate"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#242424] border border-[#363636] rounded-md text-xs sm:text-[13.3px] text-[#fafafa] hover:bg-[#2e2e2e] transition-colors text-center"
          >
            お見積もり依頼
          </a>
        </div>
      </div>
    </section>
  );
}
