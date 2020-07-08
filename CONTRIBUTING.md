# contributing to emails-input

## Installing

After cloning this project, install its dependencies using `npm i`.

## Testing

For testing we're using selenium, so for running it locally (`npm test`) it's necessary to follow [theese instructions](https://www.npmjs.com/package/selenium-webdriver) for your favorite browser.

The preference is having e2e tests so they can be reproduced in multiple browsers through CI (to be configured).

It's important to notice that to save time, for now, the e2e tests are run against the same page as the demo - this has a few pourposes:

1. Ensure the demo page is working i.e. no accident happened over time so it stopped working
1. The test itself
