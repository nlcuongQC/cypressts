const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: "**/*.feature",
    supportFile: false,
    baseUrl: 'https://www.google.com/',
    async setupNodeEvents(on: (arg0: string, arg1: any) => void, config: any) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: "cypress/reports",
      reportFilename: "testresults",
      overwrite: false,
      html: true,
      json: true,
      charts: true
    }
  },
});
