exports.config = {
  tests: './tests/*_test.js',
  output: '',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000/',
      browser: 'chrome'
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'blockstack-create-react-app testing'
}