const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')


module.exports = env => {
    console.log("Environment variables", env)

    return {
        mode: "production",
        entry: { test: __dirname + "/src/index.js" },
        output: {
            path: __dirname + "/dist/",
            filename: "index.js",
            publicPath: path.resolve("public")
        },
        optimization: {
            minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],

                },
                {
                    test: /\.css$/,
                    use: ["style-loader", {
                        loader: "css-loader",
                        options: { url: false }//Damit alle Image URLs auf ihrem public Pfad bleiben(so wie es im code angegeben wird)
                    }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
}
