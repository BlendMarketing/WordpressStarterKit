const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const themeName = "";//ThemeName

module.exports = require("./webpack.base.js")({
    loaders: [
        {
            test: /\.s?css$/,
            loader: ExtractTextPlugin.extract("style", ["raw", "sass"]),
        }
    ],

    output: {
        path: path.join(__dirname, "public/wp-content/themes/" + themeName + "/bundle"),
        publicPath: "/wp-content/themes/" + themeName + "/bundle/",
        filename: "[name].[hash].js",
        sourceMapFilename: "[file].map",
    },

    devtool: "cheap-module-source-map",
    plugins: [
        // Run webpack in production mode.
        // figure out the conflicts between this and dev server later.
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/wp-content/themes/" + themeName + "/header.php"),
            filename: path.join(__dirname, "public/wp-content/themes/" + themeName + "/header.php"),
            chunks: ['" + themeName + "'],
            inject: "head",
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),

        new ExtractTextPlugin("[contentHash].css"),
    ],
});
