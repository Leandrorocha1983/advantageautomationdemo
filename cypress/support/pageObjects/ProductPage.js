class ProductPage {
    selectProduct(productName) {
      cy.contains(productName).click();
    }
  
    addToCart() {
      cy.get('#productProperties').within(() => {
        cy.get('#addToCartButton').click();
      });
    }
  }
  
  export default ProductPage;
  