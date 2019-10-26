describe
(
  'content',
  ()=>
  {
    it
    (
      'renders ok',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="content"]')
      }
    )
  }
)
