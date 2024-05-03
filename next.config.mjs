/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [`${process.cwd()}/styles`]
  },
  reactStrictMode: true
};

export default nextConfig;
