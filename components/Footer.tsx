import Image from "next/image";

const imgSupabaseLogo = "/images/supabase-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#2e2e2e]">
      {/* Security Badges */}
      <div className="border-b border-[#2e2e2e]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 md:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#fafafa]">
                We protect your data.
              </span>
              <a
                href="https://supabase.com/security"
                className="text-sm text-[#3ecf8e] hover:underline"
              >
                Learn more →
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#3ecf8e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="text-sm text-[#fafafa]">SOC2 Type 2</span>
                <span className="text-xs text-[#898989]">Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#3ecf8e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="text-sm text-[#fafafa]">HIPAA</span>
                <span className="text-xs text-[#898989]">Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-6 sm:gap-8 lg:gap-0">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            <a href="https://supabase.com/" className="block">
              <Image
                src={imgSupabaseLogo}
                alt="Supabase Logo"
                width={160}
                height={31}
                className="w-32 sm:w-40 md:w-[160px] h-auto"
              />
            </a>
            <div className="flex items-center gap-4 sm:gap-5">
              <a
                href="https://github.com/supabase/supabase"
                className="text-[#898989] hover:text-[#fafafa] transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/supabase"
                className="text-[#898989] hover:text-[#fafafa] transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://discord.supabase.com/"
                className="text-[#898989] hover:text-[#fafafa] transition-colors"
                aria-label="Discord"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.045-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@supabase"
                className="text-[#898989] hover:text-[#fafafa] transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/supabase"
                className="text-[#898989] hover:text-[#fafafa] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full lg:w-auto">
            <div>
              <h3 className="text-[15.5px] leading-[24px] text-[#fafafa] mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://supabase.com/database"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Database
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/auth"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Auth
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/edge-functions"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Functions
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/realtime"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Realtime
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/storage"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Storage
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/modules/vector"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Vector
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/pricing"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/enterprise"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[15.4px] leading-[24px] text-[#fafafa] mb-4">
                Solutions
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://supabase.com/solutions/ai-builders"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    AI Builders
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/solutions/developers"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/solutions/startups"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Startups
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/solutions/enterprise"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[15px] leading-[24px] text-[#fafafa] mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://supabase.com/blog"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/docs"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/support"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://status.supabase.com/"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    System Status
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/security"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Security & Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[15.5px] leading-[24px] text-[#fafafa] mb-4">
                Developers
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://supabase.com/docs"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/changelog"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/supabase/supabase"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.supabase.com/"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[15.5px] leading-[24px] text-[#fafafa] mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://supabase.com/about"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/careers"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/contact"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://supabase.com/press"
                    className="text-[13.3px] text-[#898989] hover:text-[#fafafa]"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2e2e2e] pt-4 sm:pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-[11.4px] text-[#898989]">
            © Supabase Inc
          </p>
          <div className="w-7 h-7 flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="#b4b4b4"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2v20M2 12h20"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}



