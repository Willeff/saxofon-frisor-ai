import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/prices",
        destination: "/tjenester",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
