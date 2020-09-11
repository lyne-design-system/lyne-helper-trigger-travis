const baseConfig = require('lyne-helper-eslint-config');

baseConfig.globals = {
  module: 'readonly',
  require: 'readonly'
};

baseConfig.plugins = ['yaml'];

module.exports = baseConfig;
