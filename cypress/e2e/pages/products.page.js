class ProductsPage {

    selectors = {
        pageTitle: '.title',
        addToCartButton: '[data-test="add-to-cart-sauce-labs-backpack"]'
    };

    getTitle() {
        return cy.get(this.selectors.pageTitle);
    }

    addToCart() {
        return cy.get(this.selectors.addToCartButton).click();
    }
}

export default ProductsPage;