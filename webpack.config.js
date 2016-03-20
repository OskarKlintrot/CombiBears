var webpack = require('webpack')
var path = require('path')
var _ = require('lodash')
var buildPath = path.resolve(__dirname, 'build')
var buildPathCordova = path.resolve(__dirname, 'cordova/www')
var sourcePath = path.resolve(__dirname, 'src')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var TransferWebpackPlugin = require('transfer-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const production = process.argv.find((element) => element === '--production') ? true : false

const jsBaseEntry = [
  'babel-polyfill',
  './src/app/app.jsx'
]

const jsEntry = production ? jsBaseEntry.concat([
  // Empty
]) : jsBaseEntry

var config = {
  entry: {
    js: jsEntry
  },
  devServer:{
    contentBase: 'src/www',
    devtool: 'source-map',
    hot: true,
    inline: true,
    port: 3000
  },
  output: {
    path: buildPath,
    filename: 'scripts/boundle.min.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'}
    ], sourcePath),
    new webpack.DefinePlugin({
        PRODUCTION: production
    }),
    new HtmlWebpackPlugin({
      template: './src/www/index.template',
      production: production,
      title: 'CombiBears',
      inject: false
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, "src/app")],
        exclude: [nodeModulesPath]
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [nodeModulesPath],
        loaders: [
            'react-hot',
            'babel?' + JSON.stringify({
                plugins: ["transform-decorators-legacy"],
                presets: ["react", "es2015", "stage-1"]
            })
        ]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.jsx'],
    root: __dirname
  },
  devtool: 'source-map',
  eslint: {
    configFile: '.eslintrc'
  }
}

if (production) {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
  ].concat(config.plugins)
}

if (production) {
  configForCordova = _.assign({}, config)
  configForCordova.output = {
    path: buildPathCordova,
    filename: 'scripts/boundle.min.js'
  }
  module.exports = [config, configForCordova]
} else {
  module.exports = config
}
