const path = require('path');

const { mxProjectRootDir } = require('./readConfig')();

module.exports = {
  widgetRoot: __dirname,
  srcDir: path.join(__dirname, 'src'),
  testCoverageDir: path.join(__dirname, 'reports'),
  srcEntry: './src/index.js',
  srcPreviewEntry: './src/index.webmodeler.js',
  confDir: __dirname,
  buildDir: path.join(__dirname, 'build'),
  mxProjectRootDir,
  widgetPackageXML: path.join(__dirname, 'src', 'package.xml'),
  widgetConfigXML: path.join(__dirname, 'src', 'widget.config.xml'),
};
