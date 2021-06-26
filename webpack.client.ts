import * as Path from "path";
import nodeExternals from "webpack-node-externals";
module.exports = {
  mode: "development",
  entry: "./src/client/index",
  output: {
    filename: "index.js",
    path: Path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-typescript",
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions"],
                },
              },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
};
