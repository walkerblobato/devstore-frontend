/// <reference types="cypress" />
// Criando comando para buscar produtos
declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

// -- This is a parent command --
Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')
  cy.get('input[name=q').type(query).parent('form').submit()
})
