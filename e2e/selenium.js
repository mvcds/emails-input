require('dotenv').config()
const assert = require('assert')
const webdriver = require('selenium-webdriver')

const Page = require('./page')
const createCapabilities = require('./create-capabilities')

const { EI_DEV_SERVER_URL, EI_DEV_WAIT_MS } = process.env

const wait = parseInt(EI_DEV_WAIT_MS, 10)

let page

beforeAll(async () => {
  const capabilities = createCapabilities()

  const driver = await new webdriver.Builder()
    .withCapabilities(capabilities)
    .build()

  page = new Page(driver)
})

afterAll(async () => {
  page && (await page.close())
})

const sleep = m => new Promise(resolve => setTimeout(resolve, m))

it('Delete an invalid EmailBlock', async () => {
  const selector = '#pre-filled-with-emails .emails-input__block--invalid .emails-input__block-remove'

  await page.goTo(EI_DEV_SERVER_URL)

  assert(await page.isPresent(selector), 'the demo page should contain an invalid email block as part of the #pre-filled-with-emails')

  page.click(selector)

  await sleep(wait)

  assert.deepStrictEqual(await page.isPresent(selector), false, 'the deletion should work')
})

it('Email block should be created by entering comma', async () => {
  const input = '#basic-example .emails-input__email'
  const blocks = '#basic-example .emails-input__block'

  await page.goTo(EI_DEV_SERVER_URL)

  assert(await page.isPresent(input), 'the demo page should contain the input for #basic-example')
  assert.deepStrictEqual(await page.isPresent(blocks), false, 'no block should be available')

  page.type(input, '   fffffff   ,   gggggg   ')

  await sleep(wait)

  assert(await page.count(blocks), 2, 'two blocks should be created')
  assert.deepStrictEqual(await page.getText(input), '', 'input has to be clean')
})

it('Email block should be created by losing focus', async () => {
  const input = '#basic-example .emails-input__email'
  const blocks = '#basic-example .emails-input__block'

  await page.goTo(EI_DEV_SERVER_URL)

  assert(await page.isPresent(input), 'the demo page should contain the input for #basic-example')
  assert.deepStrictEqual(await page.isPresent(blocks), false, 'no block should be available')

  page.type(input, 'marcos')
  page.type(input, webdriver.Key.TAB)

  await sleep(wait)

  page.click('div')

  assert(await page.isPresent(blocks), 'a block should be created')
  assert.deepStrictEqual(await page.getText(input), '', 'input has to be clean')
})

it('Email block should be created by pressing enter', async () => {
  const input = '#basic-example .emails-input__email'
  const blocks = '#basic-example .emails-input__block'

  await page.goTo(EI_DEV_SERVER_URL)

  assert(await page.isPresent(input), 'the demo page should contain the input for #basic-example')
  assert.deepStrictEqual(await page.isPresent(blocks), false, 'no block should be available')

  page.type(input, 'marcos')
  page.type(input, webdriver.Key.ENTER)

  await sleep(wait)

  assert(await page.isPresent(blocks), 'a block should be created')
  assert.deepStrictEqual(await page.getText(input), '', 'input has to be clean')
})

// TODO: i've tried to test it without success, i'll move on so it's possible to complete the other stuff
it.todo('Email blocks should be created by pasting a list of emails')

it('"Get emails count" button shows an alert with valid email count', async () => {
  const blocks = '#pre-filled-with-emails .emails-input__block:not(.emails-input__block--invalid)'
  const button = '#pre-filled-with-emails .emails-input__get-emails-count'

  await page.goTo(EI_DEV_SERVER_URL)

  assert.deepStrictEqual(await page.count(blocks), 3, 'there should be 3 valid emails prefilling #pre-filled-with-emails')

  page.click(button)

  await sleep(wait)

  assert.deepStrictEqual(await page.getAlertText(), '3', 'an alert showing 3 valid emails should appear')
})

it('"Add email" button creates a random email on the editor', async () => {
  const blocks = '#basic-example .emails-input__block'
  const button = '#basic-example .emails-input__add-email'

  await page.goTo(EI_DEV_SERVER_URL)

  assert.deepStrictEqual(await page.count(blocks), 0, 'there should be no emails prefilling #basic-example')

  page.click(button)
  page.click(button)
  page.click(button)
  page.click(button)
  page.click(button)

  await sleep(wait)

  assert.deepStrictEqual(await page.count(blocks), 5, 'there should be 5 emails created on #basic-example')
})

it('Reseting the example should make it back to its original state', async () => {
  const blocks = '#pre-filled-with-emails .emails-input__block'
  const button = '#pre-filled-with-emails .emails-input__add-email'
  const reset = '[name="reset"]'

  await page.goTo(EI_DEV_SERVER_URL)

  assert.deepStrictEqual(await page.count(blocks), 4, 'there should be 4 emails prefilling #pre-filled-with-emails')

  page.click(button)
  page.click(button)
  page.click(button)
  page.click(button)
  page.click(button)
  page.click(reset)

  await sleep(wait)

  assert.deepStrictEqual(await page.count(blocks), 4, 'there should be 4 emails prefilling #pre-filled-with-emails')
})

it('Reading the example should show the same emails of the block', async () => {
  const blocks = '#pre-filled-with-emails .emails-input__block'
  const read = '[name="read"]'
  const emails = 'john@miro.com,invalid.email,mike@miro.com,alexander@miro.com'

  await page.goTo(EI_DEV_SERVER_URL)

  assert.deepStrictEqual(await page.count(blocks), 4, 'there should be 4 emails prefilling #pre-filled-with-emails')

  page.click(read)

  await sleep(wait)

  assert.deepStrictEqual(await page.getAlertText(), emails, 'an alert showing the initial emails should appear')
})

it('Customizes the title', async () => {
  const selector = '#custom .emails-input__title'

  await page.goTo(EI_DEV_SERVER_URL)

  assert.deepStrictEqual(await page.getText(selector), 'I am customized', 'there should be a custom title for #custom')
})
