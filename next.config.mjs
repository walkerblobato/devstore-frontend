/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para que erros de eslint e typescript não influenciem no deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
