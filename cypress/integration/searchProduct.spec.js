// cypress/integration/searchProduct.spec.js
import SearchPage from '../support/pageObjects/SearchPageGetProduto';

describe('API - Procurar por um produto usando Page Objects', () => {
    const searchPage = new SearchPage();
    const searchQuery = 'TABLETS'; // Substitua pelo termo que deseja buscar
    
    it('Deve buscar produtos e verificar a lista de resultados', () => {
        
        // 1. Realizar a busca de produtos
        searchPage.searchProduct(searchQuery).then((response) => {
            
            // 2. Validar o status code da resposta
            searchPage.validateStatusCode(response, 200);
            
            // 3. Verificar se a lista exibe somente produtos conforme a busca
            searchPage.validateProductsList(response, searchQuery);
        });
    });
});
