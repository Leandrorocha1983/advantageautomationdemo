import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../support/pageObjects/HomePage';
import ProductPage from '../support/pageObjects/ProductPage';
import CartPage from '../support/pageObjects/CartPage';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

Given('que o usuário está na página inicial', () => {
  homePage.visit();
});

When('o usuário digita {string} no campo de busca', (product) => {
  homePage.searchForProduct(product);
});

Then('os resultados da busca são exibidos', () => {
  cy.get('.search-results').should('be.visible');
});

And('um produto relacionado ao termo {string} é exibido', (product) => {
  cy.contains(product).should('be.visible');
});

When('o usuário clica no produto', () => {
  productPage.selectProduct('TABLETS');
});

And('clica no botão "Add to cart"', () => {
  productPage.addToCart();
});

Then('o produto é adicionado ao carrinho com sucesso', () => {
  cy.get('.success-message').should('be.visible');
});

And('uma confirmação de adição é exibida ao usuário', () => {
  cy.get('.confirmation-dialog').should('be.visible');
});

Given('que o usuário adicionou um produto ao carrinho', () => {
  homePage.visit();
  homePage.searchForProduct('TABLETS');
  productPage.selectProduct('TABLETS');
  productPage.addToCart();
});

When('o usuário navega para o carrinho de compras', () => {
  cartPage.goToCart();
});

When('o usuário clica no botão "Checkout"', () => {
  cartPage.proceedToCheckout();
});

Then('os produtos incluídos no carrinho são exibidos na tela de pagamento', () => {
  cartPage.validateProductsInCart('Laptop');
});

And('o total da compra é corretamente calculado', () => {
  cy.get('.total-price').should('be.visible');
});
