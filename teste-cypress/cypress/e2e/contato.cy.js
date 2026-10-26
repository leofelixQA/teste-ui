describe("Funcionalidade : Contato",()=>{

it.only("deve preencher o formulario de contato com sucesso",()=>{
  cy.visit("http://localhost:3000/index.html")
  cy.get('[name="name"]').type("leonardo")
  cy.get('[name="email"]').type("teste@teste.com")
  cy.get('[name="subject"]').select("Parcerias")
  cy.get('[name="message"]').type("Mensagem de Teste")
  cy.get('#btn-submit').click()
  cy.contains("Contato enviado com sucesso!").should("exist")
})


})