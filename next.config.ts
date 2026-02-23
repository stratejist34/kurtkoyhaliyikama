import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/hizmetlerimiz",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/hizmetlerimiz/:path*",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/hali-yikama",
        destination: "/hizmetler/hali-yikama",
        permanent: true,
      },
      {
        source: "/hali-yikama/",
        destination: "/hizmetler/hali-yikama",
        permanent: true,
      },
      {
        source: "/kurumsal/",
        destination: "/kurumsal",
        permanent: true,
      },
      {
        source: "/iletisim/",
        destination: "/iletisim",
        permanent: true,
      },
      {
        source: "/fiyat-listesi/",
        destination: "/fiyat-listesi",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(avif|webp|jpg|jpeg|png|svg|woff2|woff|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
