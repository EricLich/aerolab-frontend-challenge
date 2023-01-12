/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['coding-challenge-api.aerolab.co']
  },
  modularizeImports: {
    /* "@next/font": {
      transform: "@next/font/{{member}}"
    } */
  }
}

module.exports = nextConfig
