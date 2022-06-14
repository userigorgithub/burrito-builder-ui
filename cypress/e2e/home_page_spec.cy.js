describe('Burrito Builder home page', () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", { fixture: 'example.json' })
    cy.visit("http://localhost:3000")
  });

  it('should be able to visit the home page and see title', () => {
    cy.get("h1")
      .should("contain", 'Burrito Builder')

  });

});
