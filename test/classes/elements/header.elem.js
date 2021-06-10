import Base from '../base.class';

class Header extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#header') }
    get ratingsBtn() { return $('#btn-all') }
    get publicGameBtn() { return $('#btn-game') }
    get backToLoginBtn() { return $('#header #btn-login') }
    get backToLoginBtnMissing() { return $('#header #btn-login') }
    get gameBtn() { return $('#btn-game') }
    get accountBtn() { return $('#btn-user') }
    get logoutBtn() { return $('#btn-logout') }



    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    checkRatingsBtn() {
        expect(this.ratingsBtn).toBeDisplayed()
    }

    checkPublicGameBtn() {
        expect(this.publicGameBtn).toBeDisplayed()
    }

    checkBackToLoginBtn() {
        expect(this.backToLoginBtn).toBeDisplayed()
    }

    checkAccountBtn() {
        expect(this.accountBtn).toBeDisplayed()
    }

    checkAccountBtnDisappears() {
        this.accountBtn.waitForDisplayed({ reverse: true })
    }
    

    checkLogoutBtn() {
        expect(this.logoutBtn).toBeDisplayed()
    }

    checkLogoutBtnDisappears() {
        this.logoutBtn.waitForDisplayed({ reverse: true })
    }
    

    checkBackToLoginBtnMissing() {
        this.backToLoginBtnMissing.waitForDisplayed({ reverse: true })
    }

    ratingsBtnClick() {
        this.ratingsBtn.click()
    }
    publicGameBtnClick() {
        this.publicGameBtn.click()
    }

    backToLoginBtnClick() {
        this.backToLoginBtn.click()
    }

    accountBtnClick() {
        this.accountBtn.click()
    }

    logoutBtnClick() {
        this.logoutBtn.click()
    }














}

export default new Header;