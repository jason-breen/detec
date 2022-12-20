const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  optimization: {
    minimize: false
  },
  
  //    mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: 'index.html',
  })],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    compress: true,
    liveReload: false,
    port: 8080,
    proxy: {
        '/api': 'http://localhost:3000',
    },
  },
};
