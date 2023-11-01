Requirement:

Identified 5 testcases as per the requirement and this repo contains 5 tests and assertions were added to each test
mocha-chrome
☕ Run Mocha tests using headless Google Chrome

Requirements
mocha-chrome requires Node v8.0.0 or higher.

mocha-chrome is a development tool, which means you can use tools like NVM and nodenv to manage your installed versions, and temporarily switch to v8+ to run tests on your machine. Most modern CI environments also support specifying the version of Node to run.

Getting Started
To begin, you'll need to install mocha-chrome:

$ npm install mocha-chrome --save-dev
Then you'll need a local npm install of mocha:

$ npm install mocha --save-dev

- `npm test` - run the tests using the local `.mocharc.yaml` config file. The config includes the Babel transpilation hook `@babel/register`. We have the babel config set inside `.babelrc`.
