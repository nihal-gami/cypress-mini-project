/// <reference types="Cypress" />

import { LoginPage } from "../../support/pageObjects/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/");
  });

  it("should login with valid credentials", () => {
    let data;
    cy.fixture('example').then((fData) => {
    data = fData;
    loginPage.fillEmail(data.user1.email)
      .fillPassword(data.user1.password)
      .submitForm();

    // assert that login is successful and user is redirected to the dashboard
    cy.url().should('include', '/shop')

    // cy.url().should("include", "/product");
});
  });

  it("should display error message with invalid credentials", () => {
    let user;
    cy.fixture('example').then((fData) => {
    user = fData;

    loginPage.fillEmail(user.user2.email)
      .fillPassword(user.user2.password)
      .submitForm();

    loginPage.getErrorMessage().should('be.visible');
  });
});
});
