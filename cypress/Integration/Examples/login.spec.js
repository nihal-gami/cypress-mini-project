import { LoginPage } from "../../support/pageObjects/LoginPage";

describe("Login Tests", () => {
  // beforeEach(() => {
  //   cy.visit("/");
  // });

  it("should login with valid credentials", () => {
    cy.fixture('example.json').then((users) => {
    //const user = users.users1;
    console.log(users);
    const loginPage = new LoginPage();

    loginPage.fillEmail(users)
      .fillPassword("password123")
      .submitForm();

    cy.url().should("include", "/product");
  });
});

  it("should display error message with invalid credentials", () => {
    const loginPage = new LoginPage();

    loginPage
      .fillEmail("invalid@test.com")
      .fillPassword("invalidpassword")
      .submitForm();

    loginPage.getErrorMessage().should("be.visible");
  });
});
