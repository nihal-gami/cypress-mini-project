const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 10000, // 10 seconds
  pageLoadTimeout: 60000,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/myTests/*.js'
  },

});

