describe('search products', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom')

    // Verificar pathname
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    // Selecionar link que tenha /product
    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search page without a search query', () => {
    // Para evitar erro quando o Next faz um redirect
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
