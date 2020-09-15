const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const rules = [
  {
    test: /\.tsx?$/,
    enforce: 'pre',
    loader: 'tslint-loader',
  },
  {
    test: /\.tsx?$/,
    loaders: ['babel-loader', 'ts-loader'],
    exclude: /node_modules/,
  },
  {
    test: /\.(sc|c)ss/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ]
  },
  {
    test: /\.(png|jpg|svg)$/,
    loader: 'file-loader?name=/images/[name].[ext]'
  },
  {
    test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=/font/[name].[ext]'
  },
]

module.exports = rules
