const assert = require('assert');
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

const sleep = m => new Promise(r => setTimeout(r, m))

it('Delete an invalid EmailBlock', async () => {
  const selector = '#pre-filled-with-emails .emails-input__block--invalid .emails-input__block-remove';

  await page.goTo('file:///Users/marcossilva/Personal/emails-input/index.html');

  assert(await page.isPresent(selector), 'the demo page should contain an invalid email block as part of the #pre-filled-with-emails')

  page.click(selector);

  await sleep(10)

  assert.deepStrictEqual(await page.isPresent(selector), false, 'the deletion should work')
});
