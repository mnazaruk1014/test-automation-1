import Login from '../classes/pages/login.page';
import Header from '../classes/elements/header.elem';
import Forgot from '../classes/pages/forgot.page';

describe('Login', () => {

    before(() => {
        Login.openLoginPage()
        
    })


    it('Password-reminder', () => {
      Login.remindPassClick()
      Forgot.checkPage()
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