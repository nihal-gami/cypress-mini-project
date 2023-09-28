describe("handline alerts", () => {
    beforeEach(() => {
        //cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_confirm");

    })

    it("should be able to handle alert",() =>{
        cy.get('button[onclick="myFunction()"]').click();
        cy.wait(10000); // Wait for 10 seconds (adjust the duration as needed)
        cy.url().should('have.')
    })
})