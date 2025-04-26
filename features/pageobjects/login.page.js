const { $ } = require('@wdio/globals')
const Page = require('./page');
//const { Key } = require('keyv');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginForm () {
        return $("//h2[text()='Login / Register']");
    }

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get inputPhoneEmail () {
        return $('#identifier');
    }

    get btnLoginRegister () {
        return $("//button[text()='Login/Register']");
    }

    get inputOtp () {
        return $('#otp');
    }

    get btnVerifyOtp () {
        return $("//button[text()='Verify OTP']");
    }

    get whatsappOption () {
        return $("//input[@value='WA']");
    }

    get btnSendOtpCode() {
        return $("//button[text()='Send OTP Code']");
    }

    get snackbarCekOtp() {
        return $("//div[@id='notistack-snackbar']");
    }

    get userName () {
        // return $('//*[@id="__next"]/div[1]/header/div/div[2]/section[1]/div[3]/a[4]/span/p');
        //return $('//p[text()="Hi, Stellar"]'); // "Hi, " + firstNameBefore
        return $("//a[contains(@href,'/my-account')]/span/p");
    }

    get registerForm() {
        // return $("//h1[text()='Complete your profile']");
        return $("//h1[text()='Complete your profile']/following-sibling::form");
    }

    get loginErrorMessage() {
        return $("//p[@id='identifier-helper-text']");
    }



    async typeEmail(email) {
        await browser.pause(1000);
        await this.inputPhoneEmail.setValue(email);
        await browser.pause(1000);
        await this.btnLoginRegister.click();
        await browser.pause(500);
    }

    async typeOtp(otp) {
        await browser.pause(1000);
        await this.inputOtp.setValue(otp);
        await browser.pause(1000);
        await this.btnVerifyOtp.click();
        await browser.pause(500);
    }

    async clearPhoneNumber() {

//        await browser.keys([Key.Ctrl, 'a']);
//        await browser.keys([Key.Delete]);
//        await browser.keys('Control+a')
//        await browser.keys('Delete')
//        await this.inputPhoneEmail.clearValue();
//        await this.btnLoginRegister.click();
        const selectorValue = this.inputPhoneEmail.getValue();
        const backSpaces = new Array(selectorValue.length).fill('Backspace');
//        await this.inputPhoneEmail.setValue(backSpaces);
        await this.inputPhoneEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputPhoneEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputPhoneEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputPhoneEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputPhoneEmail.doubleClick();
        await browser.keys(['Backspace']);
//        await browser.keys(['Ctrl', 'x'])
    }

    async typePhoneNumber(phoneNumber) {
//        await this.inputPhoneEmail.clearValue();
//        const selectorValue = this.inputPhoneEmail.getValue();
//        const backSpaces = new Array(selectorValue.length).fill('Backspace');
//        await this.inputPhoneEmail.setValue(backSpaces);
        await this.inputPhoneEmail.setValue(phoneNumber);
        await browser.pause(500);
        await this.btnLoginRegister.click();
    }

    async selectWhatsapp () {
        await this.whatsappOption.click();
    }

    async clickSendOtpCode () {
        await this.btnSendOtpCode.click();
    }

    async clickProfile () {
        await this.userName.click();
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
