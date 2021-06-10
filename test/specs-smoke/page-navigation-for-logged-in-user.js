import Login from '../classes/pages/login.page';
import Ratings from '../classes/pages/users.page';
import Header from '../classes/elements/header.elem';
import Account from '../classes/pages/account.page';


describe('Page-navigation-for logged-in', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Navigation-for-logged-in-user', () => {
        Login.enterToEmailField('mafplaceqauser@gmail.com')
        Login.enterToPasswordField('mafplace2021')
        Login.loginClick()
        Ratings.checkPage()
        Header.accountBtnClick()
        Account.checkPage()
        Header.logoutBtnClick()
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
