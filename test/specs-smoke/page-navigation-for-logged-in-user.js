import Login from '../classes/pages/login.page';
import Ratings from '../classes/pages/users.page';
import Header from '../classes/elements/header.elem';
import Account from '../classes/pages/account.page';


describe('Page-navigation-for logged-in', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Navigation-for-logged-in-user', () => {
        Header.backToLoginBtnClick()
        Login.enterToEmailField('test@test.com')
        Login.enterToPasswordField('maftest@123456')
        Login.loginClick()
        Ratings.checkPage()
        Header.checkAccountBtn()
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
