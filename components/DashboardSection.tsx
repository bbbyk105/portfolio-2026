import Image from "next/image";

const imgSupabaseTableEditorPng = "/images/table-editor.png";

export default function DashboardSection() {
  return (
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
  );
}

