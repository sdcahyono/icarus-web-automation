const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const MembershipPage = require('../pageobjects/membership.page');


const pages = {
    membership: MembershipPage
}

When(/^User click Membership menu$/, async () => {
    await MembershipPage.clickMembership();
});

Then(/^Love Your Body Club page should available$/, async() => {
    await expect(MembershipPage.titleLYBC).toBeDisplayed();
})

Then(/^Membership page should available$/, async() => {
    await expect(MembershipPage.breadcrumbMembership).toBeDisplayed();
})

Then(/^Title Membership Benefits should available$/, async() => {
    await expect(MembershipPage.titleMembership).toBeDisplayed();
})

Then(/^Member card image should available$/, async() => {
    await expect(MembershipPage.imgMemberCard).toBeDisplayed();
})

Then(/^My QR Code button should available$/, async() => {
    await expect(MembershipPage.btnMyQRCode).toBeDisplayed();
})

Then(/^Member tier and card number should available$/, async() => {
    await expect(MembershipPage.lblTierCardnumber).toBeDisplayed();
//    await expect(MembershipPage.lblTierCardnumber).toContain("FAN");
})

Then(/^Name should available$/, async() => {
    await expect(MembershipPage.membershipAccountName).toBeDisplayed();
})

Then(/^Point information should available$/, async() => {
    await expect(MembershipPage.pointInformation).toBeDisplayed();
    let pointExpired = await MembershipPage.btnPointExpiration.isDisplayed();
    console.log("Ada poin expired? "+pointExpired);
    if(pointExpired==true){
        await expect(MembershipPage.pointExpirationInfo).toBeDisplayed();
    } else {
        await expect(MembershipPage.pointExpirationInfo).not.toBeDisplayed();
    }
})

Then(/^Progress tier should available$/, async() => {
    await expect(MembershipPage.starter).toBeDisplayed();
    await expect(MembershipPage.club).toBeDisplayed();
    await expect(MembershipPage.fan).toBeDisplayed();
})

When(/^User click starter$/, async() => {
    await MembershipPage.clickStarter();
})

Then(/^Starter Member Benefit should available$/, async() => {
    await expect(MembershipPage.lblBenefitStarter).toBeDisplayed();
    await expect(MembershipPage.benefitShopToEnjoy).toBeDisplayed();
    await expect(MembershipPage.benefitBirthdayTreats).toBeDisplayed();
    await expect(MembershipPage.benefitTrackPurchase).toBeDisplayed();
    await expect(MembershipPage.benefitShopMore).toBeDisplayed();
})

When(/^User click club$/, async() => {
    await MembershipPage.clickClub();
})

Then(/^Club Member Benefit should available$/, async() => {
    await expect(MembershipPage.lblBenefitClub).toBeDisplayed();
    await expect(MembershipPage.benefitEarnPoint).toBeDisplayed();
    await expect(MembershipPage.benefitShoppingVoucher).toBeDisplayed();
    await expect(MembershipPage.benefitBirthdayTreats).toBeDisplayed();
    await expect(MembershipPage.benefitPointPlusPay).toBeDisplayed();
    await expect(MembershipPage.benefitRedemptionCatalogue).toBeDisplayed();
    await expect(MembershipPage.benefitBBOB).toBeDisplayed();
    await expect(MembershipPage.benefitFreeMakeOver).toBeDisplayed();
})

When(/^User click fan$/, async() => {
    await MembershipPage.clickFan();
})

Then(/^Fan Member Benefit should available$/, async() => {
    await expect(MembershipPage.lblBenefitFan).toBeDisplayed();
    await expect(MembershipPage.benefitEarnPoint).toBeDisplayed();
    await expect(MembershipPage.benefitShoppingVoucher).toBeDisplayed();
    await expect(MembershipPage.benefitBirthdayTreats).toBeDisplayed();
    await expect(MembershipPage.benefitPointPlusPay).toBeDisplayed();
    await expect(MembershipPage.benefitRedemptionCatalogue).toBeDisplayed();
    await expect(MembershipPage.benefitBBOB).toBeDisplayed();
    await expect(MembershipPage.benefitFreeMakeOver).toBeDisplayed();
    await expect(MembershipPage.benefitSpecialEvent).toBeDisplayed();
})

