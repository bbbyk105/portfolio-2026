const frameworks = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Next.js",
  "Flutter",
  "React Native",
  "Expo",
  "Nuxt",
  "Remix",
];

export default function FrameworksSection() {
  return (
    <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[34.7px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[43.2px] text-[#fafafa] text-center px-2 sm:px-4">
          Use Supabase with any framework
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center max-w-[1152px] px-4">
          {frameworks.map((framework) => (
            <div
              key={framework}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#1f1f1f] border border-[#2e2e2e] flex items-center justify-center"
            >
              <span className="text-[10px] sm:text-xs md:text-sm text-[#898989] px-2 text-center">
                {framework}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


