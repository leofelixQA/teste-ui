import user from "../fixtures/usuario.json"



describe("Funcionalidade : Login",()=>{

    beforeEach(()=>{
        cy.visit("login.html")
    })

    it("Deve fazer login Padrão com sucesso",()=>{
        cy.get('#email').type("usuario@teste.com")
        cy.get('#password').type("user123")
        cy.get('#login-btn').click()
    })

    it('Deve fazer login Adm - usando comando customizado', () => {
       cy.login("admin@biblioteca.com","admin123") 
    });

    it('Deve fazer login ADM usando importação de dados', () => {
        cy.login(user.email,user.senha)
    });

    it('Deve fazer login Padrão usando importação de dados', () => {
        cy.login(user.emailp,user.senhap)
    });
})