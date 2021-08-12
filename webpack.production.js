const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = () =>
  merge(common('production'), {
    devtool: 'nosources-source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          exclude: common.NODE_MODULES_REGEX,
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${common.BUNDLE_NAME}.production.css`,
      }),
      // TODO: uncomment this once public dir is full of content
      // new CopyPlugin({
      //   patterns: [{ from: common.PUBLIC_DIR, to: '' }],
      // }),
    ],
  });
