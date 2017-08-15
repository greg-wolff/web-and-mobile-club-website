var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/docs/',
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
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
      //inject: false,
      filename: 'index.html',
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
    new HtmlWebpackPlugin({
      title: 'The Web and Mobile Club | About',
      //inject: false,
      filename: 'about.html',
      favicon: __dirname + '/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true,
        useShortDoctype: true,
        minifyCSS: true
      },
      template: './src/about.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'The Web and Mobile Club | Contact',
      //inject: false,
      filename: 'contact.html',
      favicon: __dirname + '/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true,
        useShortDoctype: true,
        minifyCSS: true
      },
      template: './src/contact.ejs'
    }),
    new ExtractTextPlugin("main.css"),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }
    }),
    new UglifyJSPlugin()
  ]
}
