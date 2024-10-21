/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'focused-viper-973.convex.cloud',
      },
    ],
  },
};

export default nextConfig;
