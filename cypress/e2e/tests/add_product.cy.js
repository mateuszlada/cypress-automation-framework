import CartPage from "../pages/cart.page"
import HeaderPage from "../pages/header.page"
import LoginPage from "../pages/login.page"
import ProductsPage from "../pages/products.page"

describe('Products Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })
  
  it('Add product to Cart', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const headerPage = new HeaderPage();
    const cartPage = new CartPage();

    loginPage.setUser('standard_user');
    loginPage.setPassword('secret_sauce');
    loginPage.clickLogin();

    productsPage.addToCart();
    headerPage.getNumberOfItemsInCart().should('have.text', '1');

    headerPage.openCart();
    cartPage.getTitle().should('have.text', 'Your Cart');
    cartPage.getItems().should('have.length', 1)
  })
})