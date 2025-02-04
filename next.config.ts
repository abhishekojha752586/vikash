import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  return  [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
