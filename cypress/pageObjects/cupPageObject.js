/// <reference types="cypress" />

export class cupPageObject {


    loadportal(venueurl, cmdtimeout) {
        cy.visit(venueurl, { timeout: cmdtimeout })
    }

    getusername(username) {
        cy.get('#myphonenext_username').type(username)
    }

    clearusername(username) {
        cy.get('#myphonenext_username').clear()
    }

    assertusernameplaceholder() {
        cy.get('#myphonenext_username').should('have.prop', 'placeholder', 'Username')
    }

    getpassword(password) {
        cy.get('#myphonenext_password').type(password)
    }

    clearpassword(password) {
        cy.get('#myphonenext_password').clear()
    }

    assertpasswordplaceholder() {
        cy.get('#myphonenext_password').should('have.prop', 'placeholder', 'Password')
    }

    clicksigninbutton() {
        cy.get('#myphonenext_loginButton').click()
    }

    getlandingpagebanner(cmdtimeout) {
        cy.get('.col-10', { timeout: cmdtimeout }).should('be.visible')
    }

    logmessage(message) {
        cy.log(message)
    }

    clickbannerdropdown() {
        cy.get('.myphoneBannerDownArrow').click()
    }

    clickonsignout() {
        cy.contains('Sign Out').click()
    }

    getloginpagelogo() {
        cy.get('.myphoneSigninHeader > .mx-auto').should('be.visible')
    }

    getdefaultlanguagetext(text) {
        cy.contains('English (United States)')
    }

    asserturl(url) {
        cy.url().should('include', url)
    }

    assertloginform() {
        expect('.form-horizontal').to.exist
    }

    getlanguageselectdropdown() {
        cy.get('.mat-input-infix').click()
    }

    assertlanguagesdropdown() {
        cy.get('.mat-select-content').should('be.visible')
    }

    getforgotUsernamelink() {
        cy.contains('Forgot Username?').should('be.visible')
    }

    assertforgotUsernamehref() {
        cy.contains('Forgot Username?').should('have.attr', 'href', '/myphonenext/forgotUserName')
    }

    getforgotPasswordlink() {
        cy.contains('Forgot Password?').should('be.visible')
    }

    assertforgotPasswordhref() {
        cy.contains('Forgot Password?').should('have.attr', 'href', '/myphonenext/forgotPassword')
    }

    assertSignInbuttonDisabled() {
        cy.get('#myphonenext_loginButton').should('have.prop', 'disabled')
    }

    selectlanguagefromdrodown() {
        cy.get('#mat-option-0 > .mat-option-text').click()
    }

    clickforgotPasswordlink() {
        cy.contains('Forgot Password?').click()
    }

    clickforgotUsernamelink() {
        cy.contains('Forgot Username?').click()
    }

    assertforgotUsernameheader() {
        cy.get('.myphoneSiginForgotDetailsHeader').contains('Forgot Username?')
    }
    assertforgotPasswordheader() {
        cy.get('.myphoneSiginForgotDetailsHeader').contains('Forgot Password?')
    }

    assertSendUsernamebuttondisabled() {
        cy.get('#myphonenext_forgotusername_button').should('have.prop', 'disabled')
    }

    assertPasswordbuttondisabled() {
        cy.get('#myphonenext_forgotpassword_button').should('have.prop', 'disabled')
    }

    assertCanclebutton() {
        cy.get('.myphoneSigninLinksBox > .btn').should('be.visible')
    }

    clickCanclebutton() {
        cy.get('.myphoneSigninLinksBox > .btn').click()
    }

    assertCanclebuttonhref() {
        cy.get('.myphoneSigninLinksBox > .btn').should('have.prop', 'href', Cypress.env('venueurl'))
    }

    assertplaceHolderForgotUsername() {
        cy.get('#emailaddressField').should('have.prop', 'placeholder', 'Enter email address')
    }

    assertplaceHolderForgotPassword() {
        cy.get('#usernameField').should('have.prop', 'placeholder', 'Username')
    }

    assertLoginerrormessage() {
        cy.contains('Username or password is incorrect.').should('be.visible')
    }

    getversion() {
        cy.get('.myphoneAppVersion > div').invoke('text').then((versiontext) => {
            expect(true)
            Cypress.env('version', versiontext)
        });
    }
}
