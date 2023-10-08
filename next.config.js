/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ['mongoose']
    },
    images: {
      domains: ['lh3.googleusercontent.com', 'cdn-icons-png', 'yt3.ggpht.com', 'i.ytimg.com']
    },
    webpack(config){
      config.experiments= {
        ...config.experiments,
        topLevelAwait: true
      }
      return config;
    }
  }
  
  module.exports = nextConfig