const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class ClpPage extends Page{
    get clpNew() {
        return $("//h1[text()='New']");
    }

    get clpBody() {
        return $("//h1[text()='Body']");
    }

    get clpFace() {
        return $("//h1[text()='FACE']");
    }

    get clpHair() {
        return $("//h1[text()='HAIR']");
    }

    get clpFragrance() {
        return $("//h1[text()='FRAGRANCE']");
    }

    get clpMakeup() {
        return $("//h1[text()='Make-Up']");
    }

    get clpGifts() {
        return $("//h1[text()='Gifts']");
    }

    open () {
        return super.open();
    }

}

module.exports = new ClpPage();