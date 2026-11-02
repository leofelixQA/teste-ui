import { faker } from '@faker-js/faker';
import CadastroPages from "../support/Pages/CadastroPages"

describe("Funcionalidade : Cadastro", () => {
    beforeEach(() => {
        CadastroPages.visitarPaginaCadastro()
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

    it("Deve fazer login usando Page Objects", () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.phone.number()
        CadastroPages.preencherCadastro(nome, email, telefone, senha, senha)
        cy.get('#user-name').should("contain", nome)
        cy.url().should("include", "dashboard")

    })

    it("Deve validar mensagem de erro ao enviar com campo Nome vazio", () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.phone.number()
        CadastroPages.preencherCadastro("", email, telefone, senha, senha)
        cy.get(':nth-child(1) > .invalid-feedback').should("contain","Nome deve ter pelo menos 2 caracteres")
    })

    it("Deve validar mensagem de erro ao enviar com campo email vazio", () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.phone.number()
        CadastroPages.preencherCadastro(nome, "", telefone, senha, senha)
        cy.get(' :nth-child(2) > .invalid-feedback').should("contain","Email válido é obrigatório")
    })

    it("Deve validar mensagem de erro ao enviar com o campo Senha vazio", () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number()
        let senha = faker.phone.number()
        CadastroPages.preencherCadastro(nome, email, telefone,senha,"")
        cy.get(':nth-child(5) > .invalid-feedback').should("contain","Senhas não coincidem")

    })
})