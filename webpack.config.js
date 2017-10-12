/*eslintIgnore*/
var path = require('path')
var webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: "cheap-module-eval-source-map",
  watch: true,
  entry: [
    'babel-polyfill',
    './app/scripts/client'
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  resolveLoader: {
    modules: ["node_modules"],
    extensions: [".js", ".json"],
    mainFields: ["loader", "main"],
    moduleExtensions: ['-loader']
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new ExtractTextPlugin('style.css', {allChunks: true})
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: "babel",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!autoprefixer?browsers=last 2 versions!sass')
      },
    ]
  }

}
