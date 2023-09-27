/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASEURL: process.env.BASEURL,
    DATABASE: process.env.DATABASE,
  },
  images: {
    domains: ["drive.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
};

module.exports = nextConfig;
