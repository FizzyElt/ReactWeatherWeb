const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1',
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    noInfo: true,
    port: 3000,
  },
})
