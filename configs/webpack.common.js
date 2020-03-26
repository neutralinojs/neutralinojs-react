const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/App-core/mainApp.js"),
  output: {
    filename: "app.[name].js",
    path: path.resolve(__dirname, "../app/assets/"),
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
