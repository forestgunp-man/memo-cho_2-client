// craco.config.js
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // ここで webpackConfig をカスタマイズします。
      webpackConfig.resolve.fallback = {

      };



      return webpackConfig;
    }
  }
};

