const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const ClpPage = require('../pageobjects/clp.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');

const pages = {
    clp: ClpPage
}

When(/^User click menu NEW$/, async () => {
    await HomePage.clickNew();
});

Then(/^CLP NEW should available$/, async () => {
    await expect(ClpPage.clpNew).toBeDisplayed();
});

When(/^User click menu BODY$/, async () => {
    await HomePage.clickBody();
});

Then(/^CLP BODY should available$/, async () => {
    await expect(ClpPage.clpBody).toBeDisplayed();
});

When(/^User click menu FACE$/, async () => {
    await HomePage.clickFace();
});

Then(/^CLP FACE should available$/, async () => {
    await expect(ClpPage.clpFace).toBeDisplayed();
});

When(/^User click menu HAIR$/, async () => {
    await HomePage.clickHair();
});

Then(/^CLP HAIR should available$/, async () => {
    await expect(ClpPage.clpHair).toBeDisplayed();
});

When(/^User click menu FRAGRANCE$/, async () => {
    await HomePage.clickFragrance();
});

Then(/^CLP FRAGRANCE should available$/, async () => {
    await expect(ClpPage.clpFragrance).toBeDisplayed();
});

When(/^User click menu MAKEUP$/, async () => {
    await HomePage.clickMakeup();
});

Then(/^CLP MAKEUP should available$/, async () => {
    await expect(ClpPage.clpMakeup).toBeDisplayed();
});

When(/^User click menu GIFTS$/, async () => {
    await HomePage.clickGifts();
});

Then(/^CLP GIFTS should available$/, async () => {
    await expect(ClpPage.clpGifts).toBeDisplayed();
});