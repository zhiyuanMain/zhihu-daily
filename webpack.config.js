var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        main: './index'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ]
};

module.exports = config;