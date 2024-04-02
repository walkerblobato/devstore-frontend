/** @type {import('next').NextConfig} */
const nextConfig = {
  // Para que erros de eslint e typescript não influenciem no deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
