const { defineConfig } = require('cypress')
const {
  GoogleSocialLogin,
  MicrosoftSocialLogin,
  GitHubSocialLogin,
} = require('cypress-social-logins').plugins

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //	implement node event listeners here
      on('task', {
        GoogleSocialLogin: GoogleSocialLogin,
        MicrosoftSocialLogin: MicrosoftSocialLogin,
        GitHubSocialLogin: GitHubSocialLogin,
      })
    },
    taskTimeout: 50000,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
    viewportWidth: 1366,

    viewportHeight: 768,
  },
})
