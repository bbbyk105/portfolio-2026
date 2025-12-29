const tweets = [
  {
    user: "@nerdburn",
    text: "It's fun, feels lightweight, and really quick to spin up user auth and a few tables. Almost too easy! Highly recommend.",
  },
  {
    user: "@patrickc",
    text: 'Very impressed by @supabase\'s growth. For new startups, they seem to have gone from "promising" to "standard" in remarkably short order.',
  },
  {
    user: "@adeelibr",
    text: "@supabase shout out, their MCP is awesome. It's helping me create better row securities and telling me best practises for setting up a supabase app",
  },
  {
    user: "@TyronBache",
    text: "Really impressed with @supabase's Assistant. It has helped me troubleshoot and solve complex CORS Configuration issues on Pinger.",
  },
  {
    user: "@orlandopedro_",
    text: "Love @supabase custom domains makes the auth so much better",
  },
  {
    user: "@sdusteric",
    text: "Loving #Supabase MCP. Claude Code would not only plan what data we should save but also figure out a migration script by checking what the schema looks like on Supabase via MCP.",
  },
  {
    user: "@adm_lawson",
    text: "Love supabse edge functions. Cursor+Supabase+MCP+Docker desktop is all I need",
  },
  {
    user: "@gokul_i",
    text: "First time running @supabase in local. It just works. Very good DX imo.",
  },
  {
    user: "@xthemadgeniusx",
    text: "Lately been using Supabase over AWS/ GCP for products to save on costs and rapid builds(Vibe Code) that do not need all the Infra and the hefty costs that come with AWS/ GCP out the door. Great solution overall.",
  },
  {
    user: "@pontusab",
    text: "I love everything about Supabase.",
  },
];

export default function CommunitySection() {
  return (
    <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center gap-3 sm:gap-4 px-4 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[35.4px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[43.2px] text-[#fafafa] text-center">
          Join the community
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-[15.4px] leading-5 sm:leading-6 md:leading-7 lg:leading-[24px] text-[#b4b4b4] text-center max-w-2xl">
          Discover what our community has to say about their Supabase
          experience.
        </p>
        <a
          href="https://discord.supabase.com/"
          className="px-3 sm:px-[13px] py-2 sm:py-[9px] bg-[#242424] border border-[#363636] rounded-md text-xs sm:text-[13.3px] text-[#fafafa] hover:bg-[#2e2e2e] transition-colors inline-flex items-center gap-2"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.045-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Join us on Discord
        </a>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-3 sm:gap-4 animate-scroll">
          {tweets.map((tweet, idx) => (
            <div
              key={idx}
              className="min-w-[280px] sm:min-w-[304px] bg-[#171717] border border-[#2e2e2e] rounded-lg p-4 sm:p-5 md:p-6 flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2e2e2e] flex items-center justify-center">
                  <span className="text-xs text-[#898989]">
                    {tweet.user[1]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#fafafa]">{tweet.user}</span>
                  <svg
                    className="w-4 h-4 text-[#898989]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#b4b4b4] leading-relaxed">
                {tweet.text}
              </p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {tweets.slice(0, 3).map((tweet, idx) => (
            <div
              key={`dup-${idx}`}
              className="min-w-[280px] sm:min-w-[304px] bg-[#171717] border border-[#2e2e2e] rounded-lg p-4 sm:p-5 md:p-6 flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2e2e2e] flex items-center justify-center">
                  <span className="text-xs text-[#898989]">
                    {tweet.user[1]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#fafafa]">{tweet.user}</span>
                  <svg
                    className="w-4 h-4 text-[#898989]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#b4b4b4] leading-relaxed">
                {tweet.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

