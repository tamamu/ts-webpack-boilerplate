const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  devServer: {
    open: true,
    watchContentBase: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/assets'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
