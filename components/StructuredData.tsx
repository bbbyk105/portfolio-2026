export default function StructuredData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.evimeria105.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Evimeria",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description:
      "Web制作からアプリ開発、広告運用、業務効率化まで、すべてのサービスを統合的に提供。競争優位性を生み出すデジタルシステムを構築します。",
    sameAs: [
      // ソーシャルメディアのリンクがあれば追加
      // "https://twitter.com/evimeria",
      // "https://www.linkedin.com/company/evimeria",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${baseUrl}/contact`,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Evimeria",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
