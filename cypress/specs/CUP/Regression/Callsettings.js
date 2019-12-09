/// <reference types="cypress" />

describe('Call settings test', function(){

    it ('sample callsettings test', function (){
        cy.wait(2000)
        cy.log("1st test passed")
        
    })

    it ('sample callsettings test', function (){
        cy.wait(2000)
        cy.log("2nd test passed")
        
    })

    it ('sample callsettings test', function (){
        cy.wait(2000)
        cy.log("3rd test passed")
        
    })

    it ('sample callsettings test', function (){
        cy.wait(2000)
        cy.log("4rd test passed")
        
    })
    describe('22.8.0 qa release tests', function(){

        it('first test in reslease', function(){
            cy.wait(1000)
            cy.log("1st test passed")
        })

        it('secound test in reslease', function(){
            cy.wait(1000)
            cy.log("2nd test passed")
            })

        it('third test in reslease', function(){
            cy.wait(1000)
            cy.log("3rd test passed")
            })
        
    })

})