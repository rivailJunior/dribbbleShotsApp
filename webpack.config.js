const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: './public',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader', // The backup style loader
                    'css?sourceMap!sass?sourceMap'
                )
            },{
                test: /\.less$/,
                loader: "css-loader!less-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
    ],
}