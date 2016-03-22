var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,  /** this is to select where the application file are such as /app/ **/
  devtool: debug ? "inline-sourcemap" : null, /** inline-sourcemap helps with debugging **/
  entry: "./js/scripts.js",  /** this the file execution starts **/
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"  /** this is what will be created **/
  },
  plugins: debug ? [] : [  /** if we are in debug mode NO plugins else use all plugins below. **/
    new webpack.optimize.DedupePlugin(), /** this will remove duplicates **/
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }), /** this will make the code production ready. **/
  ],
};