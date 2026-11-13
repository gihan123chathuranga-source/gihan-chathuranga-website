import type { NextConfig } from "next";

const wpUrl =
  process.env.WP_URL || "https://cms.gihanchathuranga.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.gihanchathuranga.com",
      },
      {
        protocol: "https",
        hostname: "gihanchathuranga.com",
      },
    ],
  },
};

export default nextConfig;
