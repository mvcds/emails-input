const path = require('path')
const webdriver = require('selenium-webdriver')

const { EI_BROWSER } = process.env

function createCapabilities () {
  let capabilities

  switch (EI_BROWSER) {
    case 'firefox': {
      require('geckodriver')
      capabilities = webdriver.Capabilities.firefox()
      break
    }
    case 'ie': {
      // HACK: include IEDriver path by nuget
      const driverPath = path.join(
        __dirname,
        '../Selenium.WebDriver.IEDriver.3.150.0/driver/'
      )
      process.env.PATH = `${process.env.PATH};${driverPath};`
      capabilities = webdriver.Capabilities.ie()
      capabilities.set('ignoreProtectedModeSettings', true)
      capabilities.set('ignoreZoomSetting', true)
      break
    }
    default:
      require('chromedriver')
      capabilities = webdriver.Capabilities.chrome()
      capabilities.set('chromeOptions', {
        args: [
          '--headless',
          '--no-sandbox',
          '--disable-gpu',
          '--window-size=1980,1200'
        ]
      })
      break
  }

  return capabilities
}

module.exports = createCapabilities
