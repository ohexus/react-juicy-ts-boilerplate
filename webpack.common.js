const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/index.tsx',
    mode: env,
    module: {
      rules: [
        {
          exclude: exports.NODE_MODULES_REGEX,
          loader: 'babel-loader',
          test: /\.tsx?$/,
        },
        {
          include: path.join(__dirname, 'src'),
          test: exports.SCSS_REGEX,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-modules-typescript-loader',
              options: {
                mode: isProduction ? 'verify' : 'emit',
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: exports.SCSS_REGEX,
                  localIdentName: isProduction
                    ? '[hash:base64:15]'
                    : '[name]__[local]--[hash:base64:5]',
                },
              },
            },
            { loader: 'resolve-url-loader' },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          loader: 'file-loader',
          test: /\.(woff|woff2|eot|otf|ttf)$/,
        },
        {
          loader: 'url-loader',
          options: {
            generator: (content) => svgToMiniDataURI(content.toString()),
          },
          test: /\.svg$/,
        },
        {
          loader: 'url-loader',
          options: {
            limit: 1024 * 4,
          },
          test: /\.png$/,
        },
      ],
    },
    output: {
      filename: `${exports.BUNDLE_NAME}.${env}.js`,
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: 'head',
        scriptLoading: 'defer',
        template: './src/index.html',
        filename: 'index.html',
      }),
    ],
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
  };
};

exports.BUNDLE_NAME = '[name].[contenthash]';
exports.NODE_MODULES_REGEX = '/node_modules/';
exports.PUBLIC_DIR = 'public';
exports.SCSS_REGEX = /\.scss$/;
exports.SRC_DIR = 'src';
exports.TESTS_REGEX = '/.(spec|test).[a-z]+$/i';
