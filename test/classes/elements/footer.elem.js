import Base from '../base.class';

class Footer extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            ruLangToggle: 'RU',
            version: 'Version',
            copyright: '© Mafia Club Portal',
            devPrepend: 'Website by',
            devLink:'React Smart Development' 
        }
    }

    //element selectors
    get elem() { return $('#footer') }
    get langToggle() { return $('#RU-lang-toggle') }
    get copyright() { return $('#copyright-text') }
    get versionLabel() { return $('#version-label') }
    get versionNumber() { return $('#version-value') }
    get devPrepend() { return $('#deeveloper-prepend') }
    get devLink() { return $('#developer-link') }

    //methods
    checkElement() {
        this.elem.waitForDisplayed();
    }

    checkLangToggle() {
        expect(this.langToggle).toBeDisplayed()
    }

    checkCopyright() {
        expect(this.copyright).toBeDisplayed()
    }

    checkVersionLabel() {
        expect(this.versionLabel).toBeDisplayed()
    }

    checkVersionNumber() {
        expect(this.versionNumber).toBeDisplayed()
    }

    checkLangToggleValue() {
        expect(this.langToggle).toHaveText(this.exp.ruLangToggle)
    }

    checkVersionValue() {
        expect(this.versionLabel).toHaveText(this.exp.version)
    }

    checkCopyrightValue() {
        expect(this.copyright).toHaveText(this.exp.copyright)
    }

    checkDevprepend() {
        expect(this.devPrepend).toHaveText(this.exp.devPrepend)
    }

    checkDevlink() {
        expect($(this.devLink)).toHaveText(this.exp.devLink)
    }







}

export default new Footer;