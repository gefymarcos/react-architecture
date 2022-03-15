const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin') 

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Typescript
      {
        test: /\.?tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'assets/img'
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin(), 
  ],
}