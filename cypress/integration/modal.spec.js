describe
(
  'modal',
  ()=>
  {
    it
    (
      'not present in the document at first glance',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="modal"]').should('not.exist')
      }
    )
  }
)
