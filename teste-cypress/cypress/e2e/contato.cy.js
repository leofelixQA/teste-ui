describe("Funcionalidade : Contato",()=>{

beforeEach(() => {
  cy.visit("index.html")
});

it("deve preencher o formulario de contato com sucesso",()=>{
  cy.get('[name="name"]').type("leonardo")
  cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Parcerias")
  cy.get('[name="message"]').type("Mensagem de Teste")
  cy.get('#btn-submit').click()
  cy.contains("Contato enviado com sucesso!").should("exist")
})

it("deve validar mensagem de erro ao enviar sem preencher campo nome",()=>{
  //cy.get('[name="name"]').type("leonardo")
  cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Parcerias")
  cy.get('[name="message"]').type("Mensagem de Teste")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain','Por favor, preencha o campo Nome')
  
})
it("deve validar mensagem de erro ao enviar sem preencher campo Email",()=>{
  cy.get('[name="name"]').type("leonardo")
  //cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Parcerias")
  cy.get('[name="message"]').type("Mensagem de Teste")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain','Por favor, preencha o campo E-mail')
})
it("deve validar mensagem de erro ao enviar sem preencher campo",()=>{
  cy.get('[name="name"]').type("leonardo")
  cy.get('[name="email"]').type("teste@teste.com")
  //cy.get('[name="subject"]').select("Parcerias")
  cy.get('[name="message"]').type("Mensagem de Teste")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain','Por favor, selecione o Assunto')
})
it("deve validar mensagem de erro ao enviar sem preencher campo",()=>{
  cy.get('[name="name"]').type("leonardo")
  cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Parcerias")
  //cy.get('[name="message"]').type("Mensagem de Teste")
  cy.get('#btn-submit').click()
  cy.get('#alert-container').should('contain','Por favor, escreva sua Mensagem')
})
})