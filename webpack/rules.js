const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const rules = [
  {
    test: /\.tsx?$/,
    use: ['babel-loader', 'ts-loader'],
    exclude: /node_modules/,
  },
  {
    test: /\.css/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  },
  {
    test: /\.scss/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ],
  },
  {
    test: /\.(png|jpg|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images/',
          esModule: false,
        },
      },
    ],
  },
  {
    test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: './',
        },
      },
    ],
  },
]

module.exports = rules
