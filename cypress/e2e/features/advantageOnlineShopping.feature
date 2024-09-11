Feature: Advantage Online Shopping

Scenario: Realizar a busca de um produto
  Given que o usuário está na página inicial
  When o usuário digita "TABLETS" no campo de busca
  And clica no botão de busca
  Then os resultados da busca são exibidos
  And um produto relacionado ao termo "TABLETS" é exibido

Scenario: Incluir produto no carrinho
  Given que o usuário realizou a busca por "TABLETS"
  And encontrou um produto disponível na lista de resultados
  When o usuário clica no produto
  And clica no botão "Add to cart"
  Then o produto é adicionado ao carrinho com sucesso
  And uma confirmação de adição é exibida ao usuário

Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
  Given que o usuário adicionou um produto ao carrinho
  And o usuário navega para o carrinho de compras
  When o usuário clica no botão "Checkout"
  Then os produtos incluídos no carrinho são exibidos na tela de pagamento
  And o total da compra é corretamente calculado
