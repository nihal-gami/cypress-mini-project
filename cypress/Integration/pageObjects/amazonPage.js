// file: amazonPage.js

class AmazonPage {
    visit() {
      cy.visit('https://www.amazon.in/');
    }

    searchProduct(product) {
      cy.get('#twotabsearchtextbox')
        .type(product)
        .type('{enter}');
    }

    getLinks() {
      return cy.get('a');
    }

    assertValidLinks() {
      this.getLinks().each(($el) => {
        const link = $el.prop('href');
        if (link) {
          cy.request(link).then((response) => {
            expect(response.status).to.eq(200);
          });
        }
      });
    }
  }

  export default new AmazonPage();
