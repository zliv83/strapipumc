/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "helpful-positivity-9e5f57aa9a.media.strapiapp.com",
      },
    ],
  },
};

module.exports = nextConfig;
