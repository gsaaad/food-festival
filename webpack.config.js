const path = require("path");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// bring in webpack
const webpack = require("webpack");
// basic configuration: entry, output, mode

module.exports = {
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
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
