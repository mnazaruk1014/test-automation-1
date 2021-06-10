import Base from '../base.class';

class Forgot extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/forgot',
            emailPlaceholder: 'Email *',
            remindPasswordBtn: 'Remind Password'
        }
    }

    //element selectors
    get page() { return $('#forgot-page') }
    get logo() { return $('#logo') }
    get email() { return $('#email') }
    get remindPasswordBtn() { return $('#btn-remind') }

    
    //methods

    openForgotPage() {
        browser.url('/forgot')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }


    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkRemindPasswordBtn() {
        expect(this.remindPasswordBtn).toBeDisplayed()
    }

    checkEmail() {
        expect(this.email).toBeDisplayed()
    }

    checkEmailPlaceholder() {
        expect(this.email).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }

    checkRemindPasswordBtnText() {
        expect(this.remindPasswordBtn).toHaveText(this.exp.remindPasswordBtn)
    }


    remindPasswordBtnClick() {
        this.remindPasswordBtn.click()
    }

    enterToEmail(text) {
        this.email.setValue(text)
    }

    


    








}

export default new Forgot;