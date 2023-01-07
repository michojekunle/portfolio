/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'photos.app.goo.gl', 'photos.google.com', 'images.unsplash.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
