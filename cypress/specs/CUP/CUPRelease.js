/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

describe('Suite 1 - File 1', function(){

    it ('Suite 1 test 1 ', function (){
        cy.wait(2000)
        cy.log("1st test passed")
        
    })

    it ('Suite 1 test 2', function (){
        cy.wait(2000)
        cy.log("2nd test passed")
        
    })

    it ('Suite 1 test 3', function (){
        cy.wait(2000)
        cy.log("3rd test passed")
        
    })

    it ('Suite 1 test 4', function (){
        cy.wait(2000)
        cy.log("4rd test passed")
        
    })

    describe('22.8.0 qa release tests Suite 2 - File 1', function(){

        it('first test in reslease Suite 2', function(){
            cy.wait(4000)
            cy.log("1st test passed")
        })

        it('secound test in reslease Suite 2', function(){
            cy.wait(4000)
            cy.log("2nd test passed")
            })

        it('third test in reslease Suite 2', function(){
            cy.wait(4000)
            cy.log("3rd test passed")
            })
        
    })

})