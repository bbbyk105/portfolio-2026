import Image from "next/image";

const logos = [
  { name: "Meta", src: "/top-logos/meta.png", alt: "Meta" },
  { name: "Shopify", src: "/top-logos/shopify.webp", alt: "Shopify" },
  { name: "Stripe", src: "/top-logos/stripe.webp", alt: "Stripe" },
  { name: "n8n", src: "/top-logos/n8n.png", alt: "n8n" },
  { name: "Next.js", src: "/top-logos/nextjs.png", alt: "Next.js" },
];

export default function LogoMarquee() {
  return (
    <section className="w-full py-0 pb-8 sm:pb-12 md:pb-16 lg:pb-24 px-4">
      <div className="max-w-[896px] mx-auto">
        <p className="text-[10px] sm:text-xs md:text-[13.6px] text-[#898989] text-center mb-4 sm:mb-6 md:mb-8">
          Powered by industry-leading technologies
        </p>
        <div className="h-10 sm:h-12 max-w-[896px] mx-auto overflow-hidden relative">
          <div className="flex gap-8 sm:gap-12 md:gap-16 items-center animate-scroll whitespace-nowrap">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center h-8 sm:h-10 md:h-12 flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo) => (
              <div
                key={`dup-${logo.name}`}
                className="flex items-center justify-center h-8 sm:h-10 md:h-12 flex-shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


