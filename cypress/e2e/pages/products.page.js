class ProductsPage {

    selectors = {
        pageTitle: '.title'
    };

    getTitle() {
        return cy.get(this.selectors.pageTitle);
    }
}

export default ProductsPage;