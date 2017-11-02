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

  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000
  },

  resolveLoader: {
    modules: ["node_modules"],
    extensions: [".js", ".json"],
    mainFields: ["loader", "main"],
    moduleExtensions: ['-loader']
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".jpg"]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    })
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
        test: /\.(png|jpg|gif)$/,
        loader: "file",
        options: {
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style" },
          { loader: "css"}
        ]
      }
    ]
  }

}
