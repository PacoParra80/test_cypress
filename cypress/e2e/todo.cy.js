describe('Agregar tareas', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/')
    })

    
    it('Crear tarea', () => {
      cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
      cy.get('[data-testid="todo-item-label"]').should('have.text', 'Tarea 1')
    })



    it('Marcar tarea como completada', () => {
        cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="todo-item-label"]')
        .should('have.css', 'text-decoration', 'line-through solid rgb(148, 148, 148)')
      })



      it('Desmarcar tarea completada', () => {
        cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="todo-item-label"]')
        .should('not.have.css', 'text-decoration', 'line-through solid rgb(148, 148, 148)')
      })



      it('Editar tarea', () => {
        cy.get('[data-testid="text-input"]').type("Tarea Editar 1{enter}")
        cy.get('[data-testid="todo-item-label"]').dblclick()
        cy.get('input').last().clear().type("Tarea Editar 2{enter}")
        cy.get('[data-testid="todo-item-label"]').should('have.text', 'Tarea Editar 2')
      })



      it('Borrar tarea', () => {
        cy.get('[data-testid="text-input"]').type("Tarea Borrar{enter}")
        cy.get('[data-testid="todo-item-button"]').click({force: true})
        cy.get('[data-testid="todo-item-label"]').should('not.exist')
      })
      


      it('Filtrar tareas', () => {
        cy.get('[data-testid="text-input"]').type("Tarea 1{enter}")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="text-input"]').type("Tarea 2{enter}")
        cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
        cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="text-input"]').type("Tarea 4{enter}")
        cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
        cy.get('[data-testid="todo-item-label"]')
        .should('have.css', 'text-decoration', 'line-through solid rgb(148, 148, 148)')
        cy.get(':nth-child(2) > a').click()
        cy.get('[data-testid="todo-item-label"]')
        .should('not.have.css', 'text-decoration', 'line-through solid rgb(148, 148, 148)')
        cy.get(':nth-child(1) > a').click()
      })
  })