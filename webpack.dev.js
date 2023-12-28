const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
});
