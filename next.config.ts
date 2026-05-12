import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Permite que el celular en la misma red Wi-Fi reciba las actualizaciones de código (HMR)
  experimental: {
    allowedOrigins: ['192.168.1.54:3000', '192.168.1.54']
  }
};

export default nextConfig;
