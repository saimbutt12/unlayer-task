const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    baseUrl: 'https://react-email-editor-demo.netlify.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});

