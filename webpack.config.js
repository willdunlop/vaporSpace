module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    // }, {
    //   test: /\.(png|jpg|gif)$/,
    //   loader: 'url-loader',
    //   options: {
    //     limit: 8192
    }, {
      test: /\.(png|svg|jpg|gif|ttf)$/,
      loaders: ["file-loader"],

    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
