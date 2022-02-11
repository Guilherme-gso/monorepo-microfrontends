const webPackConfig = require('./webpack.config')
const babelConfig = require('./babel.config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
  babelConfig, 
  webPackConfig, 
  webpack, 
  HtmlWebpackPlugin
}