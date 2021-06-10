import Login from '../classes/pages/login.page';
import Ratings from '../classes/pages/users.page';
import Header from '../classes/elements/header.elem';


describe('Login', () => {

    before(() => {
        Login.openLoginPage()
    })

    it('Successful-login', () => {
        Login.enterToEmailField('test@test.com')
        Login.enterToPasswordField('maftest@123456')
        Login.loginClick()
        Header.checkAccountBtn()
        Header.checkLogoutBtn()
        Ratings.checkPage()
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