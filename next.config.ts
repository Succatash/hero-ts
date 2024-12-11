import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   ppr: "incremental",
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**", // Adjust this to match your image paths
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
