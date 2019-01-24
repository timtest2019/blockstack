# Blockstack Create React App

## Open CMD/Terminal inside the root folder having package.json and run below tests one by one
###Installing CodeceptJS and WebDriverIO  
`npm install -g codeceptjs webdriverio`

###Installing Selenium server
`npm install -g selenium-standalone`
`selenium-standalone install`

### Install package.json dependencies
`npm install`

### Open App
`npm run start`

## Open Second CMD/Terminal inside the root folder having package.json 
### Open selenium server
`selenium-standalone start`

## Open Third CMD/Terminal inside the test folder having codecept.conf.js 
### To run tests
`codeceptjs run --steps`
