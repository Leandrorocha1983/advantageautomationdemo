describe('Product Image Update API Test', () => {
  
    const userId = 'yourUserId';
    const source = 'sourceName';
    const color = 'colorName';
    const apiUrl = `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`;
  
    it('Verifica se o produto foi atualizado corretamente e valida o ID da nova imagem', () => {
      // Faz a requisição POST para a API
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          // Adicione aqui o corpo da requisição necessário para a atualização do produto
          // Exemplo:
          "imageURL": "",
          "productID": 123
        }
      }).then((response) => {
        // Valida o status code da resposta
        expect(response.status).to.eq(200);
  
        // Valida que o produto foi atualizado corretamente
        // Dependendo da resposta da API, adapte esta verificação
        expect(response.body).to.have.property('success', true);
        
        // Verifica o ID da nova imagem inserida
        expect(response.body).to.have.property('imageId');
        const imageId = response.body.imageId;
        cy.log('Novo ID da Imagem:', imageId);
      });
    });
  });
  