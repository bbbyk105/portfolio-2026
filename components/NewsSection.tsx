export default function NewsSection() {
  const newsItems = [
    {
      date: "2024/12/13",
      description: "年末年始休業のお知らせ",
    },
    {
      date: "2024/05/31",
      description: "ブラストエンジンを搭載するIBM災害対応情報システムが福島県の「福島県総合防災情報システム」にて採用されました。",
    },
    {
      date: "2023/01/30",
      description: "【1/30(月) EC Tech Meetup vol.2 ~Stripe~】 エンジニア向け無料オンラインイベントを開催",
    },
    {
      date: "2022/02/09",
      description: "【2/18(金)開催 Language Night vol.1】 エンジニア向け無料オンラインイベント開催",
    },
    {
      date: "2021/11/10",
      description: "API連携・SMTPリレー特化型メール配信システム「ブラストエンジン」をリリース",
    },
  ];

  return (
    <section className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm text-[#898989] uppercase tracking-wider mb-3 sm:mb-4">
            News
          </p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              最新情報
            </h2>
          </div>
        </div>
        <div className="space-y-0">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-4 sm:py-5 md:py-6 border-b border-[#2e2e2e] hover:bg-[#1f1f1f] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                <div className="w-24 sm:w-28 flex-shrink-0">
                  <span className="text-sm sm:text-base text-[#898989]">
                    {item.date}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base md:text-lg text-[#fafafa]">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

