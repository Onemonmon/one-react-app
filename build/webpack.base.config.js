const path = require("path");
const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HappyPack = require("happypack");

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
      // {
      //   test: /\.(js|jsx|ts|tsx)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "happypack/loader?id=babel",
      //     },
      //   ],
      //   include: [path.resolve(__dirname, "../src")],
      //   exclude: [path.resolve(__dirname, "../node_modules")],
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
        include: [path.resolve(__dirname, "../src")],
        exclude: [path.resolve(__dirname, "../node_modules")],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            // 抽离css文件
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          {
            // 按需引入antd样式
            loader: "less-loader",
            options: { lessOptions: { javascriptEnabled: true } },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            outputPath: "images/",
            name: "[name].[hash].[ext]",
          },
        },
        exclude: /node_modules/,
      },
    ],
    noParse: /jquery|lodash/, // 没有依赖的类库，不进行扫描
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // 常用的排前面
    alias: {
      // 起别名能更快的找到文件
      "@": path.resolve(__dirname, "../src"),
      "@config": path.resolve(__dirname, "../config"),
    },
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    // new HappyPack({
    //   id: "babel",
    //   loaders: ["babel-loader?cacheDirectory"],
    //   // 电脑性能差的话不建议开启，或者将threads调低
    //   threads: 2,
    // }),
  ],
  optimization: {
    concatenateModules: true,
  },
};
