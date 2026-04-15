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
      {
        source: "/contact",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/frisor-tjenester-oslo",
        destination: "/tjenester",
        permanent: true,
      },
      {
        source: "/om-saxofon-frisor",
        destination: "/om-oss",
        permanent: true,
      },
      {
        source: "/kontakt-frisor-oslo",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
