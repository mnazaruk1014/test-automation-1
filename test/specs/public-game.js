import Login from '../classes/pages/login.page';
import Header from '../classes/elements/header.elem';
import PublicGame from '../classes/pages/public-game.page';

describe('Elements-displayed', () => {

    before(() => {
        Login.openPublicGamePage()
    })

    it('Add-player-btn', () => {
        PublicGame.checkAddPlayerBtn()
    })

    it('Create-game-btn', () => {
        PublicGame.checkCreateGameBtn()
    })

    it('New-game-tab-btn', () => {
        PublicGame.checkNewGameTabBtn()
    })

    it('Game-tab', () => {
        PublicGame.checkGameTab()
    })

    it('Male-Icon-Btn', () => {
        PublicGame.checkIconMale()
    })

    it('Female-Icon-Btn', () => {
        PublicGame.checkIconFemale()
    })

    it('Check-box-player-placeholder', () => {
        PublicGame.checkPlayerPlaceholder()
    })


})

describe('Elements-values', () => {

    it('Box-player-placeholder-text', () => {
        PublicGame.checkPlayerPlaceholderText()
    })

    it('Check-random-seating-text', () => {
       PublicGame.checkRandomSeatingText()
    })

    it('Create-game-btn-text', () => {
        PublicGame.checkCreateGameBtnText()
    })

    it('Add-player-btn-text', () => {
        PublicGame.checkAddPlayerBtnText()
    })

    it('New-game-tab-text', () => {
        PublicGame.checkNewGameTabText()
    })

    it('Game-tab-text', () => {
        PublicGame.checkGameTabText()
    })




})


describe('Functionality', () => {

    it('Public-game-page-displayed', () => {
        PublicGame.checkPage()

    })

    it('Create-game-btn-disabled', () => {
        PublicGame.createGameBtnClick()
    })

    it('Add-game-btn-disabled', () => {
        PublicGame.addPlayerBtnClick()
    })




})