const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
          }
      ]
  },
  plugins: [
      new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
      })
  ]
}