const withCSS = require('@zeit/next-css');

module.exports = {
  ...withCSS({
    webpack(config, _options) {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: [
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      });

      return config;
    },
  }),
  experimental: { publicDirectory: true },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};
