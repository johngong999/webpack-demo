const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        single_entry: path.resolve(__dirname, './src/index')
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