// const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path');


module.exports = env => {
    console.log("Environment variables", env)

    console.log(path.resolve(__dirname))

    return {
        entry: { test: __dirname + "/src/index.js" },
        context: path.resolve(__dirname),
        output: {
            path: __dirname + "/dist/",
            filename: "test.js",
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],

                },
                {
                    test: /\.(png|jpg|woff|woff2|eot|ttf|svg|webp)$/,
                    loader: "file-loader",
                    options: {
                        // publicPath: path.resolve(__dirname, 'public')
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [
            // new HtmlWebpackPlugin({
            //     filename: "index.html",
            //     template: __dirname + "/src/indexTemplate.html",
            //     favicon: './resources/img/document_red_qa.ico'
            // }),
        ]
    }
}
