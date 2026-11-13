import type { NextConfig } from "next";
const wpUrl = process.env.WP_URL || "https://cms.gihanchathuranga.com";
const parsed = new URL(wpUrl);
const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: parsed.protocol.replace(":", "") as "http" | "https", hostname: parsed.hostname },
      { protocol: "https", hostname: "*.wp.com" }
    ]
  }
};
export default config;
