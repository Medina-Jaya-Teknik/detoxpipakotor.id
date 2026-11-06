import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kota/bandung-kota",
        destination: "/kota/bandung",
        permanent: true,
      },
      {
        source: "/blog/tanda-pipa-air-bocor-tersembunyi-dinding",
        destination: "/blog/tanda-pipa-air-kotor-penuh-kerak",
        permanent: true,
      },
      {
        source: "/blog/jasa-deteksi-pipa-bocor-bandung",
        destination: "/blog/bahaya-soda-api-pipa-pvc-mampet",
        permanent: true,
      },
      {
        source: "/blog/biaya-deteksi-pipa-bocor-bandung-harga-saluran-mampet",
        destination: "/blog/biaya-detox-pipa-kotor-bandung-harga-saluran-mampet",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemaps.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