Then(/^BBOB section should available$/, async() => {
    await expect(MembershipPage.sectionBBOB).toBeDisplayed();
})

Then(/^Donation section should available$/, async() => {
    await expect(MembershipPage.sectionDonation).toBeDisplayed();
})

Then(/^FAQ link should available$/, async() => {
    await expect(MembershipPage.linkFAQ).toBeDisplayed();
})

Then(/^Terms and conditions link should available$/, async() => {
    await expect(MembershipPage.linkTermCondition).toBeDisplayed();
})

Then(/^How to redeem points link should available$/, async() => {
    await expect(MembershipPage.linkHowToRedeem).toBeDisplayed();
})

When(/^User click my QR code button$/, async() => {
    await MembershipPage.clickMyQRCode();
})

Then(/^My QR Code page should open$/, async() => {
    await expect(MembershipPage.titleMyQRCode).toBeDisplayed();
})

Then(/^QR code should available$/, async() => {
    await expect(MembershipPage.qrCode).toBeDisplayed();
})

When(/^Back$/, async() => {
    await browser.back();
})

When(/^User click card number$/, async() => {
    await MembershipPage.clickTierCardnumber();
})

Then(/^QR code title should available$/, async() => {
    await expect(MembershipPage.titleMyQRCode).toBeDisplayed();
})

Then(/^Description should available$/, async() => {
    await expect(MembershipPage.descMyQRCode).toBeDisplayed();
})

Then(/^Expiration timer should available$/, async() => {
    await expect(MembershipPage.textExpirationTimer).toBeDisplayed();
    await expect(MembershipPage.expirationTimer).toBeDisplayed();
})

Then(/^Card number should available$/, async() => {
    await expect(MembershipPage.cardnumber).toBeDisplayed();
})

Then(/^Button generate qr code should available$/, async() => {
    await expect(MembershipPage.btnGenerateQR).toBeDisplayed();
})

When(/^User click button Regenerate QR Code$/, async() => {
    await MembershipPage.clickGenerateQR();
})

Then(/^Button changed to regenerate again$/, async() => {
    await expect(MembershipPage.regenerateAgain).toBeDisplayed();
    await browser.pause(2000);
})

When(/^User click Points$/, async() => {
    await MembershipPage.clickpointInformation();
})

Then(/^Point History page should open$/, async() => {
    await expect(MembershipPage.breadcrumbPointHistory).toBeDisplayed();
    await expect(MembershipPage.titlePointHistory).toBeDisplayed();
})

When(/^User click FAQ$/, async() => {
    await MembershipPage.clickFAQ();
})

Then(/^FAQ page should open$/, async() => {
    await expect(MembershipPage.breadcrumbFaq).toBeDisplayed();
})

When(/^User click Terms and Conditions page$/, async() => {
    await MembershipPage.clickTermCondition();
})

Then(/^Terms and Conditions page should open$/, async() => {
    await expect(MembershipPage.breadcrumbTermCondition).toBeDisplayed();
})

When(/^User click How to Redeem Points$/, async() => {
    await MembershipPage.clickHowToRedeem();
})

Then(/^How to Redeem Points page should open$/, async() => {
    await expect(MembershipPage.titleHowToRedeemPoint).toBeDisplayed();
    await browser.pause(2000);
})

Then(/^Title Point Activities should available$/, async() => {
    await expect(MembershipPage.titlePointActivities).toBeDisplayed();
})

Then(/^Tab Activities should available$/, async() => {
    await expect(MembershipPage.tabActivities).toBeDisplayed();
})

Then(/^Tab Will Expired should available$/, async() => {
    await expect(MembershipPage.tabWillExipred).toBeDisplayed();
})