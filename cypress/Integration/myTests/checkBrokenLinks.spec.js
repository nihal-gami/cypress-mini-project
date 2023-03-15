describe('Navigation test', () => {
  before(() => {
    // delete any existing screenshots, videos, and HTML reports
    cy.exec('rm -rf \'cypress/screenshots/*\'');
    cy.exec('rm -rf \'cypress/videos/*\'');
    cy.exec('rm -r \'cypress/results/\'');

    //cy.exec('rm -rf \'cypress/results/mocha*.html\'');
  });


  it('should be able to navigate through all links on Amazon.in', () => {
    it('should check for broken links on the page', () => {
      cy.visit('https://www.w3schools.com/')
        .get('a')
        .each((link) => {
          cy.request(link.prop('href'))
            .then((response) => {
              expect(response.status).to.eq(200);
            })
            .catch((err) => {
              cy.log(`Broken link: ${link.prop('href')}`);
            });
        });
    });
  });
});
