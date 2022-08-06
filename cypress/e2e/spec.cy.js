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

  it('should render the site header, dropdown form, and all ingredient cards on page load, ', () => {
    cy.get('.header-title').contains('h1', 'Calamity Kitchen')

    cy.get('form').find('select').should('have.length', 1)
    cy.get('option[value="select"]').should('contain', 'Select a Cooking Effect')

    cy.get('.ingredients-container').find('.card').should('have.length', 4)
    cy.get('.card').first().contains('h2', 'blue nightshade')
    cy.get('.card').first().find('img').should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/blue_nightshade/image')
  })


})