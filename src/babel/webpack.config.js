const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        babel: path.resolve(__dirname, './src/index')
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack Demo',
        template: path.resolve(__dirname, './src/index.html'),
      }),
      new CleanWebpackPlugin()
    ],
};