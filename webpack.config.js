const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './index.js'
  },
  mode: 'production',
  output: {
    filename: 'index.js',
    library: 'lyneTriggerTravis',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [new CleanWebpackPlugin()],
  target: 'node'
};
