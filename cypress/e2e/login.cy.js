const { expect } = require("chai")

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  
  it('Check successfull login', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    
    cy.get('#login-button').click();

    cy.get('.title').should('have.text', 'Products')
  })
})