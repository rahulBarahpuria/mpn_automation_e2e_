/// <reference types="cypress" />

describe('Suite 5 - File 3', function(){

    it ('Suite 5 - Test 1', function (){
        cy.wait(2000)
        cy.log("1st test passed")
        
    })

    it ('Suite 5 - Test 2', function (){
        cy.wait(2000)
        cy.log("2nd test passed")
        
    })

    it ('Suite 5 - Test 3', function (){
        cy.wait(2000)
        cy.log("3rd test passed")
        
    })

    it ('Suite 5 - Test 4', function (){
        cy.wait(2000)
        cy.log("4rd test passed")
        
    })
    describe('22.8.0 qa release tests Suite 6', function(){

        it('first test in reslease Suite 6', function(){
            cy.wait(4000)
            cy.log("1st test passed")
        })

        it('secound test in reslease Suite 6', function(){
            cy.wait(4000)
            cy.log("2nd test passed")
            })

        it('third test in reslease Suite 6', function(){
            cy.wait(4000)
            cy.log("3rd test passed")
            })
        
    })

})