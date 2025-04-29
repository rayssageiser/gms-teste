/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
      cy.visit('/')
    });

    afterEach(() => {
      cy.screenshot()
    });
  
    it('Deve buscar filme com sucesso', () => {
      cy.get('#search-input').type('Matrix')
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain' , 'Matrixdasddas')
    })
    
    it('Deve buscar filme com sucesso de uma lista', () => {
        cy.fixture('filmes.json').then((filmes) => {
            cy.get('#search-input').type(filmes[3].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain' , filmes[3].titulo)
        })
    })

    it('Deve buscar filme com sucesso da lista inteira', () => {
        cy.fixture('filmes.json').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain' , filmes.titulo)
        })
    })
    
  })