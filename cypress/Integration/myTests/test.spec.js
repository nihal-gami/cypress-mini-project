// // file: verifyLinks.spec.js

// import AmazonPage from '../pageObjects/amazonPage';

// describe('Verify broken links on Amazon.in', () => {
//   it('should verify homepage links', () => {
//     AmazonPage.visit();
//     AmazonPage.assertValidLinks();
//   });

//   it('should verify links on search results page', () => {
//     AmazonPage.visit();
//     AmazonPage.searchProduct('smartphones');
//     AmazonPage.assertValidLinks();
//   });

//   it('should verify links on product detail page', () => {
//     AmazonPage.visit();
//     AmazonPage.searchProduct('smartphones');
//     cy.get('.s-result-item')
//       .first()
//       .find('a')
//       .first()
//       .click();
//     AmazonPage.assertValidLinks();
//   });
// });
