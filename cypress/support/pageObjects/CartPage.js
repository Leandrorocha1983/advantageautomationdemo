class CartPage {
    goToCart() {
      cy.get('#menuCart').click();
    }
  
    proceedToCheckout() {
      cy.get('#checkOutButton').click();
    }
  
    validateProductsInCart(productName) {
      cy.contains(productName).should('be.visible');
    }
  }
  
  export default CartPage;
  