describe
(
  'header',
  ()=>
  {
    it
    (
      'renders ok, contains menu and wellcome message',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="header"]').find('[data-testid="menu"]')
        cy.get('[data-testid="header"]').contains('Wellcome to react!')
      }
    )
  }
)
