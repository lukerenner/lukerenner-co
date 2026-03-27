import type { NextConfig } from "next";

const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isCustomDomain ? "" : "/lukerenner-co",
  assetPrefix: isCustomDomain ? "" : "/lukerenner-co",
};

export default nextConfig;
