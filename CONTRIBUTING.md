# contributing to emails-input

## Setup

After cloning this project, install its dependencies using `npm i`. This project also uses the projects bellow, so you'll have to install them in order to contribute:

* [NVM](https://github.com/nvm-sh/nvm)
* [act](https://github.com/nektos/act)
  * [Docker](https://www.docker.com/) (needs to be running for act to work)

Before doing anything, duplicate `.env.example`, renaming the copy to `.env` so you can have the same variables as they are used on code (if the variable is on the `package.json`, it will take precedence).

After that it's possible to run `npm run build` so the `dist` folder, responsible for distribution of this library, is created.

You can also run `npm start` to run it in the development mode, which will actually fire a server up, so you can play with the demo page.

## Testing

For testing we're using selenium, so for running it locally (`npm test`) it's necessary to follow [theese instructions](https://www.npmjs.com/package/selenium-webdriver) for the supported browsers.

The preference is having e2e tests so they can be reproduced in multiple browsers through CI (to be configured).

It's important to notice that to save time, for now, the e2e tests are run against the same page as the demo - this has a few pourposes:

1. Ensure the demo page is working i.e. no accident happened over time so it stopped working
1. The test itself

If you want to run e2e tests, it's necessary that the project is running on the url set on your `.env` (`EI_DEV_SERVER_URL`).

An easy way to run a quicker test is running `npm run dev` which focus only on testin on Chrome.

## Committing

It's important to notice that NVM is used to setup the node version of the application, and it to commit it properly, you need to first run `nvm use` before the first commit.

## Example page

The folder `docs` contains the example page which will be published as a GitHub Page and, during development, it is used for both development and automated e2e tests.

The command `npm run ghp` should be used create a new version of this page.
