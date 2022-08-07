/// <reference types="cypress" />

describe('Homepage user flows', () => {
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

  it('should render the site header, dropdown menu, and all ingredient cards on page load', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.header-title').contains('h1', 'Calamity Kitchen')

    cy.get('form').find('select').should('have.length', 1)
    cy.get('option[value="default"]').should('contain', 'Select a Cooking Effect')
    
    cy.get('.ingredients-container').find('.card').should('have.length', 4)
  })

  it('should display Loading message and image while content is loading', () => {
    cy.get('.loading').contains('p', 'Loading...')
    cy.get('.loading-img').should('have.attr', 'src')
  })

  it('should display correct elements within ingredient cards', () => {
    cy.get('.card').first().contains('h2', 'blue nightshade')
    cy.get('.card').first().find('img').should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/blue_nightshade/image')
    cy.get('.card').first().contains('p', 'stealth up')

    cy.get('.card').last().contains('h2', 'bladed rhino beetle')
    cy.get('.card').last().find('img').should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/bladed_rhino_beetle/image')
    cy.get('.card').last().contains('p', 'attack up')
  })

  it('should be able to select cooking effect from dropdown and filter appropriate ingredient cards', () => {
    cy.get('select').select('attack up')
    cy.get('.ingredients-container').find('.card').should('have.length', 2)

    cy.get('.card').first().contains('h2', 'mighty bananas')
    cy.get('.card').first().find('img').should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/mighty_bananas/image')
    cy.get('.card').first().contains('p', 'attack up')

    cy.get('.card').last().contains('h2', 'bladed rhino beetle')
    cy.get('.card').last().find('img').should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/bladed_rhino_beetle/image')
    cy.get('.card').last().contains('p', 'attack up')
  })

  it('should be able to filter ingredient cards by different cooking effects', () => {
    cy.get('select').select('heat resistance')
    cy.get('.ingredients-container').find('.card').should('have.length', 1)
  })

  it('should display an error message if ingredients are unable to load due to 400 error', () => {
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/materials', {
      statusCode: 400
    })
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/creatures', {
      statusCode: 400
    })
    cy.get('.app-error').contains('p', 'Uh oh! Something went wrong, please try again later.')
    cy.get('.ingredients-container').should('be.empty')
  })

  it('should display an error message if ingredients are unable to load due to 500 error', () => {
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/materials', {
      statusCode: 500
    })
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/creatures', {
      statusCode: 500
    })
    cy.get('.app-error').contains('p', 'Uh oh! Something went wrong, please try again later.')
    cy.get('.ingredients-container').should('be.empty')
  })

  it('should display 404 page if user enters URL that does not exist', () => {
    cy.visit('http://localhost:3000/cats')

    cy.get('.error-page').contains('h2', '404 Error')
    cy.get('.error-page-msg').should('contain', 'Uh oh! This page doesn\'t exist.')

    cy.get('.error-page-link').should('contain', 'Click here to go back to the homepage.')
    cy.get('.error-image').should('have.attr', 'src', '/static/media/gameOver.6cb8869ccd590464a360.jpeg')

    cy.get('.error-page-link').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should be able to click on an ingredient card and be brought to an Ingredient Details page with a different URL', () => {
    cy.get('.card').first().click()
    cy.url().should('eq', 'http://localhost:3000/ingredient/198')
  })
})