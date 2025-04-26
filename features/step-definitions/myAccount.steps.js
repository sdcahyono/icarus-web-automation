const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const MyAccountPage = require('../pageobjects/myaccount.page');


const pages = {
    myAccount: MyAccountPage
}

When(/^User click logout$/, async () => {
    await MyAccountPage.clickLogout()
});

When(/^User click confirm$/, async () => {
    await MyAccountPage.clickConfirmLogout()
});

Then(/^Profile picture should available$/, async () => {
    await expect(MyAccountPage.profilePicture).toBeDisplayed();
});

Then(/^Account name should available$/, async () => {
    await expect(MyAccountPage.accountName).toBeDisplayed();
});

Then(/^Member Sejak field should available$/, async () => {
    await expect(MyAccountPage.memberSinceField).toBeDisplayed();
});

Then(/^Jenis Kelamin field should available$/, async () => {
    await expect(MyAccountPage.genderField).toBeDisplayed();
});

Then(/^Jenis Kelamin value should available$/, async () => {
    await expect(MyAccountPage.genderValue).toBeDisplayed();
});

Then(/^Email field should available$/, async () => {
    await expect(MyAccountPage.emailField).toBeDisplayed();
});

Then(/^Email value should available$/, async () => {
    await expect(MyAccountPage.emailValue).toBeDisplayed();
});

Then(/^Button change profile should available$/, async () => {
    await expect(MyAccountPage.btnChangeProfile).toBeDisplayed();
});

Then(/^Button Keluar should available$/, async () => {
    await expect(MyAccountPage.btnLogout).toBeDisplayed();
});

Then(/^Menu My Transactions should available$/, async () => {
    await expect(MyAccountPage.menuMyTransactions).toBeDisplayed();
});

Then(/^Menu Wishlist should available$/, async () => {
    await expect(MyAccountPage.menuWishlist).toBeDisplayed();
});

Then(/^Menu Membership should available$/, async () => {
    await expect(MyAccountPage.menuMembership).toBeDisplayed();
});

Then(/^Menu My Vouchers should available$/, async () => {
    await expect(MyAccountPage.menuMyVouchers).toBeDisplayed();
});

Then(/^Menu Saved Cards should available$/, async () => {
    await expect(MyAccountPage.menuSavedCards).toBeDisplayed();
});

Then(/^Menu Saved Address should available$/, async () => {
    await expect(MyAccountPage.menuSavedAddress).toBeDisplayed();
});

Then(/^Menu Beauty Profile should available$/, async () => {
    await expect(MyAccountPage.menuBeautyProfile).toBeDisplayed();
});

Then(/^Menu Change Email should available$/, async () => {
    await expect(MyAccountPage.menuChangeEmail).toBeDisplayed();
});

Then(/^Menu Change Phone Number should available$/, async () => {
    await expect(MyAccountPage.menuChangePhoneNumber).toBeDisplayed();
})

When(/^User click My Transaction$/, async () => {
    await MyAccountPage.clickMyTransaction();
});

When(/^User click My Vouchers$/, async () => {
    await MyAccountPage.clickMyVouchers();
});
