var dateFormat = require('dateformat');

Feature('Blockstack Sign Up');

Scenario('Create User', async (I) => {
    const now = new Date();
    const username = "user_" + dateFormat(now, "yyyymmddHHMMss");
    await I.amOnPage('http://localhost:3000/');
    await I.see('Blockstack Create React App');
    await I.click('//button[text()="Sign-in with Blockstack"]');
    await console.log("creating BlockstackID username " + username);
    const email = username + "@block.com";
    I.waitForVisible({ xpath: "//div[text()='Create new ID']" }, 60);
    await I.click({xpath: "//div[text()='Create new ID']"});
    await I.fillField({xpath: "//input[@name='username']"}, username);
    await I.click({xpath: "//div[text()='Check Availability']"});
    I.waitForVisible({ xpath: "//div[text()='Continue']" }, 60);
    await I.click({xpath: "//div[text()='Continue']"});
    I.waitForText("Create a password");
    await I.fillField({xpath: "//input[@name='password']"}, username);
    await I.fillField({xpath: "//input[@name='passwordConfirm']"}, username);
    await I.click({xpath: "//div[text()='Register ID']"});
    await I.waitForVisible({xpath: "//input[@name='email']"}, 60);
    await I.fillField({xpath: "//input[@name='email']"}, email);
    await I.click({xpath: "//div[text()='Next']"});
    I.waitForVisible({xpath: "//h3[text()='.id.blockstack']"}, 60);
    await I.see(".id.blockstack");
    await I.see("Create React App Sample");
  });
  
    