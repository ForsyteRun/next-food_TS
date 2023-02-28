const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['dodopizza.azureedge.net'],
  },
  rewrites() {
    return {
      afterFiles: [
        {
          source: '/pizzas',
          destination: 'http://localhost:3001/pizzas',
        },
      ],
    }
  },
}

module.exports = nextConfig
