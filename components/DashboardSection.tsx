import Image from "next/image";

const imgSupabaseTableEditorPng = "/images/table-editor.png";

export default function DashboardSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              Stay productive and manage your app
              <span className="text-[#898989]"> without leaving the dashboard</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">

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
      </div>
    </section>
  );
}


