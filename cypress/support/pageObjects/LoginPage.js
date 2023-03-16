import ProductPage from './ProductPage';

export class LoginPage {
  fillEmail(email) {
    cy.get("#username").type(email);

    return this;
  }

  fillPassword(password) {
    cy.get("#password").type(password);

    return this;
  }

  selectUser() {
    return cy.get("#Login").click();
  }

  submitForm() {
    return cy.get("#signInBtn").click();

    //return new ProductPage();
  }

  getErrorMessage() {
    return cy.get(".alert-danger");
  }
}
