/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [`${process.cwd()}/styles`]
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  }
};

export default nextConfig;
