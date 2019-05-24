const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const resolve = (dir) => {
  return path.resolve(process.cwd(), dir);
};

const _DEV_ = process.env.NODE_ENV === 'development';

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: _DEV_,
    plugins: [
      require('autoprefixer')({
        browsers: ['iOS>7', 'Android>4', 'Chrome > 31', 'ff > 31', 'ie >= 11']
      })
    ]
  }
};

const lessLoader = {
  loader: 'less-loader',
  options: {
    javascriptEnabled: true
  }
};

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.jsx'
  },
  devtool: 'inline-source-map',
  // 告诉devServer从什么位置查找文件
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'FoxGui的blog'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          postcssLoader
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          postcssLoader,
          lessLoader
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          name: 'assets/imgs/[name].[hash:8].[ext]',
          limit: 2048
        }},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['url-loader']},
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
              ['@babel/plugin-proposal-decorators', {legacy: true}],
              ['@babel/plugin-proposal-class-properties', {loose: true}],
              'lodash'
            ]
          }
        }
      }
      ]
  },
  resolve: {
    modules: [
      'node_modules',
      resolve('src')
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],

    alias: {
      '@assets': resolve('src/assets'),
      '@pages': resolve('src/pages'),
      '@components': resolve('src/components')
    }
  }
};
