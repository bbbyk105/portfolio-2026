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
  "Mobbin",
  "GoPuff",
  "Chatbase",
  "BetaShares",
  "Submagic",
];

export default function LogoMarquee() {
  return (
    <section className="w-full py-0 pb-8 sm:pb-12 md:pb-16 lg:pb-24 px-4">
      <div className="max-w-[896px] mx-auto">
        <p className="text-[10px] sm:text-xs md:text-[13.6px] text-[#898989] text-center mb-4 sm:mb-6 md:mb-8">
          Trusted by fast-growing companies worldwide
        </p>
        <div className="h-10 sm:h-12 max-w-[896px] mx-auto opacity-70 overflow-hidden relative">
          <div className="flex gap-6 sm:gap-8 md:gap-12 items-center animate-scroll whitespace-nowrap">
            {companies.map((company) => (
              <span
                key={company}
                className="text-[#898989] text-sm sm:text-base font-medium"
              >
                {company}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company) => (
              <span
                key={`dup-${company}`}
                className="text-[#898989] text-sm sm:text-base font-medium"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

