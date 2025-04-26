const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class MyAccount extends Page{
    get profilePicture(){
        return $("//div[@class='MuiBox-root mui-style-79elbk']");
    }

    get accountName(){
        return $("(//span[@class='MuiBox-root mui-style-cr6osh'][normalize-space()='Akun Tester 1017 Staging'])[2]");
    }

    get memberSinceField(){
        return $("//span[text()='Member Sejak']");
    }

    get genderField(){
        return $("//span[text()='Jenis Kelamin']");
    }

    get genderValue(){
        return $("//h4[text()='Laki-Laki']");
    }

    get emailField(){
        return $("//span[text()='Email']");
    }

    get emailValue(){
        return $("//h4[text()='testerauto1017@mailinator.com']");
    }

    get btnChangeProfile(){
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]/button[1]");
    }

    get btnLogout(){
        return $("//button[text()='Keluar']");
    }

    get btnConfirmLogout(){
        return $("//button[text()='Confirm']");
    }

    get menuMyTransactions(){
        return $("//p[text()='MY TRANSACTIONS']");
    }

    get menuWishlist(){
        return $("//p[text()='WISHLIST']");
    }

    get menuMembership(){
        return $("//p[text()='MEMBERSHIP']");
    }

    get menuMyVouchers(){
        return $("//p[text()='MY VOUCHERS']");
    }

    get menuSavedCards(){
        return $("//p[text()='SAVED CARDS']");
    }

    get menuSavedAddress(){
        return $("//p[text()='SAVED ADDRESS']");
    }

    get menuBeautyProfile(){
        return $("//p[text()='BEAUTY PROFILE']");
    }

    get menuChangeEmail(){
        return $("//p[text()='CHANGE EMAIL']");
    }

    get menuChangePhoneNumber(){
        return $("//p[text()='CHANGE PHONE NUMBER']");
    }


    async clickLogout(){
        await this.btnLogout.click()
    }

    async clickConfirmLogout(){
        await this.btnConfirmLogout.click()
    }

    
    async clickMyTransaction(){
        await this.menuMyTransactions.click();
    }

    async clickMyVouchers(){
        await this.menuMyVouchers.click();
    }

    open () {
        return super.open();
    }

}

module.exports = new MyAccount();