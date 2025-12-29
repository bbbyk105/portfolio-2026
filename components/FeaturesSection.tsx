import Image from "next/image";

const imgSupabasePostgresDatabase = "/images/postgres-database.png";

export default function FeaturesSection() {
  return (
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
  );
}


