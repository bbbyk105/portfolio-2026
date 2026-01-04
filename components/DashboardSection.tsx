const steps = [
  {
    id: "consultation",
    name: "お問い合わせ・ヒアリング",
    description: "ご要望を詳しくお聞きし、お客様のビジネス目標を理解します。",
  },
  {
    id: "proposal",
    name: "提案・見積もり",
    description: "最適なソリューションを提案し、詳細な見積もりをご提示します。",
  },
  {
    id: "contract",
    name: "契約・キックオフ",
    description: "契約後、プロジェクトのキックオフミーティングを実施します。",
  },
  {
    id: "development",
    name: "開発・制作",
    description: "定期的な進捗報告を行いながら、高品質な開発を進めます。",
  },
  {
    id: "testing",
    name: "テスト・調整",
    description: "品質チェックと改善を行い、お客様のご要望に合わせて調整します。",
  },
  {
    id: "launch",
    name: "リリース・運用開始",
    description: "リリース後も継続的なサポートを提供し、ビジネス成長をサポートします。",
  },
];

export default function DashboardSection() {
  return (
    <section className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              プロジェクトの進め方
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            お客様のビジネス成長をサポートする、確かな開発プロセスをご紹介します。
          </p>
        </div>

        {/* タイムライン形式のステップ */}
        <div className="relative">
          {/* デスクトップ用：横タイムライン */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4 relative">
            {/* 上部の接続線 */}
            <div className="absolute top-12 left-12 right-12 h-px bg-[#0ABAB5]/30"></div>

            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center">
                {/* ステップ番号 */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#171717] border-2 border-[#0ABAB5] flex items-center justify-center mb-6 group-hover:bg-[#0ABAB5]/10 transition-colors">
                  <span className="text-2xl font-bold text-[#0ABAB5]">{index + 1}</span>
                </div>

                {/* ステップ内容 */}
                <div className="text-center space-y-3">
                  <h3 className="text-base sm:text-lg font-medium text-[#fafafa]">
                    {step.name}
                  </h3>
                  <p className="text-sm text-[#898989] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* モバイル・タブレット用：縦タイムライン */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex gap-6">
                {/* 左側：番号と線 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#171717] border-2 border-[#0ABAB5] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-[#0ABAB5]">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-[#0ABAB5]/30 mt-4 min-h-[80px]"></div>
                  )}
                </div>

                {/* 右側：内容 */}
                <div className="flex-1 pt-1 pb-8">
                  <h3 className="text-base sm:text-lg font-medium text-[#fafafa] mb-2">
                    {step.name}
                  </h3>
                  <p className="text-sm text-[#898989] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
