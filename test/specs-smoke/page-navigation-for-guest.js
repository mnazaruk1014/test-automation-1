import Login from '../classes/pages/login.page';
import Ratings from '../classes/pages/users.page';
import Header from '../classes/elements/header.elem';
import PublicGame from '../classes/pages/public-game.page';


describe('Page-navigation-for-guest', () => {

    before(() => {
        Login.openLoginPage()

    })

    it('Page-navigation-guest', () => {
        Header.publicGameBtnClick()
        PublicGame.checkPage()
        Header.ratingsBtnClick()
        Ratings.checkPage()
        Header.backToLoginBtnClick()
        Login.checkPage()
        
    })


    

    it('', () => {
        expect(false).toEqual(true)
    })

    it('Test-3', () => {
        expect(false).toEqual(true)
    })

    it('Test-4', () => {
        expect(false).toEqual(true)
    })




})
