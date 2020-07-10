# contributing to emails-input

## Setup

After cloning this project, install its dependencies using `npm i`.

Before doing anything, duplicate `.env.example`, renaming the copy to `.env` so you can have the same variables as they are used on code (if the variable is on the `package.json`, it will take precedence).

After that it's possible to run `npm run build` so the `dist` folder, responsible for distribution of this library, is created.

You can also run `npm start` to run it in the development mode, which will actually fire a server up, so you can play with the demo page.

## Testing

For testing we're using selenium, so for running it locally (`npm test`) it's necessary to follow [theese instructions](https://www.npmjs.com/package/selenium-webdriver) for your favorite browser.

The preference is having e2e tests so they can be reproduced in multiple browsers through CI (to be configured).

It's important to notice that to save time, for now, the e2e tests are run against the same page as the demo - this has a few pourposes:

1. Ensure the demo page is working i.e. no accident happened over time so it stopped working
1. The test itself

If you want to run e2e tests, it's necessary that the project is running on the url set on your `.env` (`EI_DEV_SERVER_URL`).

## Committing

If you change the code and wish to commit, you need to be running the server, as a first wave of tests is run locally.

## Example page

The folder `docs` is generated automatically, so that it can be shown in the GitHub's page.

The command for it is `npm run ghp` and it was tested on mac's only.
