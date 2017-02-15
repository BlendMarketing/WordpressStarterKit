var webpack = require("webpack");
var path = require("path");

module.exports = require("./webpack.base.js")({
    devtool: "eval",
    loaders: [
        {
            test: /\.s?css$/,
            loaders: ["style", "css", "sass?sourceMap"]
        },
    ],
    output: {
        path: path.join(__dirname, "/bundle"),
        filename: "bundle.js",
        publicPath: "http://webpack:8080/",
        sourceMapFilename: "[file].map",
    },
    devServer: {
        publicPath: "/",
        plugins: [],
        devtool: "eval",
        debug: true,
        host: "webpack",
        port: 8080,
        watchOptions: {
            poll: 1000,
        },
    },
});

