import Forgot from '../classes/pages/forgot.page';
import Login from '../classes/pages/login.page';

describe('Elements-displayed', () => {

    before(() => {
        Forgot.openForgotPage()
    })

    it('Logo', () => {
        Forgot.checkLogo()

    })

    it('Email', () => {
        Forgot.checkEmail()
    })


    it('Remind-Password-btn', () => {
        Forgot.checkRemindPasswordBtn()

    })

})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        Forgot.checkEmailPlaceholder()

    })

    it('Remind Password btn', () => {
        Forgot.checkRemindPasswordBtnText()

    })

})

describe('Functionality', () => {


    it('Error-for-empty-Email-field', () => {
        Forgot.openForgotPage()
        Forgot.remindPasswordBtnClick()
        Forgot.checkErrorMessage('Please specify email')

    })

    it('Error-on-incorrect-Email', () => {
        Forgot.openForgotPage()
        Forgot.enterToEmail('something')
        Forgot.remindPasswordBtnClick()
        Forgot.checkErrorMessage('User with this email does not exist')
    })

    it('Error-disapears-on-input-in-email', () => {
        Forgot.enterToEmail('something')
        Forgot.checkErrorDisappears()
    })


    it('Success-for-correct-Email', () => {
        Forgot.openForgotPage()
        Forgot.enterToEmail('info@techstart.dev')
        Forgot.remindPasswordBtnClick()
        Forgot.checkErrorMessage('Password reminder sent')
    })

    it('Redirected-after-reminder-was-sent', () => {
        Login.checkUrlWithDelay(4000)
        
    })   










})