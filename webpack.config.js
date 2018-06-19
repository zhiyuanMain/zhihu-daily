var path = require('path');

var config = {
    entry: {
        main: './index'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'index.js'
    }
}

module.exports = config;