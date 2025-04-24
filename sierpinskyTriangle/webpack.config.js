const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./index.ts",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/pages', to: 'pages' },
        { from: 'styles', to: 'styles' }
      ]
    })
  ]
};