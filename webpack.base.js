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

module.exports = function(options) {

    var themeName = "";//Append Theme Name Here
    /**
     * This is intentionally slim. We ad the sass loaders in the individual config
     * files. This allows us to process them separately. In dev we load them in
     * js, in production we use the ExtractTextPlugin to save them in a new file.
     */
    var loaders = [
        {
            test: /\.html$/,
            loaders: ["raw"]
        },
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: "babel",
            query: {
                plugins: ["transform-runtime"],
                presets: ["es2015"],
            },
        },
    ];

    // This is the production output. It can be overridden fron extending
    // configurations.
    var output = {
        path: path.join(__dirname, "themes/" + themeName + "/bundle"),
        publicPath: "/wp-content/themes/" + themeName + "/bundle/",
        filename: "[hash].js",
        sourceMapFilename: "[file].map",
    };

    var plugins = [
    ];

    // Merge in option.plugins
    plugins = options.plugins ? plugins.concat(options.plugins) : plugins;

    // Merge in option.loaders
    loaders = options.loaders ? loaders.concat(options.loaders) : loaders;

    // Override output if we need to.
    output = options.output ? options.output : output;

    return {
        cache: true,
        entry: {
            " + themeName + ": path.join(__dirname, "assets/" + themeName + "/js/entrypoints/app.js"),
        },
        devtool: options.devtool,
        output: output,
        sassLoader: {
            includePaths: [path.resolve(__dirname, "./assets/" + themeName + "/scss")]
        },
        module: {
            loaders: loaders,
        },
        resolve: {
            modulesDirectories: [
                "node_modules",
                "assets/" + themeName + "/js",
                "assets/" + themeName + "/scss",
                "assets/" + themeName + "/icons",
            ],
        },
        plugins: plugins,
        devServer: options.devServer ? options.devServer : {},
    };

};

