import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/apps/biashara-mkononi/en/privacy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/apps/biashara-mkononi/en/terms",
        permanent: true,
      },
      {
        source: "/en/privacy",
        destination: "/apps/biashara-mkononi/en/privacy",
        permanent: true,
      },
      {
        source: "/en/terms",
        destination: "/apps/biashara-mkononi/en/terms",
        permanent: true,
      },
      {
        source: "/sw/privacy",
        destination: "/apps/biashara-mkononi/sw/privacy",
        permanent: true,
      },
      {
        source: "/sw/terms",
        destination: "/apps/biashara-mkononi/sw/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
