const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};
