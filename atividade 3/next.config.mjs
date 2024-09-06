// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fly.metroimg.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  