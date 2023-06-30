const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.scdn.co'],
    unoptimized: true
  },
}

module.exports = withContentlayer(nextConfig)
