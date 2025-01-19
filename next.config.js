/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactRoot: "concurrent",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
