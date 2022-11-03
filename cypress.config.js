const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env : {
      validEmail: "cypress@vivify.com",
      validPassword: "Zavrsnirad"
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com/",
    watchForFileChanges: false
  },
});
