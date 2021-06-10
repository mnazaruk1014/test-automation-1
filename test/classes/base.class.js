class Base {

    constructor() {
        this.baseExp = {
            title: 'Mafia Club Portal',
            url: 'http://qa.intgames.org/'
        }
        
    }

    get errorMessage() { return $('#error-text') }

    //methods

    openLoginPage() {
        browser.url('/');
    }
    
    openForgotPage() {
        browser.url('/forgot');
    }
    
    openUsersPage() {
        browser.url('/users');
    }
    
    openPublicGame() {
        browser.url('/public-game');
    }

    openAccountPage() {
        browser.url('/account')
    }

    openPublicGamePage() {
        browser.url('/public-game')
    }


   

checkTabTitle() {
    expect(browser).toHaveTitle(this.baseExp.title) 
}

checkBaseUrl() {
    expect(browser).toHaveUrl(this.baseExp.url) 
}

checkErrorMessage(text) {
    expect(this.errorMessage).toHaveText(text)
}

checkErrorAppears() {
    this.errorMessage.waitForDisplayed()
}

checkErrorDisappears() {
    this.errorMessage.waitForDisplayed({ reverse: true })
}


}

export default Base;