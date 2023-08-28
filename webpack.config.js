const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = false;

const config = {
  entry: {
    bundled: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
  },
  devtool: 'source-map',
  devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      hot: true,        
      open: true,
      host: 'localhost',
      historyApiFallback: true,
      compress: true
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'webpack app',
          filename: 'index.html',
          template: 'src/template.html',
      }),

      // Add your plugins here
      // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/i,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
              }
              
          },
          {
              test: /\.css$/i,
              use: ['style-loader','css-loader'],
          },
          {
              test: /\.scss$/i,
              use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          // {
          //     test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          //     type: 'asset',
          // },

          // Add your rules for custom modules here
          // Learn more about loaders from https://webpack.js.org/loaders/
      ],
  },
};

module.exports = () => {
  if (isProduction) {
      config.mode = 'production';
  } else {
      config.mode = 'development';
  }
  return config;
};
