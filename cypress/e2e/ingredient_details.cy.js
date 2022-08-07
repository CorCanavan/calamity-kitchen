/// <reference types="cypress" />

describe('Ingredient Details page', () => {
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
    cy.get('.card').first().click()
    cy.url().should('eq', 'http://localhost:3000/ingredient/198')
  })

  it('should display Loading message and image while content is loading', () => {
    cy.visit('http://localhost:3000/ingredient/198')
    cy.get('.loading').contains('p', 'Loading...')
    cy.get('.loading-img').should('have.attr', 'src')
  })

  it('should display more information about the clicked ingredient', () => {
    cy.get('.details-info').contains('h2', 'blue nightshade')
    cy.get('.details-info').contains('p', 'materials')
    cy.get('.details-info').contains('p', 'West Necluda')

    cy.get('.details-info').contains('p', 'stealth up')
    cy.get('.details-info').contains('p', 'A plant that grows in the quieter areas of Hyrule. At night, it gives off a soft glow. Cook with it to increase your stealth.')

    cy.get('.details-info').contains('p', 0)
    cy.get('.details-img').should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/blue_nightshade/image')
  })

  it('should contain a back button to navigate back to homepage', () => {
    cy.contains('BACK').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('form').should('be.visible')
    cy.get('.ingredients-container').should('exist')
  })

  it('should also be able to navigate back to homepage by clicking on header title', () => {
    cy.get('.header-title').click()
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('form').should('be.visible')
    cy.get('.ingredients-container').should('exist')
  })
})