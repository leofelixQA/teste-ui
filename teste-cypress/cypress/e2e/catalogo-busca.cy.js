import catalogo from "../fixtures/livros.json"


describe('Funcionalidade : Catalogo-busca', () => {
    beforeEach(()=>{
        cy.visit("catalog.html")
    })

    it("Deve fazer a busca do livro 1984",()=>{
        cy.get('#search-input').type("1984")
        cy.get('.card > .card-body').should("contain","1984")
    })

    it('Deve fazer a busca de um livro do catalogo usando Massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livro)
        cy.get('.card > .card-body').should("contain",catalogo[0].livro)
    });

    it("Deve fazer a busca de um livro do catalogo usando Fixture",()=>{
        cy.fixture("livros").then((biblioteca)=>{
        cy.get('#search-input').type(biblioteca[1].livro)
        cy.get('.card > .card-body').should("contain",biblioteca[1].livro)
        })
    })

    it('Deve fazer a busca de todos os livros do catalogo usando Fixture', () => {
        cy.fixture("livros").then((biblioteca) =>{
        biblioteca.forEach(item =>{
        cy.get('#search-input').clear().type(item.livro)
        cy.get('.card > .card-body').should("contain",item.livro)
        })
        })
    });
});