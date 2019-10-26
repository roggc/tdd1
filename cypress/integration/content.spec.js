describe
(
  'content',
  ()=>
  {
    it
    (
      'renders ok, contains home page at first',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="content"]').find('[data-testid="home"]')
      }
    )
  }
)
