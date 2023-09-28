# Cypress Mini Project

This is a sample mini project using Cypress to test a simple e-commerce website. It covers some of the basic functionalities like logging in, adding products to the cart, and removing products from the cart.

## Installation

To run the tests, first clone the repository:

git clone https://github.com/nihal-gami/cypress-mini-project.git


Then install the dependencies:
```
cd cypress-mini-project
npm install
```

## Usage

To run the tests, use the following command:

`npm run cy:run`


This will run all the tests in the `cypress/integration` directory.

To open the Cypress Test Runner, use the following command:

`npm run cy:open`


This will open the Test Runner where you can select and run individual tests.

## Project Structure

The project is organized into different directories to separate concerns and make the code easier to maintain.

### Fixtures

The `fixtures` directory contains data files in JSON format that can be used in tests. For example, the `example.json` fixture contains an example user's login credentials.

### Integration

The `integration` directory contains the actual tests, written in JavaScript using Cypress. There are two tests in this directory:

- `login.spec.js`: Tests the login functionality of the website.
- `product.spec.js`: Tests the product page functionality, including adding products to the cart and removing them.

### Pages

The `pages` directory contains the Page Object Model (POM) files, which help to separate the test logic from the implementation details of the website. There are two POM files in this directory:

- `LoginPage.js`: Contains methods for interacting with the login page.
- `ProductPage.js`: Contains methods for interacting with the product page.

### Support

The `support` directory contains reusable helper functions that can be used across multiple tests. The `commands.js` file contains custom commands that extend Cypress's existing command set.

### Utils

The `utils` directory contains utility functions that can be used in tests. The `generateRandomString.js` file contains a function for generating a random string.

### Plugins

The `plugins` directory contains plugins for Cypress. The `index.js` file contains a plugin that automatically clears the local storage before each test.

## Conclusion

This mini project covers some of the basic functionalities of Cypress and how to organize code using the Page Object Model. Feel free to use it as a starting point for your own Cypress projects!
