const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[path][name].[ext]',
                        outputPath: 'images/'
                    }
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}