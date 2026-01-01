const companies = [
  "Mozilla",
  "GitHub",
  "1Password",
  "PWC",
  "Pika",
  "Humata",
  "Udio",
  "Langchain",
  "Resend",
  "Loops",
];

export default function CustomerStoriesSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm text-[#898989] uppercase tracking-wider mb-3 sm:mb-4">
            Customer Stories
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              Trusted by the world&apos;s most innovative companies.
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4 mb-4">
            See how Supabase empowers companies of all sizes to accelerate
            their growth and streamline their work.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 ml-4 w-full sm:w-auto">
            <a
              href="https://supabase.com/customers"
              className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#006239] border border-[rgba(62,207,142,0.3)] rounded-md text-xs sm:text-[13.8px] text-[#fafafa] hover:bg-[#007a47] transition-colors text-center"
            >
              View all customers
            </a>
            <a
              href="https://supabase.com/contact/sales"
              className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#242424] border border-[#363636] rounded-md text-xs sm:text-[13.3px] text-[#fafafa] hover:bg-[#2e2e2e] transition-colors text-center"
            >
              Contact sales
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {companies.map((company) => (
            <div
              key={company}
              className="h-[120px] sm:h-[140px] md:h-[150px] bg-[#171717] border border-[#2e2e2e] rounded-lg flex items-center justify-center p-3 sm:p-4"
            >
              <span className="text-xs sm:text-sm text-[#898989] text-center">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


