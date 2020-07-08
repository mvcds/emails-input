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

  await sleep(1000)

  assert.deepStrictEqual(await page.isPresent(selector), false, 'the deletion should work')
});

it('Email block should be created by entering comma', async () => {
  const input = '#basic-example .emails-input__email';
  const blocks = '#basic-example .emails-input__block';

  await page.goTo('file:///Users/marcossilva/Personal/emails-input/index.html');

  assert(await page.isPresent(input), 'the demo page should contain the input for #basic-example')
  assert.deepStrictEqual(await page.isPresent(blocks), false, 'no block should be available')

  page.type(input, 'marcos,');

  await sleep(1000);

  assert(await page.isPresent(blocks), 'a block should be created');
  assert.deepStrictEqual(await page.getText(input), '', 'input has to be clean');
});

//TODO: I couldn't find how to test, so I'm moving on (tradeoffs of a limited time)
it.skip('Email block should be created by losing focus');
