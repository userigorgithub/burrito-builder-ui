describe("Burrito Builder home page", () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", { fixture: 'example.json' })
    cy.visit("http://localhost:3000")
  });

  it('should be able to visit the home page, see title, see form page, and see current orders', () => {
    cy.get("h1")
      .should("contain", "Burrito Builder")
    cy.get("form")
      .should("contain", "Submit Order")
    cy.get(".orders")
    cy.get(".order")
      .should("have.length", 2)
  });

  it('should be able to fill out inputs of form', () => {
    cy.get("form")
    cy.get("input[name='name']")
      .type("Igor")
      .should("have.value", "Igor")
    cy.get("button[name='steak']").click()
    cy.get("p")
      .should("contain", "steak")
  });




});
