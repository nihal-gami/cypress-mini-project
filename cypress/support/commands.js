Cypress.Commands.add("login", (email, password) => {
    const loginPage = new LoginPage();

    loginPage
      .fillEmail(email)
      .fillPassword(password)
      .submitForm();
  });

  Cypress.Commands.add("addToCart", (index) => {
    const productPage = new ProductPage();

    productPage.addToCart(index);
  });

  Cypress.Commands.add("removeFromCart", (index) => {
    const productPage = new ProductPage();

    productPage.removeFromCart(index);
  });
