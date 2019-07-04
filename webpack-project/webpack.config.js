const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',

  devtool: `inline-source-map`,

  entry: {
    app: './src/index.js',
    print: './src/print.js',
    // another: './src/another-module.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  
  devServer: {
    contentBase: './dist',
    hot: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    // new ManifestPlugin(), 
    new HtmlWebpackPlugin({
      // title: 'Output Management'
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // ts
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

/*   optimization: {
    splitChunks: {
      chunks: 'all'
    }
  } */
};