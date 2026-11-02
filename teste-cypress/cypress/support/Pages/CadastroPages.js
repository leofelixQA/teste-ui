class CadastroPage {

    //Seletores
    campoNome() { return cy.get('#name') }
    campoEmail() { return cy.get('#email') }
    campoTelefone() { return cy.get('#phone') }
    campoSenha() { return cy.get('#password') }
    campoConfirmaSenha() { return cy.get('#confirm-password') }
    checkTermos() { return cy.get('#terms-agreement') }
    botãoCriarConta() { return cy.get('#register-btn') }
    //Métodos
    visitarPaginaCadastro() {
        cy.visit("register.html")
    }
    preencherCadastro(nome, email, telefone, senha, confirmaSenha) {
        if (nome) this.campoNome().clear().type(nome)
        if (email) this.campoEmail().clear().type(email)
        if (telefone) this.campoTelefone().clear().type(telefone)
        if (senha) this.campoSenha().clear().type(senha)
        if (confirmaSenha) this.campoConfirmaSenha().clear().type(confirmaSenha)
        this.checkTermos().check()
        this.botãoCriarConta().click()
    }

}
export default new CadastroPage()
