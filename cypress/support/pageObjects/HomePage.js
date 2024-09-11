class HomePage {
    visit() {
      cy.visit('https://advantageonlineshopping.com/#/');
    }
  
    searchForProduct(product) {
      cy.get("//div[@class='categoryCell']").type(product);
      cy.get('#imgProduct').click();
    }
  }
  
  export default HomePage;
  