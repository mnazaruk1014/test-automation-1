import Login from '../classes/pages/login.page';
import Ratings from '../classes/pages/users.page';
import Header from '../classes/elements/header.elem';
import Account from '../classes/pages/account.page';


describe('Change-Password-in-account-page', () => {

    before(() => {
        Login.openLoginPage()
        Login.enterToEmailField('mafplaceqauser@gmail.com')
        Login.enterToPasswordField('mafplace2021')
        Login.loginClick()
        Ratings.checkPage()
        Header.accountBtnClick()
        Account.checkPage()
    })

    it('Change-password', () => {
       Account.enterToPasswordField('newpass')
       Account.updateBtnClick()
        
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
