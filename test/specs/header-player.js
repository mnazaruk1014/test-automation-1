import Login from '../classes/pages/login.page'
import Header from '../classes/elements/header.elem';
import Ratings from '../classes/pages/users.page';
import PublicGame from '../classes/pages/public-game.page';
import Account from '../classes/pages/account.page';

describe('Elements-displayed', () => {

    before(() => {
        Login.playerLogin()
    })

    it('Header', () => {
        Header.checkPage()
    })

    it('Ratings-button', () => {
        Header.checkRatingsBtn()
    })

    it('Public-game-button', () => {
        Header.checkPublicGameBtn()
    })

    it('Account-button', () => {
        Header.checkAccountBtn()
    })

    it('Logout-button', () => {
        Header.checkLogoutBtn()
    })


})

describe('Functionality', () => {

  

    it('Ratings-button-redirect', () => {
        Header.ratingsBtnClick()
        Ratings.checkUrl()
    })

    it('Ratings-page-displayed', () => {
        Ratings.checkPage()
    })

    it('Public-game-button-redirect', () => {
        Header.publicGameBtnClick()
        PublicGame.checkUrl()
    })

    it('Public-game-page-displayed', () => {
        PublicGame.checkPage()
    })


    it('Account-button-redirect', () => {
        Header.accountBtnClick()
        Account.checkUrl()
       
    })

    it('Account-page-displayed', () => {
        Account.checkPage()
     })


    it('Logout-button-redirect', () => {
        Header.logoutBtnClick()
        Login.checkUrl()
     })


    it('Login-page-displayed', () => {
        Login.checkPage()
     })


    it('Account-button-is-NOT-displayed', () => {
        Header.checkAccountBtnDisappears()
     })


    it('Logout-button-is-NOT-displayed', () => {
       Header.checkLogoutBtnDisappears()
        
    })












    






})