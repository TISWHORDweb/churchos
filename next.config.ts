import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/**",
        // Omit search so ?v= cache-bust params on /public assets are allowed
      },
    ],
  },
};

export default nextConfig;
