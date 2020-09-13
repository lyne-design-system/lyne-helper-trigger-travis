const baseConfig = require('lyne-helper-eslint-config');

baseConfig.globals = {
  __dirname: 'readonly',
  module: 'readonly',
  require: 'readonly'
};

baseConfig.plugins = ['yaml'];

module.exports = baseConfig;
