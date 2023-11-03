const { expect } = require("chai")

describe('Products Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  
  it('Add product to Cart', () => {
    //Login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    //Add to cart

  })
})