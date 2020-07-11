const webdriver = require('selenium-webdriver')

class Page {
  constructor (driver) {
    this._driver = driver
  }

  async goTo (url) {
    await this._driver.get(url)
  }

  async close () {
    return this._driver.close()
  }

  async isPresent (selector) {
    const count = await this.count(selector)

    return !!count
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

  async count (selector) {
    const elements = await this._driver.findElements(webdriver.By.css(selector))

    return elements.length
  }

  async getAlertText (selector) {
    await this._driver.wait(webdriver.until.alertIsPresent())

    const alert = await this._driver.switchTo().alert()

    const text = alert.getText()

    await alert.accept()

    return text
  }
}

module.exports = Page
