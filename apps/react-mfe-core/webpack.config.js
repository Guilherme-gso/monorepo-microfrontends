const { 
  webPackConfig, 
  HtmlWebpackPlugin, 
  webpack 
} = require('@packages/workspaces')

const path = require('path')
const packageJson = require('../../package.json')

const { container } = webpack

module.exports = {
  ...webPackConfig,
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  devServer: {
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname , 'dist')
  },
  plugins: [
    ...webPackConfig.plugins,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new container.ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        reactMfeAlt: 'reactMfeAlt@http://localhost:4000/remoteEntry.js'
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: packageJson.dependencies.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom']
        },
      }
    })
  ],
}