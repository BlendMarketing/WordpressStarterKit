/**
 * This file represents the basic configuration that we will run to get our
 * bundle generated. It doesn't do anything by itself, but instead, returns a
 * function that takes an option parameter.
 *
 * Any changes/additions to this configuration should come in through the option
 * paramater.
 */
const path = require("path");
const webpack = require("webpack");
const themeName = "";

module.exports = function(options) {


    /**
     * This is intentionally slim. We ad the sass loaders in the individual config
     * files. This allows us to process them separately. In dev we load them in
     * js, in production we use the ExtractTextPlugin to save them in a new file.
     */
    var rules = [
        {
            test: /\.html$/,
            use: ["html-loader"],
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        hash: "sha512",
                        digest: "hex",
                        name: "images/[name]_[hash].[ext]",
                    },
                },
                {
                    loader: "image-webpack-loader",
                    options: {
                        bypassOnDebug: true,
                        optimizationLevel: 7,
                        interlaced: false,
                    }
                }
            ]
        },
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: "babel-loader",
        },
    ];

    // This is the production output. It can be overridden fron extending
    // configurations.
    var output = {
        path: path.join(__dirname, "themes/"+themeName+"/bundle"),
        publicPath: "/wp-content/themes/" + themeName + "/bundle/",
        filename: "[hash].js",
        sourceMapFilename: "[file].map",
    };

    var plugins = [
    ];

    // Merge in option.plugins
    plugins = options.plugins ? plugins.concat(options.plugins) : plugins;

    // Merge in option.rules
    rules = options.rules ? rules.concat(options.rules) : rules;

    // Override output if we need to.
    output = options.output ? options.output : output;

    return {
        cache: true,
        entry: {
            [themeName]: path.join(__dirname, "themes/" + themeName + "/assets/js/entrypoints/app.js"),
        },
        devtool: options.devtool,
        output: output,
        module: {
            rules: rules,
        },
        resolve: {
            modules: [
                "node_modules",
                "themes/"+themeName+"/assets/js",
                "themes/"+themeName+"/assets/scss",
                "themes/"+themeName+"/assets/icons",
            ],
        },
        plugins: plugins,
        devServer: options.devServer ? options.devServer : {},
    };
};

