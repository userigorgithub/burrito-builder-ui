describe("Burrito Builder home page", () => {

  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/orders", { fixture: 'example.json' })
    cy.visit("http://localhost:3000")
  });

  it('should be able to visit the home page, see title, see form, and see current orders', () => {
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
    cy.get("button[name='steak']")
      .click()
    cy.get("p")
      .should("contain", "steak")
  });

  it('should be able to submit a form and see it being displayed', () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/orders", {
      statusCode: 201,
      body: {
        name: "Igor",
        ingredients: ["steak"]
      }
    })
    cy.get("input[name='name']")
      .type("Igor")
    cy.get("button[name='steak']")
      .click()
    cy.get(".submit-btn")
      .click()
    cy.get(".orders")
    cy.get(".order")
      .contains("Igor")
    cy.get(".order")
      .should("contain", "steak")
  });

  it('should not be able to submit if ingredient is not filled', () => {
    cy.get("form")
    cy.get("input[name='name']")
      .type("Igor")
    cy.get('.submit-btn')
      .click()
    cy.get("p")
      .contains("Order: Nothing selected")
  });

  it('should not be able to submit if name is not filled', () => {
    cy.get("form")
  cy.get("button[name='steak']")
    .click()
    cy.get('.submit-btn')
      .click()
    cy.get("p")
      .contains("Order: Nothing selected")
  });
});
