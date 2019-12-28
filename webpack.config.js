const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index'),
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
};