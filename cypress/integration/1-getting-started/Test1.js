/// <reference types="Cypress" />
describe('My First Test Suite', function()
{
    it('My first test case', function ()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)

        //Parent child chainig
        //alias concept
        cy.get('.products').as('productlocator')
       //cy.get('.products').find('.product').should('have.length',4)
       cy.get('@productlocator').find('.product').should('have.length',4)

      // console.log('sf')

      // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
        
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
            cy.wrap($el).find('button').click()
        }
               })
               cy.get('.brand').should('have.text','GREENKART')
               cy.get('.brand').then(function(logoelement)
               {
                cy.log(logoelement.text())
               })
               //cy.log(cy.get('.brand').text())       
    })
})