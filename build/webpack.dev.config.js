const baseConfig = require("./webpack.base.config.js");
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new BundleAnalyzerPlugin({
      port: 10087,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 10086,
    open: true,
    overlay: true,
  },
});
