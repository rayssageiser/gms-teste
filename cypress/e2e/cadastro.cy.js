/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `rayssa${Date.now()}@teste.com`
    cy.preencherCadastro('Raysa', 'Bueno', email, '51981679279', 'Teste@987')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Rayssa2025', 'Bueno', 'rayssa.bueno@gmail.com', '51981679279', 'Teste@987')
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos')
  })

  it('Deve validar mensagem de erro com o campo sobrenomenome inválido', () => {
    cy.preencherCadastro('Rayssa', 'Bueno2025', 'rayssa.bueno@gmail.com', '51981679279', 'Teste@987')
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos')
  })

  it('Deve validar mensagem de erro com o campo e-mail inválido', () => {
    cy.preencherCadastro('Rayssa', 'Bueno', 'rayssa.gmail.com', '51981679279', 'Teste@987')
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
  })

  it('Deve validar mensagem de erro com o campo telefone inválido', () => {
    cy.preencherCadastro('Rayssa', 'Bueno', 'rayssa.bueno@gmail.com', 'testando', 'Teste@987')
    cy.get('#signup-response').should('contain' , 'Telefone deve conter apenas números')
  })

  it('Deve validar mensagem de erro com o campo senha inválida', () => {
    cy.preencherCadastro('Rayssa', 'Bueno', 'rayssa.bueno@gmail.com', '51981679279', '1234')
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })

})