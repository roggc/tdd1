describe
(
  'footer',
  ()=>
  {
    it
    (
      'renders ok, contains text',
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="footer"]').contains('2019 roger gomez')
      }
    )
  }
)
