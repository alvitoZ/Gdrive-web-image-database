// next.config.js
module.exports = {
    async rewrites() {
        return [
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
          {
            source: '/api/:path*',
            destination: '*',
          },
        ]
      },
  };

