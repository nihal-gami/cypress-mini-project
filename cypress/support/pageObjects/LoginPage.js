export class LoginPage {
    fillEmail(email) {
      cy.get("#email").type(email);

      return this;
    }

    fillPassword(password) {
      cy.get("#password").type(password);

      return this;
    }

    submitForm() {
      cy.get("#login-button").click();

      return new ProductPage();
    }

    getErrorMessage() {
      return cy.get("#error-message");
    }
  }
