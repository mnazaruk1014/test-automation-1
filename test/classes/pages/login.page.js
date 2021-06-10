import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/',
            emailPlaceholder: 'Email *',
            passwordPlaceholder: 'Password *',
            loginBtn: 'Login',
            remindPasswordBtn: 'Remind Password'


        }
    }

    //element selectors
    get page() { return $('#login-page') }
    get remindPasswordBtn() { return $('#btn-forgot') }
    get loginBtn() { return $('#btn-login') }
    get logo() { return $('#logo') }
    get emailField() { return $('#username') }
    get passwordField() { return $('#pass') }


    //methods

    openLoginPage() {
        browser.url('/')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkUrlWithDelay(delay) {
        expect(browser).toHaveUrl(this.exp.url, { wait: delay })
    }   

     checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkLoginBtn() {
        expect(this.loginBtn).toBeDisplayed()
    }

    checkEmailField() {
        expect(this.emailField).toBeDisplayed()
    }

    checkPasswordField() {
        expect(this.passwordField).toBeDisplayed()
    }

    checkRemindPasswordBtn() {
        expect(this.remindPasswordBtn).toBeDisplayed()
    }

    checkEmailPlaceholder() {
        expect(this.emailField).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }

    checkPasswordPlaceholder() {
        expect(this.passwordField).toHaveAttribute('placeholder', this.exp.passwordPlaceholder)
    }

    checkLoginBtnText() {
        expect(this.loginBtn).toHaveText(this.exp.loginBtn)
    }

    checkRemindPasswordBtnText() {
        expect(this.remindPasswordBtn).toHaveText(this.exp.remindPasswordBtn)
    }

    remindPassClick() {
        this.remindPasswordBtn.click()
    }

    loginClick() {
        this.loginBtn.click()
    }

    enterToPasswordField(text) {
        this.passwordField.setValue(text)
    }

    enterToEmailField(text) {
        this.emailField.setValue(text)
    }

    playerLogin(){
        this.openLoginPage()
        this.enterToEmailField('test@test.com')
        this.enterToPasswordField('maftest@123456')
        this.loginClick()
    }

    


}

export default new Login;