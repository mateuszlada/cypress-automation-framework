class HeaderPage {

    selectors = {
        cartLink: '.shopping_cart_link',
        cartItemsLabel: '.shopping_cart_badge'
    
    };

    getNumberOfItemsInCart() {
        return cy.get(this.selectors.cartItemsLabel);
    }

    openCart() {
        return cy.get(this.selectors.cartLink).click();
    }
}

export default HeaderPage;