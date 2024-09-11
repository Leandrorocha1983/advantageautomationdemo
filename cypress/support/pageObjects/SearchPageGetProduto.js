// cypress/support/pages/SearchPage.js

class SearchPage {
    
    // Método para realizar a busca por produtos
    searchProduct(searchQuery) {
        return cy.request({
            method: 'GET',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?${searchQuery}`,
        });
    }

    // Método para validar o status code da resposta
    validateStatusCode(response, expectedStatusCode) {
        expect(response.status).to.eq(expectedStatusCode);
    }

    // Método para validar se os produtos retornados correspondem à busca
    validateProductsList(response, searchQuery) {
        const products = response.body.products;
        expect(products).to.be.an('array').that.is.not.empty;

        products.forEach(product => {
            expect(product.productName.toLowerCase()).to.include(searchQuery.toLowerCase());
        });
    }
}

export default SearchPage;
