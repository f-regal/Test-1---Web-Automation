# Saucedemo# SauceDemo

# Saucedemo# SauceDemo

This project contains automated End-to-End tests which were carried out on the SauceDemo Website.

**To run this project**

You will need Cypress installed, please follow the guide on https://docs.cypress.io/guides/getting-started/installing-cypress#Installing

To run the test in the browser from the root directory, run the following command and click the feature file displayed in the cypress client:

npx cypress open

To run the test in headless mode, from the root directory, run:

npx cypress run

**File Structure:**

- The pageObjects folder contains the different page objects required for the test
- The validations folder contains all the different validations carried out on each
- User data for different types of users are kept in the fixtures folder

This structure has been chosen to allow this test framework to be scalable as more customers, pages, scenarios and validations are added.