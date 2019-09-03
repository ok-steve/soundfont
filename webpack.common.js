const path = require('path');

module.exports = {
  entry: {
    main: './src/scripts/main.js',
  },
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            name: 'js/[hash].worker.js',
          },
        },
      },
    ],
  },
};
