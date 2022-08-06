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

  it('should render the site header, dropdown form, and all ingredient cards to homepage on page load', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.header-title').contains('h1', 'Calamity Kitchen')

    cy.get('form').find('select').should('have.length', 1)
    cy.get('option[value="select"]').should('contain', 'Select a Cooking Effect')

    cy.get('.ingredients-container').find('.card').should('have.length', 4)
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

  it('should be able to click on an ingredient card and be brought to ingredient details page with more information on the ingredient', () => {
    cy.get('.card').first().click()
    cy.url().should('eq', 'http://localhost:3000/ingredient/198')

    cy.get('.details-info').contains('h2', 'blue nightshade')
    cy.get('.details-info').contains('p', 'materials')
    cy.get('.details-info').contains('p', 'West Necluda')
    cy.get('.details-info').contains('p', 'stealth up')
    cy.get('.details-info').contains('p', 'A plant that grows in the quieter areas of Hyrule. At night, it gives off a soft glow. Cook with it to increase your stealth.')
    cy.get('.details-info').contains('p', 0)
    cy.get('.details-img').should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/blue_nightshade/image')
  })
})