/// <reference types="Cypress" />
describe('My Second Test Suite', function()
{
    it('My first test case', function ()
    {
        //checkboxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm', function(){
            return false
        })
        //window:alert
        

        cy.on('window:alert',(str)=>{
            //Mocha

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            //Mocha

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')

    })

   /* it('My second test case', function ()
    {
        //checkboxes
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',function(){
            return false
        
            
        })
        cy.get('#result').should('include.text','You clicked: Cancel')
    })*/
})