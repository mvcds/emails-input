class Page {
  constructor(driver) {
    this._driver = driver;
  }

  async goTo(url) {
    await this._driver.get(url);
  }

  async close() {
    return this._driver.quit();
  }
}

module.exports = Page;
