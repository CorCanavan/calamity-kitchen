describe('Welcome Page user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/materials', {
      statusCode: 200,
      fixture: "materials"
    })
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/creatures', {
      statusCode: 200,
      fixture: "creatures"
    })
    cy.visit('http://localhost:3000/')
  })

  it('should render the Welcome message, description, gif, and button', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('.welcome-title').contains('h1', 'Welcome to Calamity Kitchen')
    cy.get('.welcome-blurb').contains('p', 'Zelda: Breath of the Wild')

    cy.get('.welcome-gif').should('have.attr', 'src', '/static/media/cookingLink.261a1b428fb158bea880.gif')
    cy.get('.lets-get-cooking-btn').contains('button', 'Let\'s Get Cooking!')
  })

  it('should be able to click on the Let\'s Get Cooking button and be brought to the Homepage with a different URL', () => {
    cy.contains('Let\'s Get Cooking!').click()
    cy.url().should('eq', 'http://localhost:3000/home')
  })
})