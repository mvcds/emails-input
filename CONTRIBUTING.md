# contributing to emails-input

## Installations

Besides npm (and by extension node), the contributors of this project need to install and configure the supporting applications (they are optional, but you'd benefit from having them):

* [NVM](https://github.com/nvm-sh/nvm)
* [act](https://github.com/nektos/act)
  * [Docker](https://www.docker.com/) (needs to be running for act to work)
* Selenium webdrivers (check the testing session for more details)

## Setup

After cloning this project, install its dependencies using `npm i` and use the correct node version (run `nvm use`, if NVM is installed)

Before doing anything, duplicate `.env.example`, renaming the copy to `.env` so you can have the same variables as they are used on code (if the variable is on the `package.json`, it will take precedence). All variables on the example file are the default, in case they are missing from your local environment.

With the `.env` file ready, it's possible to run `npm run build` so the `dist` folder, responsible for distribution of this library, is created.

You can also run `npm start` to run it in the development mode, which will actually fire a server up, so you can play with the demo page.

## Testing

For testing we're using selenium, so for running it locally (`npm test`) it's necessary to follow [theese instructions](https://www.npmjs.com/package/selenium-webdriver) for the browsers which have an end-to-end `[`e2n`]` automation test (check the scripts available on `package.json`).

Having e2e tests rathter than unit ones has the advantage of allowing us to check if there's at least one browsers for which the code works. Ideally more browser automation can be done on CI-level later, so we ensure that the code works for all supported browsers.

By design, our tests are run agains the same page as github distributes so we can be sure that we never break the demo page by accident.

For running the e2e tests, you need to point the `EI_DEV_SERVER_URL` `.env`'s variable to your running server (fired up with `npm start`) or the path to the `docs/index.html` or your computer.

It's possible to run all available tests using `npm test` (you'll have to install all relevant webdrivers), this will fail if you don't have at least one of them.

The recommended approach is instead configure `EI_BROWSER` `.env`'s variable and install only the relevant webdriver (or Chrome which is the default). To run tests like this use `npm run dev`.

## Committing

To be sure that the code is working, when you commit, some processes like linting or testing can be run. For this to work, you need to setup NVM or otherwise bypass the commits.

If `EI_DEV_SERVER_URL` is configured to server available by `npm run start` rather than directly to the HTML file, the project has to be running in order for having a successfull commit.

## Example page

The folder `docs` contains the example page which will be published as a GitHub Page and, during development, it is used for both development and automated e2e tests.

The command `npm run ghp` should be used create a new version of this page but is also run on commit, so you don't have to worry much.

## CI

The original idea was to setup a CI which would run all e2e on different browsers but at the moment it only runs lint.

For CI we use github's actions found in `.github/workflows`.

If you want to test a workflow locally, fire up a docker and run `act`.
