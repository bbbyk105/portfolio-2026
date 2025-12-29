"use client";

import Image from "next/image";
import { useState } from "react";

// ローカル画像パス
const imgSupabaseLogo = "/images/supabase-logo.png";
const imgSupabaseLogo1 = "/images/logo.png";
const imgSupabasePostgresDatabase = "/images/postgres-database.png";
const imgSupabaseTableEditorPng = "/images/table-editor.png";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-sm border-b border-[#2e2e2e]">
        <nav className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 h-16 flex items-center justify-between">
          <a href="https://supabase.com/" className="flex items-center">
            <Image
              src={imgSupabaseLogo1}
              alt="Supabase Logo"
              width={124}
              height={24}
              className="h-5 sm:h-6 w-auto"
            />
          </a>
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1">
              <button className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md">
                Product
              </button>
              <button className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md">
                Developers
              </button>
              <button className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md">
                Solutions
              </button>
              <a
                href="https://supabase.com/pricing"
                className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md"
              >
                Pricing
              </a>
              <a
                href="https://supabase.com/docs"
                className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md"
              >
                Docs
              </a>
              <a
                href="https://supabase.com/blog"
                className="px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md"
              >
                Blog
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/supabase/supabase"
                className="px-3 py-1.5 text-xs text-[#b4b4b4] border border-transparent rounded-md hover:bg-[#1f1f1f]"
              >
                GitHub
              </a>
              <a
                href="https://supabase.com/dashboard"
                className="px-3 py-1.5 text-xs text-[#fafafa] bg-[#242424] border border-[#363636] rounded-md hover:bg-[#2e2e2e]"
              >
                Sign in
              </a>
              <a
                href="https://supabase.com/dashboard"
                className="px-3 py-1.5 text-xs text-[#fafafa] bg-[#006239] border border-[rgba(62,207,142,0.3)] rounded-md hover:bg-[#007a47]"
              >
                Start your project
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-2 text-[#fafafa] hover:bg-[#1f1f1f] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#2e2e2e] bg-[#121212]">
            <div className="max-w-[1536px] mx-auto px-4 py-4 space-y-2">
              <a
                href="https://supabase.com/pricing"
                className="block px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="https://supabase.com/docs"
                className="block px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </a>
              <a
                href="https://supabase.com/blog"
                className="block px-3 py-2 text-sm text-[#fafafa] hover:bg-[#1f1f1f] rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </a>
              <div className="pt-2 border-t border-[#2e2e2e] space-y-2">
                <a
                  href="https://github.com/supabase/supabase"
                  className="block px-3 py-2 text-sm text-[#b4b4b4] hover:bg-[#1f1f1f] rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GitHub
                </a>
                <a
                  href="https://supabase.com/dashboard"
                  className="block px-3 py-2 text-sm text-[#fafafa] bg-[#242424] border border-[#363636] rounded-md hover:bg-[#2e2e2e] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="https://supabase.com/dashboard"
                  className="block px-3 py-2 text-sm text-[#fafafa] bg-[#006239] border border-[rgba(62,207,142,0.3)] rounded-md hover:bg-[#007a47] text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start your project
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-[432px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[90px]">
            {/* Banner */}
            <a
              href="https://supabase.com/wrapped"
              className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1 rounded-full bg-gradient-to-b from-[#1f1f1f] to-[#292929] border border-[#292929] backdrop-blur-sm text-[10px] sm:text-xs md:text-sm text-[#fafafa] hover:bg-[#2e2e2e] transition-colors"
            >
              <span className="whitespace-nowrap">
                Supabase Wrapped 2025: The year in review
              </span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Heading */}
            <div className="flex flex-col items-center gap-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69px] leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[72px] font-medium text-[#fafafa] text-center px-2 sm:px-4">
                Build in a weekend
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69.6px] leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[72px] font-medium text-[#3ecf8e] text-center px-2 sm:px-4">
                Scale to millions
              </h1>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-[17.4px] leading-5 sm:leading-6 md:leading-7 lg:leading-[28px] text-[#fafafa] text-center max-w-[576px] px-4">
              Supabase is the Postgres development platform.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Start your project with a Postgres database, Authentication,
              instant APIs, Edge
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Functions, Realtime subscriptions, Storage, and Vector embeddings.
            </p>

            {/* CTA Buttons */}
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

        {/* Logo Marquee Section */}
        <section className="w-full py-0 pb-8 sm:pb-12 md:pb-16 lg:pb-24 px-4">
          <div className="max-w-[896px] mx-auto">
            <p className="text-[10px] sm:text-xs md:text-[13.6px] text-[#898989] text-center mb-4 sm:mb-6 md:mb-8">
              Trusted by fast-growing companies worldwide
            </p>
            <div className="h-10 sm:h-12 max-w-[896px] mx-auto opacity-70 overflow-hidden relative">
              <div className="flex gap-6 sm:gap-8 md:gap-12 items-center animate-scroll whitespace-nowrap">
                {[
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
                ].map((company) => (
                  <span
                    key={company}
                    className="text-[#898989] text-sm sm:text-base font-medium"
                  >
                    {company}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {[
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
                ].map((company) => (
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

        {/* Features Section */}
        <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-[23.1px] leading-6 sm:leading-7 md:leading-8 lg:leading-[32px] text-[#fafafa] mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-4">
            <span className="text-[#fafafa]">Use one or all.</span>
            <span className="text-[#898989]">
              {" "}
              Best of breed products. Integrated as a platform.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* Database Card */}
            <a
              href="https://supabase.com/database"
              className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group"
            >
              <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                  <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                    Postgres Database
                  </h3>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[13.3px] leading-[20px] text-[#898989] mb-2">
                      Every project is{" "}
                      <span className="text-[#fafafa]">
                        a full Postgres database
                      </span>
                      , the world&apos;s most trusted relational database.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2 text-[13.2px] text-[#fafafa]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="#fafafa"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        100% portable
                      </li>
                      <li className="flex items-center gap-2 text-[13.5px] text-[#fafafa]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="#fafafa"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Built-in Auth with RLS
                      </li>
                      <li className="flex items-center gap-2 text-[13.3px] text-[#fafafa]">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="#fafafa"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Easy to extend
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[398px] h-[398px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Image
                    src={imgSupabasePostgresDatabase}
                    alt="Postgres Database"
                    width={398}
                    height={398}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </a>

            {/* Authentication Card */}
            <a
              href="https://supabase.com/auth"
              className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group"
            >
              <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <h3 className="text-[15.9px] leading-[24px] text-[#fafafa]">
                    Authentication
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-[13.5px] leading-[20px] text-[#fafafa]">
                    Add user sign ups and logins
                    <span className="text-[#898989]">,</span>
                    <br />
                    <span className="text-[#898989]">
                      securing your data with Row Level Security.
                    </span>
                  </p>
                </div>
              </div>
            </a>

            {/* Edge Functions Card */}
            <a
              href="https://supabase.com/edge-functions"
              className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group"
            >
              <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                    Edge Functions
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-[13.6px] leading-[20px] text-[#898989]">
                    Easily write custom code
                    <br />
                    <span className="text-[#fafafa]">
                      without deploying or scaling servers.
                    </span>
                  </p>
                </div>
              </div>
            </a>

            {/* Storage Card */}
            <a
              href="https://supabase.com/storage"
              className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group"
            >
              <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h12a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="text-[15.5px] leading-[24px] text-[#fafafa]">
                    Storage
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-[13.6px] leading-[20px] text-[#fafafa]">
                    Store, organize, and serve
                    <br />
                    <span className="text-[#898989]">
                      large files, from videos to images.
                    </span>
                  </p>
                </div>
              </div>
            </a>

            {/* Realtime Card */}
            <a
              href="https://supabase.com/realtime"
              className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group"
            >
              <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <h3 className="text-[15.5px] leading-[24px] text-[#fafafa]">
                    Realtime
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-[13.7px] leading-[20px] text-[#fafafa]">
                    Build multiplayer experiences
                    <br />
                    <span className="text-[#898989]">
                      with real-time data synchronization.
                    </span>
                  </p>
                </div>
              </div>
            </a>

            {/* Vector Card */}
            <a
              href="https://supabase.com/modules/vector"
              className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group"
            >
              <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-[18px] h-[18px]"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <h3 className="text-[16px] leading-[24px] text-[#fafafa]">
                    Vector
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-[13.8px] leading-[20px] text-[#898989]">
                    Integrate your favorite ML-models to{" "}
                    <span className="text-[#fafafa]">store,</span>
                    <br />
                    <span className="text-[#fafafa]">
                      index and search vector embeddings
                    </span>
                    <span className="text-[#898989]">.</span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Frameworks Section */}
        <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[34.7px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[43.2px] text-[#fafafa] text-center px-2 sm:px-4">
              Use Supabase with any framework
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 items-center max-w-[1152px] px-4">
              {[
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
              ].map((framework) => (
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

        {/* Customer Stories Section */}
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
              {[
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
              ].map((company) => (
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

        {/* Templates Section */}
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
            {[
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
            ].map((template, idx) => (
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

        {/* Dashboard Section */}
        <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[34.7px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[43.2px] text-[#fafafa] text-center px-4">
              Stay productive and manage your app
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="text-[#898989]">
                without leaving the dashboard
              </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 px-4">
              <button className="px-3 sm:px-4 md:px-[33px] py-2 sm:py-[9px] bg-[#0f0f0f] border border-[#fafafa] rounded-full text-[10px] sm:text-xs md:text-[13.6px] text-[#fafafa]">
                Table Editor
              </button>
              <button className="px-3 sm:px-4 md:px-[33px] py-2 sm:py-[9px] bg-[#0f0f0f] border border-[#2e2e2e] rounded-full text-[10px] sm:text-xs md:text-[13.6px] text-[#fafafa] opacity-80">
                SQL Editor
              </button>
              <button className="px-3 sm:px-4 md:px-[33px] py-2 sm:py-[9px] bg-[#0f0f0f] border border-[#2e2e2e] rounded-full text-[10px] sm:text-xs md:text-[13px] text-[#fafafa] opacity-80">
                RLS Policies
              </button>
            </div>

            <div className="w-full max-w-[1152px] bg-[#121212] border border-[#2e2e2e] rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg">
              <div className="bg-[#171717] border border-[#2e2e2e] rounded-lg h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[637.88px] relative overflow-hidden">
                <Image
                  src={imgSupabaseTableEditorPng}
                  alt="Supabase Table Editor"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
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
              {[
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
              ].map((tweet, idx) => (
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
                      <span className="text-sm text-[#fafafa]">
                        {tweet.user}
                      </span>
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
              {[
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
              ].map((tweet, idx) => (
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
                      <span className="text-sm text-[#fafafa]">
                        {tweet.user}
                      </span>
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

        {/* Final CTA Section */}
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

        {/* Footer */}
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
      </main>
    </div>
  );
}
