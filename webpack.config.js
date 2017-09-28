var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: "cheap-module-eval-source-map",
  entry: "./app/scripts/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }

}
