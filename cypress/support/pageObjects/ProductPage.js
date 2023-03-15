export class ProductPage {
    addToCart(index) {
      cy.get(".product")
        .eq(index)
        .find(".add-to-cart")
        .click();
    }

    navigateToCart() {
      cy.get("#cart-button").click();
    }

    removeFromCart(index) {
      cy.get(".cart-item")
        .eq(index)
        .find(".remove-item")
        .click();
    }

    getCartItems() {
      return cy.get(".cart-item");
    }
  }
