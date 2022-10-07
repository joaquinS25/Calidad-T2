describe('Examen T2', () => {
    beforeEach('login', () => {
        cy.visit(Cypress.env('pagina'))
        cy.get('#agregarBiblioteca').click()
        cy.get('#Usuario').type('admin')
        cy.get('#Contra').type('admin')
        cy.get('#Iniciar_Sesion').click()

    })
    it('Agregar a la biblioteca', () => {
        cy.visit(Cypress.env('pagina'))
        cy.get('#Agregar_biblioteca').click()
        cy.get('#Biblioteca').click()
        cy.visit(Cypress.env('pagina') + '/Biblioteca')
        cy.location('pathname').should('eq', '/Biblioteca')

    })
    it('Dar click en leyendo en la Biblioteca', () => {
        cy.visit(Cypress.env('pagina') + '/Biblioteca')
        cy.get('#leyendo').click()
    })
    it('Dar click en terminado en la Biblioteca', () => {
        cy.visit(Cypress.env('pagina') + '/Biblioteca')
        cy.get('#terminado').click()
    })
})
