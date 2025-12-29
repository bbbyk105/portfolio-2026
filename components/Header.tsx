"use client";

import Image from "next/image";
import { useState } from "react";

const imgSupabaseLogo1 = "/images/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
}

