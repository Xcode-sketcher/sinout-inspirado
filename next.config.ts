import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        // se quiser, pode ser mais específico:
        // pathname: "/templates/**",
      },
    ],
    // ou, se preferir, a forma antiga:
    // domains: ["assets.aceternity.com"],
  },
};

export default nextConfig;
