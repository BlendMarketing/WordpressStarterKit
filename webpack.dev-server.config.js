const webpack = require("webpack");
const path = require("path");

const themeName = "";

module.exports = require("./webpack.base.js")({
    devtool: "eval",
    rules: [
        {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: function () {
                            return [require("autoprefixer")];
                        }
                    }
                },
                {
                    loader: "sass-loader",
                    options:{
                        sourceMap: true,
                        includePaths: [path.resolve(__dirname, "themes/" + themeName + "/assets/scss")]
                    }
                },
            ],
        },
    ],
    output: {
        path: path.join(__dirname, "public/bundle"),
        publicPath: "http://webpack:8080/",
        filename: "bundle.js",
        sourceMapFilename: "[file].map",
    },
    devServer: {
        publicPath: "/",
        public: "webpack:8080",
        host: "webpack",
        port: 8080,
        watchOptions: {
            poll: 1000,
        },
    },
});

