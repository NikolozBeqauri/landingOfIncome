import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/landingOfIncome",
  assetPrefix: "/landingOfIncome", 
};

export default nextConfig;
