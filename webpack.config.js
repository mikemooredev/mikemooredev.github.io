require('dotenv').config()

const mode = process.env.NODE_ENV || "development"
const path = require('path')

const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

  mode: mode,

  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'src/jekyll/assets/js'),
    filename: 'script.js',
  },

  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: ['node_modules'],
  },

  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: "../css/style.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(pc|sc|sa|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  devtool: 'source-map'
};