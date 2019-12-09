/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

import { cupPageObject } from "../../../pageObjects/cupPageObject"


const diffviews = ['macbook-15', 'samsung-s10', 'iphone-x', 'ipad-2', 'iphone-6']


describe('MPN Test', function () {

    const mpnpage = new cupPageObject()

    before(function () {
        mpnpage.loadportal(Cypress.env('venueurl'), 50000)
        mpnpage.getversion()
        cy.log(Cypress.env('version'))
    });

    diffviews.forEach((size) => {
        // const size = 'macbook-15'

        it('RLTOQA-63652:Access the MyPhoneNext portal '+size, function () {
            cy.viewport(size)
            //Assert URl
            mpnpage.asserturl('/myphonenext/')
            //Assert LoginLogo exists or not
            mpnpage.getloginpagelogo()
            //Assert Default Language 
            mpnpage.getdefaultlanguagetext(Cypress.env('defaultlanguage'))
            //Assert Login text boxes form
            mpnpage.assertloginform()
            //Assert PlaceHolder Username/Password
            mpnpage.assertusernameplaceholder()
            mpnpage.assertpasswordplaceholder()
            //Assert language select dropdown exists or not
            mpnpage.getlanguageselectdropdown()
            mpnpage.assertlanguagesdropdown()
            mpnpage.selectlanguagefromdrodown()
            //Assert Forgot Username link exists or not
            mpnpage.getforgotUsernamelink()
            //Assert Forgot Username href link
            mpnpage.assertforgotUsernamehref()
            //Assert Forgot Password link exists or not
            mpnpage.getforgotPasswordlink()
            //Assert Forgot Password href link
            mpnpage.assertforgotPasswordhref()
            //Assert SignIn button Disabled or not
            mpnpage.assertSignInbuttonDisabled()
            mpnpage.logmessage('Access the MyPhoneNext portal Test Passed!!')
        });

        it('RLTOQA-63663:Forgot Username Link  '+size, function () {
            cy.viewport(size)
            //Assert Login text boxes form
            mpnpage.assertloginform()
            //click on Forgot Username Link
            mpnpage.clickforgotUsernamelink()
            //Assert Forgot Username form
            mpnpage.assertloginform()
            //Asser page Header
            mpnpage.assertforgotUsernameheader()
            //Assert Send Username Button Disabled
            mpnpage.assertSendUsernamebuttondisabled()
            //Asser Cancle button exist or not
            mpnpage.assertCanclebutton()
            //Assert cancle button href prop
            mpnpage.assertCanclebuttonhref()
            //Assert Text box placeholder
            mpnpage.assertplaceHolderForgotUsername()
            //Click on Canclebutton
            mpnpage.clickCanclebutton()
            //Assert Forgot Username link exists or not
            mpnpage.getforgotUsernamelink()
        });

        it('RLTOQA-63665:Forgot Password Link  '+size, function () {
            cy.viewport(size)
            //Assert Login text boxes form
            mpnpage.assertloginform()
            //click on Forgot Password Link
            mpnpage.clickforgotPasswordlink()
            //Assert Forgot Password form
            mpnpage.assertloginform()
            //Asser page Header
            mpnpage.assertforgotPasswordheader()
            //Assert Text box placeholder
            mpnpage.assertplaceHolderForgotPassword()
            //Assert Reset Password Button Disabled
            mpnpage.assertPasswordbuttondisabled()
            //Asser Cancle button exist or not
            mpnpage.assertCanclebutton()
            //Assert cancle button href prop
            mpnpage.assertCanclebuttonhref()
            //Click on Canclebutton
            mpnpage.clickCanclebutton()
            //Assert Forgot Username link exists or not
            mpnpage.getforgotUsernamelink()

        });

        it('RLTOQA-63667:Login with Invalid user name / password '+size, function () {
            cy.viewport(size)
            //Assert Login text boxes form
            mpnpage.assertloginform()
            //Enter UserName
            mpnpage.getusername(Cypress.env('username'))
            //Assert SignIn button Disabled or not 
            mpnpage.assertSignInbuttonDisabled()
            //Enter Password
            mpnpage.getpassword('invalid')
            //Click on SignIn
            mpnpage.clicksigninbutton()
            //Assert Error Message displayed or not
            mpnpage.assertLoginerrormessage()

        })

        it('RLTOQA-63668:Login with Valid user name / password  '+size, function () {
            // cy.skipOn(Cypress.env('version') === '22.8.0_2')
            cy.viewport(size)
            //Assert Login text boxes form
            mpnpage.assertloginform()
            //Clear
            mpnpage.clearusername()
            mpnpage.clearpassword()
            //Assert SignIn button Disabled or not 
            mpnpage.assertSignInbuttonDisabled()
            //Enter Username
            mpnpage.getusername(Cypress.env('username'))
            //Enter Password
            mpnpage.getpassword(Cypress.env('password'))
            //Click on SignIn
            mpnpage.clicksigninbutton()
            //Assert Landing Banner
            mpnpage.getlandingpagebanner(30000)
            //LogOut
            mpnpage.clickbannerdropdown()
            mpnpage.clickonsignout()
            cy.wait(5000)

        });
    });
});