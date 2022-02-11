const { ProvidePlugin } = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: [".tsx", '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      }
    ]
  },
  plugins: [
    new ProvidePlugin({
      React: 'react'
    })
  ]
}