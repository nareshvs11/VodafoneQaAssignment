/// <reference types="Cypress" />
describe('My Second Test Suite', function()
{
    it('My first test case', function ()
    {
        //checkboxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

            
    })
})