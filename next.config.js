/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    /* "@next/font": {
      transform: "@next/font/{{member}}"
    } */
  }
}

module.exports = nextConfig
