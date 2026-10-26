describe("Funcionalidade : Catalogo",()=>{

    beforeEach(()=>{
        cy.visit("catalog.html")
    })

    it.skip("Deve adicionar um livro á cesta com sucesso",()=>{
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should("contain", 1)
        cy.get('#global-alert-container').should("exist")
    })

    it('Deve clicar em todos os botões adicionar á cesta', () => {
          cy.get('.btn-primary').click({ multiple: true })
    });

    it('Deve clicar no primeiro botão adicionar á cesta', () => {
         cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no ultimo botão adicionar á cesta', () => {
         cy.get('.btn-primary').last().click()
    });

    it('Deve clicar no quarto botão adicionar á cesta', () => {
         cy.get('.btn-primary').eq(3).click()
    });

    it("Deve clicar no nome do Livro e adicionar á cesta",()=>{
        cy.contains('Dom Casmurro').click()
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should("contain", "Livro adicionado à cesta com sucesso!")
        cy.url().should("include","book-details")
    })
})