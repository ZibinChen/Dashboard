/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // 关键：这里必须改成当前仓库的名字 Dashboard
  basePath: '/Dashboard', 
  assetPrefix: '/Dashboard/', 
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
