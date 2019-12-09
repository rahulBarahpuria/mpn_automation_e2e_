/// <reference types="cypress" />

describe('Sample 3 test', function(){

    it ('sample 3 test 1 ', function (){
        cy.wait(2000)
        cy.log("1st test passed")
        
    })

    it ('sample 3 test 2 ', function (){
        cy.wait(2000)
        cy.log("2nd test passed")
        
    })

    it ('sample 3 test 3 ', function (){
        cy.wait(2000)
        cy.log("3rd test passed")
        
    })

    it ('sample 3 test 4 ', function (){
        cy.wait(2000)
        cy.log("4rd test passed")
        
    })
    describe('22.8.0 qa release tests sample 3', function(){

        it('first test in reslease sample 3', function(){
            cy.wait(4000)
            cy.log("1st test passed")
        })

        it('secound test in reslease sample 3', function(){
            cy.wait(4000)
            cy.log("2nd test passed")
            })

        it('third test in reslease sample 3', function(){
            cy.wait(4000)
            cy.log("3rd test passed")
            })
        
    })

})