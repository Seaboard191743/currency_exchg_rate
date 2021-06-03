const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    // publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "images", to: "images" }],
    // }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      // {
      //   test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "/images/[name].[ext]",
      //   },
      // },
    ],
  },
};
