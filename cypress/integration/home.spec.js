describe
(
  'home',
  ()=>
  {
    it
    (
      'conains home message',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="home"]').contains('this is home')
      }
    )
  }
)
