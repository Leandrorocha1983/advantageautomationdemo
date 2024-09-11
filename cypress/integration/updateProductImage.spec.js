describe('API - Atualizar imagem do produto', () => {
    
    const userId = 12345;  // Substitua com o userId correto
    const source = 'productSource';  // Substitua com o source correto
    const color = 'blue';  // Substitua com a cor correta
    const newImageId = 'new-image-id-6789';  // Substitua com o ID da nova imagem

    it('Deve atualizar a imagem do produto e verificar a resposta', () => {
        
        // 1. Realizar a requisição para atualizar a imagem do produto
        cy.request({
            method: 'POST',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`,
            body: {
                imageId: newImageId
            }
        }).then((response) => {
            
            // 2. Validar o status code da resposta
            expect(response.status).to.eq(200);
            
            // 3. Verificar que o produto foi atualizado corretamente
            // Supondo que a resposta contenha o objeto atualizado
            expect(response.body).to.have.property('updated', true);

            // 4. Verificar o ID da nova imagem inserida
            expect(response.body).to.have.property('imageId', newImageId);
        });
    });
});
