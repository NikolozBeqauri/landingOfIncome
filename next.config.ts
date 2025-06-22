import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/landingOfIncome" : "",
  assetPrefix: isProd ? "/landingOfIncome" : "",
  trailingSlash: true,
};


export default nextConfig;
