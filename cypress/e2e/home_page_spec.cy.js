describe('Burrito Builder home page', () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", { fixture: 'example.json' })
    cy.visit("http://localhost:3000")
  });

});
