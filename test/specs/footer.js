import Footer from '../classes/elements/footer.elem';

describe('Elements-displayed', () => {

    before(() => {
        Footer.openLoginPage()
    })

    it('Footer', () => {
        Footer.checkElement()
    })


    it('Language-toggle', () => {
        Footer.checkLangToggle()
    })

    it('Copyright', () => {
        Footer.checkCopyright()
    })

    it('Version-label', () => {
        Footer.checkVersionLabel()
    })

    it('Version-number', () => {
        Footer.checkVersionNumber()
    })



})

describe('Elements-values', () => {

    it('Language-toggle', () => {
        Footer.checkLangToggleValue()

    })


    it('Version-label', () => {
        Footer.checkVersionValue()

    })

    it('Copyright text', () => {
        Footer.checkCopyrightValue()

    })


    it('Website-prepend', () => {
       Footer.checkDevprepend()

    })

    it('Website-link', () => {
        Footer. checkDevlink()

    })

    



})




