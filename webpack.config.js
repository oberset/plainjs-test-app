'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                loader: "html",
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    }
};