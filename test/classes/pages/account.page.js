import Base from '../base.class';

class Account extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/account',

        }
    }

    //element selectors
    get page() { return $('#account-page') }
    get updateBtn() { return $('#update') }
    get passwordField() { return $('#pass') }

   

    //methods
    openAccountPage() {
        browser.url('/account')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    updateBtnClick() {
        this.updateBtn.click()
    }

    enterToPasswordField(text) {
        this.passwordField.setValue(text)
    }

   

   
}

export default new Account;