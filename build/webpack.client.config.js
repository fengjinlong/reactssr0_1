const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist/public")
  },
  module: {
    rules: [{ test: /\.jsx?$/, use: "babel-loader" }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
