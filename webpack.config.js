const webpackConfig = require('hjs-webpack');

module.exports = webpackConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
});
