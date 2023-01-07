/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'photos.app.goo.gl', 'photos.google.com', 'www.linkpicture.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
