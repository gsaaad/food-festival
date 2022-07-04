const path = require("path");

// bring in webpack
const webpack = require("webpack");
// basic configuration: entry, output, mode

module.exports = {
  entry: "./assets/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  plugins: [
    // adding plugin, like JQUERY
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  mode: "development",
};
