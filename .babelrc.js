module.exports = {
    plugins: ["@babel/transform-runtime"],
    presets: [
      [
        "@babel/preset-react",
        {
          targets: {
            esmodules: true,
          },
        }
      ],
    ],
  };