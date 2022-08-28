const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@images': resolve('src/assets/images'),
      '@components': resolve('src/components'),
      '@containers': resolve('src/containers'),
      '@utils': resolve('src/utils'),
      '@store': resolve('src/store'),
      '@services': resolve('src/services'),
      '@hooks': resolve('src/hooks'),
      '@data': resolve('src/data'),
    },
  };

  return config;
};
