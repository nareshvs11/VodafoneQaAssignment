/// <reference types="Cypress" />
describe('My Second Test Suite', function()
{
    it('My first test case', function ()
    {
        //checkboxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text=$e1.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const pricetext= price.text()
                    expect(pricetext).to.eql('25')
                })
            }


        })


    })
})