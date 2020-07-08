const webdriver = require('selenium-webdriver')

class Page {
  constructor (driver) {
    this._driver = driver
  }

  async goTo (url) {
    await this._driver.get(url)
  }

  async close () {
    return this._driver.quit()
  }

  async isPresent (selector) {
    return this._driver.findElements(webdriver.By.css(selector)).then(found => !!found.length)
  }

  click (selector) {
    this._driver.findElement(webdriver.By.css(selector)).click()
  }

  type (selector, text) {
    this._driver.findElement(webdriver.By.css(selector)).sendKeys(text)
  }

  async getText (selector) {
    const elem = this._driver.findElement(webdriver.By.css(selector))
    return await elem.getText()
  }
}

module.exports = Page
