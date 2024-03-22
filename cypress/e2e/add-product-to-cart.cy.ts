describe('add product to cart', () => {
  // Para não precisar ficar repetindo a navegação para página em todos os testes, como configurei a baseUrl em cypress.config posso usar apenas / que irá acessar a página
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to cart', () => {
    // Selecionar link que tenha /product
    cy.get('a[href^="/product"]').first().click()

    // Espero que a url ao acessar link deva incluir /product
    cy.url().should('include', '/product')

    // Testar click no button Adicionar ao carrinho
    cy.contains('Adicionar ao carrinho').click()
    // Garantir que consiga encontrar um elemento que esteja escrito Cart (1)
    cy.contains('Cart (1').should('exist')
  })

  it('should not count duplicated on cart', () => {
    // Selecionar link que tenha /product
    cy.get('a[href^="/product"]').first().click()

    // Espero que a url ao acessar link deva incluir /product
    cy.url().should('include', '/product')

    // Testar click no button Adicionar ao carrinho
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()
    // Garantir que consiga encontrar um elemento que esteja escrito Cart (1)
    cy.contains('Cart (1').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    // Testar buscas no Input
    cy.searchByQuery('moletom')
    // Selecionar link que tenha /product
    cy.get('a[href^="/product"]').first().click()

    // Espero que a url ao acessar link deva incluir /product
    cy.url().should('include', '/product')

    // Testar click no button Adicionar ao carrinho
    cy.contains('Adicionar ao carrinho').click()
    // Garantir que consiga encontrar um elemento que esteja escrito Cart (1)
    cy.contains('Cart (1').should('exist')
  })
})
