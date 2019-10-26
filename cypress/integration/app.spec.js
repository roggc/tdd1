describe
(
  'app',
  ()=>
  {
    it
    (
      'renders ok and contains header,footer and content',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="app"]').find('[data-testid="header"]')
        cy.get('[data-testid="app"]').find('[data-testid="content"]')
        cy.get('[data-testid="app"]').find('[data-testid="footer"]')
      }
    )
  }
)
