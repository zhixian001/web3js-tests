const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config, env) {


  config.ignoreWarnings = [
    ...(config.ignoreWarnings ? config.ignoreWarnings : []),
    function ignoreSourcemapsloaderWarnings(warning) {
      return (
        warning.module &&
        warning.module.resource.includes('node_modules') &&
        warning.details &&
        warning.details.includes('source-map-loader')
      );
    },
  ];

  // config.resolve.fallback = {
  //   ...config.resolve.fallback,
  //   console: require.resolve('console-browserify')
  // }

  config.plugins = [...config.plugins, new NodePolyfillPlugin()];

  return config;
};
