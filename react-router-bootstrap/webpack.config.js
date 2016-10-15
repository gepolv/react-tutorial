var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
      loaders: [
          {
              test: /.jsx?$/,
              loader: 'babel',
              exclude: /node_modules/,
              query:
                  {
                    presets: [ 'react', 'es2015']
                  }
          },
          {
              test: /\.css$/,
              loader: "style-loader!css-loader"
          },
          {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file?name=public/fonts/[name].[ext]'
          }
      ]
    }
}
