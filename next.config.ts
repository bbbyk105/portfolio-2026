import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // メタデータのストリーミングを止め、canonical・title を常に <head> に出す（<body> 側の canonical は Google が無視する）
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
