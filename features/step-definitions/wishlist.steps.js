const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const CartPage = require('../pageobjects/cart.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const PlpPage = require('../pageobjects/plp.page');
const WishlistPage = require('../pageobjects/wishlist.page');

const pages = {
    cart: CartPage
}

When(/^User click icon wishlist in wishlist page$/, async () => {
    await WishlistPage.clickWishlistIcon();
    await browser.pause(2000);
});

Then(/^Remove from wishlist successful with message (.+)$/, async(string) => {
    await expect(WishlistPage.snackbarWishlist).toHaveText(string);
    await browser.pause(2000);
})