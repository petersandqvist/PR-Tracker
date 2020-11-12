const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: {
    site: [
      "./src/main.ts",
      "./src/main.scss"
    ]
  },
  output: {
    filename: 'site.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: 8888
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './',
              name: '[folder]/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'src/static/icons', 'favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    }),
    new PrettierPlugin({
      printWidth: 90,
      tabWidth: 4,
      useTabs: false,
      semi: true,
      encoding: 'utf-8',
      extensions: [".js", ".ts", ".scss", ".html", ".cshtml", ".json"]
    })
  ]
};