import { faker } from '@faker-js/faker';

describe("Funcionalidade : Cadastro", () => {
    beforeEach(() => {
        cy.visit("register.html")
    })
    it("deve preencher formulario de cadastro com sucesso", () => {

        let email2 = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.phone.number()

        cy.get('#name').type(nome)
        cy.get('#email').type(email2)
        cy.get('#phone').type(telefone)
        cy.get('#password').type(senha)
        cy.get('#confirm-password').type(senha)
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#user-name').should("contain", nome)
        cy.url().should("include", "dashboard")
    })

    it('Deve preencher cadastro -Usando comando customizado', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.phone.number()
        cy.preencherCadastro(nome, email, telefone, senha, senha)
        cy.get('#user-name').should("contain", nome)
        cy.url().should("include", "dashboard")
    });
})