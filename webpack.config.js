const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', 
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js', 
    clean: true, 
    publicPath: '/', 
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'], 
      },
    
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), 
    port: 3000,
    hot: true, 
    liveReload: true,
    open: true, 
    watchFiles: ['src/**/*'],
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






