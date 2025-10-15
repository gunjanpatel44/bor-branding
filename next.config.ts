import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blckorack.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'blckorack-dev.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        '*.sharp': ['external sharp'],
      },
    },
  },
}

export default nextConfig
