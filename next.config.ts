import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",              // export to ./out
  images: { unoptimized: true }, // next/image on static hosts
  trailingSlash: true            // safer on many static hosts/CDNs
};

export default nextConfig;
