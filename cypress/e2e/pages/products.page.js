class ProductsPage {

    selectors = {
        pageTitle: '.title',
        addBackpackToCartButton: '[data-test="add-to-cart-sauce-labs-backpack"]'
    };

    getTitle() {
        return cy.get(this.selectors.pageTitle);
    }

    addToCart() {
        return cy.get(this.selectors.addBackpackToCartButton).click();
    }
}

export default ProductsPage;