const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const secrets = require('./.secret');
const environment = require('./environment');

module.exports = {
  ...withBundleAnalyzer(
    withCSS({
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
  ),
  experimental: { publicDirectory: true },
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || secrets.GOOGLE_CLIENT_ID,
    ...environment[process.env.NODE_ENV],
  },
};
