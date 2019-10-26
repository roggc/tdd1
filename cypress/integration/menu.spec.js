describe
(
  'menu',
  ()=>
  {
    it
    (
      'renders ok and shows modal when button clicked',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="menu"]').get('button').click()
        cy.get('[data-testid="modal"]').should('be.visible')
      }
    )
  }
)
