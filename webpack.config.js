const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // или 'production' для финального билда
  entry: './src/index.js', // Главный JS-файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Итоговый JS-файл
    clean: true, // Очищает dist при каждом билде
  },
  devServer: {
    static: './dist',
    port: 3000, 
    hot: true, 
    open: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', 
    }),
  ],
};
