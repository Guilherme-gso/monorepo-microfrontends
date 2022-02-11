module.exports = {
  presets: [
    "@babel/preset-env", 
    "@babel/preset-typescript", 
    "@babel/preset-react"
  ],
  plugins: [
    [require('babel-plugin-module-resolver'), {
      alias: {
        root: './',
        "~": "./src"
      }
    }]
  ]
}