var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(__dirname)
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
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|png|jpg|jpeg|woff|svg|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 102400
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ],
    resolve: {
        alias: {
            '@': require('path').resolve(__dirname, 'img') 
        }
    }
   
};

module.exports = config;