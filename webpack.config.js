var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var ENV = process.env.NODE_ENV;

var baseConfig = {
  entry: {
    main: './src/scripts/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: ENV === 'production',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'postcss.config.js',
                },
              },
            },
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env'],
              plugins: [
                'babel-plugin-transform-object-rest-spread',
                'babel-plugin-transform-class-properties',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
  ],
};

if (ENV === 'production') {
  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = baseConfig;
