const path = require('path')
const config = require('./webpack/config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const distDir = './build'

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/ts/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, distDir),
    compress: true,
    open: true,
    port: 6969
  },
  output: {
    path: path.resolve(__dirname, distDir),
    filename: '[name].[chunkhash].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': path.join(__dirname, 'src/ts/app.tsx'),
      '@components': path.join(__dirname, 'src/ts/components'),
      '@models': path.join(__dirname, 'src/ts/models'),
      '@modules': path.join(__dirname, 'src/ts/modules'),
      '@services': path.join(__dirname, 'src/ts/services'),
      '@store': path.join(__dirname, 'src/ts/store'),
      '@assets': path.join(__dirname, 'src/assets'),
    },
  },
  module: {
    rules: config.rules,
  },
  plugins: config.plugins,
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        // cache: true,
        // parallel: true,
        // sourceMap: true,
      }),
    ],
  },
}
