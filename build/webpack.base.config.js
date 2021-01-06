const path = require("path");

/**
 * 导入webpack配置
 */
module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            outputPath: 'images/',
            name: "[name].[hash].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, ".."),
    },
  },
};