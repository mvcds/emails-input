const webdriver = require('selenium-webdriver');

const Page = require('./page');

let page;

beforeAll(async () => {
  const capabilities = createCapabilities();

  const driver = await new webdriver.Builder()
    .withCapabilities(capabilities)
    .build();

  page = new Page(driver);
});

function createCapabilities() {
  let capabilities;

  switch (process.env.BROWSER) {
    default:
      require('chromedriver');
      capabilities = webdriver.Capabilities.chrome();
      capabilities.set('chromeOptions', {
        args: [
          '--headless',
          '--no-sandbox',
          '--disable-gpu',
          '--window-size=1980,1200'
        ]
      });
      break;
  }

  return capabilities;
}

afterAll(async () => {
  page && (await page.close());
});

it('Google', async () => {
  await page.goTo(`http://google.com`);
});
