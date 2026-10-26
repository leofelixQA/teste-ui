describe("Funcionalidade : Login",()=>{

    beforeEach(()=>{
        cy.visit("login.html")
    })

    it("Deve fazer login Padrão com sucesso",()=>{
        cy.get('#email').type("usuario@teste.com")
        cy.get('#password').type("user123")
        cy.get('#login-btn').click()
    })

    it.only('Deve fazer login Adm - usando comando customizado', () => {
       cy.login("admin@biblioteca.com","admin123") 
    });
})