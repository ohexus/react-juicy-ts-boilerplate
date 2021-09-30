const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = () =>
  merge(common('development'), {
    devServer: {
      historyApiFallback: true,
      open: true,
      overlay: true,
      port: 9000,
      watchOptions: {
        ignored: [common.NODE_MODULES_REGEX, common.TESTS_REGEX],
      },
    },
    devtool: 'eval-cheap-source-map',
    plugins: [
      new ESLintPlugin({
        cache: true,
        cacheLocation: '.eslintcache.webpack',
        emitWarning: true,
        extensions: ['.ts', '.tsx'],
        failOnError: false,
        failOnWarning: false,
        files: common.SRC_DIR,
        overrideConfig: {
          ignorePatterns: ['*.spec.*', '*.test.*'],
        },
      }),
    ],
  });
