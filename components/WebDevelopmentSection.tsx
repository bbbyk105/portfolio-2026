import Image from "next/image";

export default function WebDevelopmentSection() {
  // 実績がある場合はここに追加
  const portfolioItems = [
    {
      title: "企業サイト制作",
      description: "スマホ・PC対応の見やすいWebサイト",
      image: "/images/table-editor.png", // 実績画像があれば置き換え
    },
    {
      title: "ECサイト構築",
      description: "高速で使いやすいネットショップ",
      image: "/images/table-editor.png", // 実績画像があれば置き換え
    },
    {
      title: "ランディングページ",
      description: "お問い合わせを増やすLP制作",
      image: "/images/table-editor.png", // 実績画像があれば置き換え
    },
  ];

  return (
    <section className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              Web制作
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            最新技術を活用し、使いやすく見やすいWebサイトを制作します。
            スマホ・PC対応、検索エンジン対策、表示速度の向上まで対応。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
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
                    {item.title}
                  </h3>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[13.3px] leading-[20px] text-[#898989] mb-4">
                      {item.description}
                    </p>
                    <div className="relative w-full h-48 bg-[#242424] rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
