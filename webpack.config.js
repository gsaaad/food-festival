const path = require("path");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

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
    new BundleAnalyzerPlugin({
      // the report will output to an HTML file in the dist folder. report.html.
      // set to false if you don't want an automatic report
      analyzerMode: "static",
    }),
  ],
  mode: "development",
};
