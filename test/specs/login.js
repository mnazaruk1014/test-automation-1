import Login from '../classes/pages/login.page';
import Forgot from '../classes/pages/forgot.page';
import Header from '../classes/elements/header.elem';
import Ratings from '../classes/pages/users.page';

describe('Elements-displayed', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Logo', () => {
        Login.checkLogo()
    })

    it('Login-button', () => {
        Login.checkLoginBtn()
    })

    it('Email-field', () => {
        Login.checkEmailField()
    })

    it('Password-field', () => {
        Login.checkPasswordField()
    })

    it('Remind-password-button', () => {
        Login.checkRemindPasswordBtn()
    })


})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        Login.checkEmailPlaceholder()

    })

    it('Password-placeholder', () => {
        Login.checkPasswordPlaceholder()

    })

    it('Login-button', () => {
        Login.checkLoginBtnText

    })

    it('Remind-Password-btn', () => {
        Login.checkRemindPasswordBtn()

    })

})


describe('Functionality', () => {

    it('Remind-Password-button-redirect', () => {
        Login.remindPassClick();
        Forgot.checkUrl()
    })

    it('Forgot-page-displayed', () => {
        Forgot.checkPage()
    })

    it('Error-for-empty-login-and-password', () => {
        Login.openLoginPage()
        Login.loginClick()
        Login.checkErrorMessage('Please specify email and password')

    })

    it('Error-for-empty-login', () => {
        Login.openLoginPage()
        Login.enterToPasswordField('something')
        Login.loginClick()
        Login.checkErrorMessage('Please specify email and password')
    })

    it('Error-disapears-on-input-login', () => {
        Login.enterToEmailField('user')
        Login.checkErrorDisappears()

    })

    it('Error-for-empty-password', () => {
        Login.openLoginPage()
        Login.enterToEmailField('user')
        Login.loginClick()
        Login.checkErrorMessage('Please specify email and password')
    })

    it('Error-disapears-on-input-password', () => {
        Login.enterToPasswordField('users')
        Login.checkErrorDisappears()
    })

    it('Error-for-incorrect-input-email', () => {
        Login.openLoginPage()
        Login.enterToEmailField('user')
        Login.enterToPasswordField('something')
        Login.loginClick()
        Login.checkErrorMessage('User with this email does not exist')
    })

    it('Error-for-incorrect-password', () => {
        Login.openLoginPage()
        Login.enterToEmailField('info@techstart.dev')
        Login.enterToPasswordField('something')
        Login.loginClick()
        Login.checkErrorMessage('Password is incorrect')
    })

    it('Succesful-login', () => {
        Login.openLoginPage()
        Login.enterToEmailField('test@test.com')
        Login.enterToPasswordField('maftest@123456')
        Login.loginClick()
        Header.checkAccountBtn()
        Header.checkLogoutBtn()
        Ratings.checkPage()
    })
})

