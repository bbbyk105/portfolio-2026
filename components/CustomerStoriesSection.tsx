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
    <section className="w-full bg-[#121212] py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm text-[#898989] uppercase tracking-wider">
            Customer Stories
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[52px] text-[#fafafa] text-center max-w-3xl px-4">
            Trusted by the world&apos;s most innovative companies.
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#b4b4b4] text-center max-w-2xl px-4">
            See how Supabase empowers companies of all sizes to accelerate
            their growth and streamline their work.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 w-full sm:w-auto">
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


