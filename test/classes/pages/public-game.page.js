import Base from '../base.class';

class PublicGame extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/public-game',
            playerPlaceholder : 'Nikname/Name',
            createGameBtn : 'Create Game',
            addPlayerBtn : 'Add',
            newGameTab : 'New',
            randomSeatingNumbers : 'Random seating numbers',
            gameTab : 'Game'


        }
    }

    //element selectors
    get page() { return $('#public-game') }
    get createGameBtn() { return $('#create-game-button') }
    get addPlayerBtn() { return $('#add_player_button') }
    get newGameTab() { return $('#new-game-tab') }
    get checkBoxRandomSeating() { return $('#random-seating') }
    get playerPlaceholder() { return $('#add_player_field') }
    get randomSeatingNumbers() { return $('.content-middle') }
    get game() { return $('.thead-light') }
    get iconMale() { return $('img[alt="male"]') }
    get iconFemale() { return $('img[alt="female"]') }

    //methods

    openPublicGamePage() {
        browser.url('/public-game')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkCreateGameBtn() {
        expect(this.createGameBtn).toBeDisplayed()
    }

    checkAddPlayerBtn() {
        expect(this.addPlayerBtn).toBeDisplayed()
    }

    checkNewGameTabBtn() {
        expect(this.newGameTab).toBeDisplayed()
    }

    checkGameTab() {
        expect(this.game).toBeDisplayed()
    }

    checkPlayerPlaceholder() {
        expect(this.playerPlaceholder).toBeDisplayed()
    }

    checkIconMale() {
        expect(this.iconMale).toBeDisplayed()
    }

    checkIconFemale() {
        expect(this.iconFemale).toBeDisplayed()
    }


    checkPlayerPlaceholderText() {
        expect(this.playerPlaceholder).toHaveAttribute('placeholder', this.exp.playerPlaceholder)
    }

    checkGameTabText() {
        expect(this.game).toHaveText(this.exp.gameTab)
    }

    checkCreateGameBtnText() {
        expect(this.createGameBtn).toHaveText(this.exp.createGameBtn )
    }

    checkAddPlayerBtnText() {
        expect(this.addPlayerBtn).toHaveText(this.exp.addPlayerBtn)
    }

    checkNewGameTabText() {
        expect(this.newGameTab).toHaveText(this.exp.newGameTab)
    }

    checkRandomSeatingText() {
        expect(this.randomSeatingNumbers).toHaveText(this.exp.randomSeatingNumbers)
    }

    createGameBtnClick() {
        this.createGameBtn.click()
    }
    addPlayerBtnClick() {
        this.addPlayerBtn.click()
    }
    enterToPlayerPlaceholderField(text) {
        this.playerPlaceholder.setValue(text)
    }





}

export default new PublicGame;