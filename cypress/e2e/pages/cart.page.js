class CartPage {

    selectors = {
        pageTitle: '.title',
        items: '.inventory_item_name'
    };

    getTitle() {
        return cy.get(this.selectors.pageTitle);
    }

    getItems(){
        return cy.get(this.selectors.items);
    }
}

export default CartPage;