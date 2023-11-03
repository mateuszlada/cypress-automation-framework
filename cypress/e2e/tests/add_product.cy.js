import LoginPage from "../pages/login.page"
import ProductsPage from "../pages/products.page"

describe('Products Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  
  it('Add product to Cart', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();

    loginPage.setUser('standard_user');
    loginPage.setPassword('secret_sauce');
    loginPage.clickLogin();

    //Add to cart
    productsPage.addToCart();
    //...
  })
})