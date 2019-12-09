const fs = require('fs-extra')
const path = require('path')
const selectTestsWithGrep = require('cypress-select-tests/grep')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'app/cypress/configs', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  on('file:preprocessor', selectTestsWithGrep(config))
  const file = config.env.configFile || 'mpnqa'
  return getConfigurationByFile(file)
}
