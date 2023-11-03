import LoginPage from "../pages/login.page";
import ProductsPage from "../pages/products.page";

describe('Login Test', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  
  it('Check successfull login', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();

    loginPage.setUser('standard_user');
    loginPage.setPassword('secret_sauce');
    loginPage.clickLogin();

    productsPage.getTitle().should('have.text', 'Products');
  })
})