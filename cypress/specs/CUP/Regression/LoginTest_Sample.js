/// <reference types="cypress" />
import { cupPageObject } from "../../../pageObjects/cupPageObject"


describe('MPN Test', function () {

    const mpnpage = new cupPageObject()

    before(function () {
        mpnpage.loadportal(Cypress.env('venueurl'), 20000)
        mpnpage.getusername(Cypress.env('username'))
        mpnpage.getpassword(Cypress.env('password'))
        mpnpage.clicksigninbutton()
    });

    it('Login-Logout test [@qa,@int,@beta]', function () {
        mpnpage.getlandingpagebanner(30000)
        mpnpage.logmessage('Test Passed')
    });

    it('Login-Logout test [@qa,@int]', function () {
        mpnpage.logmessage('QA & Int: Test Passed')
    });

    it('Login-Logout test [@qa,@beta]', function () {
        mpnpage.logmessage('QA & Beta: Test Passed')
    });

    it('Login-Logout test [@int,@beta]', function () {
        mpnpage.logmessage('Int & Beta: Test Passed')
    })
    describe('22.8.0 qa release tests', function () {

        it('1first test in reslease', function () {
            cy.wait(2000)
            cy.log("11st test passed")
        })

        it('2secound test in reslease', function () {
            cy.wait(2000)
            cy.log("22nd test passed")
        })

        it('3third test in reslease', function () {
            cy.wait(2000)
            cy.log("33rd test passed")
        })

    })

    after(function () {
        mpnpage.clickbannerdropdown()
        mpnpage.clickonsignout()
    });

});