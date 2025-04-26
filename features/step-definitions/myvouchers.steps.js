const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals');


const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const MyAccountPage = require('../pageobjects/myaccount.page');
const TransactionsPage = require('../pageobjects/transaction.page');
const VouchersPage = require('../pageobjects/myvouchers.page'); 




const pages = {
    myVouchers: VouchersPage
}



Then(/^My Vouchers page open$/, async () => {
    await browser.pause(2000);
    await expect(VouchersPage.breadcrumbMyVouchers).toBeDisplayed();
    await expect(VouchersPage.myVocuhersTitle).toBeDisplayed();
});

Then(/^Tab Active and Past Voucher available$/, async () => {
    await browser.pause(2000);
    await expect(VouchersPage.tabActiveVoucher).toBeDisplayed();
    await expect(VouchersPage.tabPastVoucher).toBeDisplayed();
});

Then(/^Active Voucher tab open$/, async () => {
    let tempActiveTab = await VouchersPage.tabActiveVoucher.getAttribute("aria-selected");
    let tempPastTab = await VouchersPage.tabPastVoucher.getAttribute("aria-selected");
    console.log("Isi dari variable Active Tab = "+tempActiveTab);
    console.log("Isi dari variable Past Tab = "+tempPastTab);
    //if tab selected and not selected
    if (tempActiveTab && tempPastTab) {
        console.log("Active Voucher is selected & Past Voucher is not selected");
    } else {
        console.log("Active Voucher is not selected");
    }

    //if voucher is available or not
    let tempVoucherElement = await VouchersPage.voucherElement.isDisplayed();
    console.log("Isi dari tempVoucher = "+tempVoucherElement);
    if (tempVoucherElement != true) {
        await expect(VouchersPage.imgEmptyVoucher).toBeDisplayed();
        await expect(VouchersPage.emptyOrderWording1).toBeDisplayed();
        await expect(VouchersPage.emptyOrderWording2).toBeDisplayed();
        console.log("Active Voucher is empty");
    } else {
        console.log("User has Active Voucher");
    }
});

When(/^User click on Past Voucher and Past Voucher open$/, async () => {
    await VouchersPage.clickTabPastVoucher();
    await browser.pause(2000);
    let tempActiveTab = await VouchersPage.tabActiveVoucher.getAttribute("aria-selected");
    let tempPastTab = await VouchersPage.tabPastVoucher.getAttribute("aria-selected");
    console.log("Isi dari variable Active Tab = "+tempActiveTab);
    console.log("Isi dari variable Past Tab = "+tempPastTab);
    //if tab selected and not selected
    if (tempActiveTab && tempPastTab) {
        console.log("Past Voucher is selected & Active Voucher is not selected");
    } else {
        console.log("Past Voucher is not selected");
    }

    //if voucher is available or not
    let tempVoucherElement = await VouchersPage.voucherElement.isDisplayed();
    console.log("Isi dari tempVoucher = "+tempVoucherElement);
    if (tempVoucherElement != true) {
        await expect(VouchersPage.imgEmptyVoucher).toBeDisplayed();
        await expect(VouchersPage.emptyOrderWording1).toBeDisplayed();
        await expect(VouchersPage.emptyOrderWording2).toBeDisplayed();
        console.log("Past Voucher is empty");
    } else {
        console.log("User has Past Voucher");
    }
});