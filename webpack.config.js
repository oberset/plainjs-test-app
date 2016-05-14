var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "html",
                exclude: /node_modules/
            }
        ]
    }
};