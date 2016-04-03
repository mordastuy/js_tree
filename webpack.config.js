const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js_tree.js',
        publicPath: '/dist/'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            // {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: 'file-loader?name=[name].[ext]'},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};