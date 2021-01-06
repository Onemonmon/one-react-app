const path = require("path");

/**
 * 导入webpack配置
 */
module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
};
