import Login from '../classes/pages/login.page';
import Ratings from '../classes/pages/users.page';
import Header from '../classes/elements/header.elem';
import PublicGame from '../classes/pages/public-game.page';

describe('New-Game', () => {

    before(() => {
        Login.openLoginPage()
        Header.publicGameBtnClick()
        PublicGame.checkPage()
    })

    it('Create-a-new-game', () => {
        PublicGame.enterToPlayerPlaceholderField()
        for (let i =1; i<=10; i++){
            console.log(i + ' player')
          };
          PublicGame.addPlayerBtnClick()
          PublicGame.createGameBtnClick()
    })

    it('Test-2', () => {
        expect(false).toEqual(true)
    })

    it('Test-3', () => {
        expect(false).toEqual(true)
    })

    it('Test-4', () => {
        expect(false).toEqual(true)
    })
})        
    