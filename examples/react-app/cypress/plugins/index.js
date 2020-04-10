const findWebpack = require('find-webpack')
const webpackPreprocessor = require('../../../..')

module.exports = (on, config) => {
  const webpackOptions = findWebpack.getWebpackOptions()

  if (!webpackOptions) {
    throw new Error('Could not find Webpack in this project 😢')
  }

  const options = {
    webpackOptions,
    watchOptions: {},
  }

  on('file:preprocessor', webpackPreprocessor(options))
}
