/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd1fdloi71mui9q.cloudfront.net',
          },
        ],
      },
}

module.exports = nextConfig
