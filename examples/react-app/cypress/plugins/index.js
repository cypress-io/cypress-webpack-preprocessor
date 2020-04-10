const findWebpack = require('find-webpack')
const webpackPreprocessor = require('../../../..')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on) => {
  // find the Webpack config used by react-scripts
  const webpackOptions = findWebpack.getWebpackOptions()

  if (!webpackOptions) {
    throw new Error('Could not find Webpack in this project 😢')
  }

  // if we just pass webpackOptions to the preprocessor
  // it won't work - because react-scripts by default
  // includes plugins that split specs into chunks, etc.
  // https://github.com/cypress-io/cypress-webpack-preprocessor/issues/31

  // solution 1
  delete webpackOptions.optimization

  const options = {
    webpackOptions,
    watchOptions: {},
  }

  on('file:preprocessor', webpackPreprocessor(options))
}
