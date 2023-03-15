import { LoginPage } from "../../support/pageObjects/LoginPage";
import { ProductPage } from "../../support/pageObjects/ProductPage";

describe("Product Tests", () => {
  beforeEach(() => {
    cy.login("test@test.com", "password123");

  });

  it("should add products to the cart", () => {
    cy.visit("/products");

    cy.addToCart(0);
    cy.addToCart(1);

    cy.getCartItems().should("have.length", 2);
  });

  it("should view the cart", () => {
    const productPage = new ProductPage();

    productPage.navigateToCart();

    cy.url().should("include", "/cart");
  });

  it("should remove products from the cart", () => {
    cy.visit("/cart");

    cy.getCartItems().should("have.length", 1);

    cy.removeFromCart(0);

    cy.getCartItems().should("have.length", 0);
  });
});
