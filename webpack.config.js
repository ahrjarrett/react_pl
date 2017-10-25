const path = require('path')

const config = {
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  entry: ['babel-polyfill', './src/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' }
    ]
  }
}

module.exports = config
