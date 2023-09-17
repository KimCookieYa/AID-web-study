const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 chrome versions"],
                  debug: true,
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugin: [],
        },
      },
    ],
  }, // babel 설정
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력
};
