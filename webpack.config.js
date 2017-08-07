var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'main.bundle.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|woff(2)?|svg)$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Web and Mobile Club',
      favicon: __dirname + '/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true,
        useShortDoctype: true,
        minifyCSS: true
      },
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin("main.css")
  ]
}
