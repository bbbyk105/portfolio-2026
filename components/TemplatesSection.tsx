const templates = [
  {
    title: "What's Supabase?",
    desc: "Learn the basics of Supabase",
  },
  {
    title: "Your first API",
    desc: "Create your first API endpoint",
  },
  {
    title: "JS Client",
    desc: "Get started with the JavaScript client",
  },
  {
    title: "Long-lived + Storage Buckets",
    desc: "Build with long-lived connections",
  },
  {
    title: "Database Management",
    desc: "Manage your database with ease",
  },
  {
    title: "Realtime Chat Client",
    desc: "Build a realtime chat application",
  },
];

export default function TemplatesSection() {
  return (
    <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[52px] text-[#fafafa] text-center px-4">
          Start building in seconds
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#b4b4b4] text-center max-w-2xl px-4">
          Kickstart your next project with templates built by us and our
          community.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 w-full sm:w-auto">
          <a
            href="https://supabase.com/templates"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#006239] border border-[rgba(62,207,142,0.3)] rounded-md text-xs sm:text-[13.8px] text-[#fafafa] hover:bg-[#007a47] transition-colors text-center"
          >
            Browse templates
          </a>
          <a
            href="https://github.com/supabase/supabase"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#242424] border border-[#363636] rounded-md text-xs sm:text-[13.3px] text-[#fafafa] hover:bg-[#2e2e2e] transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Official GitHub library
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {templates.map((template, idx) => (
          <a
            key={idx}
            href="https://supabase.com/templates"
            className="h-[280px] sm:h-[300px] bg-[#171717] border border-[#2e2e2e] rounded-lg p-4 sm:p-5 md:p-6 flex flex-col hover:border-[#3ecf8e] transition-colors"
          >
            <h3 className="text-base sm:text-lg text-[#fafafa] mb-2">
              {template.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#898989] mb-4 flex-1">
              {template.desc}
            </p>
            <span className="text-[10px] sm:text-xs text-[#3ecf8e]">
              Read more →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

