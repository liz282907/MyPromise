const path = require('path')
module.exports = {
    entry: './myPromise/Promise.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'myPromise.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["es2015", { "modules": false }], 'stage-0'
                        ]

                    }
                }
            }]
    }
}
