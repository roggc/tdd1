describe
(
  'menu',
  ()=>
  {
    it
    (
      `renders ok,
        shows modal when button clicked,
        modal contains routes,
        content contains about when clicked about link,
        after last click modal does not exist,
        shows modal when button clicked,
        content contains home when clicked home link`,
      ()=>
      {
        cy.visit('http://localhost:3000')
        cy.get('[data-testid="menu"]').get('button').click()
        cy.get('[data-testid="modal"]').should('be.visible')
        cy.get('[data-testid="modal"]').contains('home')
        cy.get('[data-testid="modal"]').contains('about').click()
        cy.get('[data-testid="content"]')
          .find('[data-testid="about"]').contains('this is about')
        cy.get('[data-testid="modal"]').should('not.exist')
        cy.get('[data-testid="menu"]').get('button').click()
        cy.get('[data-testid="modal"]').contains('home').click()
        cy.get('[data-testid="modal"]').should('not.exist')
        cy.get('[data-testid="content"]')
          .find('[data-testid="home"]')
      }
    )
  }
)
