/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "1000logos.net",
      "m.media-amazon.com",
      "freelogopng.com",
    ],
  },
};

module.exports = nextConfig;
