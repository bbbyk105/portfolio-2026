export default function FinalCTA() {
  return (
    <section className="bg-[#121212] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1536px] mx-auto flex flex-col items-center gap-3 sm:gap-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[34.6px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[43.2px] text-center px-4">
          <span className="text-[#898989]">Build in a weekend,</span>
          <span className="text-[#fafafa]"> scale to millions</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 w-full sm:w-auto">
          <a
            href="https://supabase.com/dashboard"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#006239] border border-[rgba(62,207,142,0.3)] rounded-md text-xs sm:text-[13.8px] text-[#fafafa] hover:bg-[#007a47] transition-colors text-center"
          >
            Start your project
          </a>
          <a
            href="https://supabase.com/contact/sales"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#242424] border border-[#363636] rounded-md text-xs sm:text-[13.3px] text-[#fafafa] hover:bg-[#2e2e2e] transition-colors text-center"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}

