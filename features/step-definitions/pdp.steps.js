const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const PdpPage = require('../pageobjects/pdp.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const pdpPage = require('../pageobjects/pdp.page');
const cartPage = require('../pageobjects/cart.page');
const pages = {
    pdp: PdpPage
}

When(/^User click wishlist$/, async() => {
    await PdpPage.pdpIconWishlist.scrollIntoView();
    await PdpPage.clickPdpIconWishlist();
    await expect(pdpPage.pdppopupwhislist).toBeDisplayed();
})

When(/^User click add to bag$/, async() => {
    // await browser.pause(1000);
    // await PdpPage.pdpAddToBag.scrollIntoView();
    // await PdpPage.clickPdpAddToBag();
    // await expect(pdpPage.pdppopupaddtobag).toBeDisplayed();
    await browser.pause(1000);
    if(await PdpPage.pdpAddToBag.isExisting()){
        await PdpPage.clickPdpAddToBag();
    } else {
        console.log("Produk sudah habis. Tidak dapat menambahkan ke keranjang.");
    }
});

When(/^User click variant PDP$/, async() => {
await expect(pdpPage.pdpvariant).toBeDisplayed();
await PdpPage.clickPdpvariant();
});

When(/^User click button plus PDP$/, async() => {
    await cartPage.clickPlus();
    await browser.pause(3000);
    await expect(cartPage.inputQty2).toBeDisplayed();
    await browser.pause(3000);

});

When(/^User click button min PDP$/, async() => {
    await cartPage.clickMin();
    await expect(cartPage.inputQty1).toBeDisplayed();
    // await expect(pdpPage.clickMin).toBeDisplayed();
});


//
When(/^User verify footer PDP$/, async() => {
    await expect(pdpPage.footernamesku).toBeDisplayed();
    await expect(pdpPage.footerprice).toHaveText("Rp 249.000");
    await expect(pdpPage.footerPlus).toBeDisplayed();
    await expect(pdpPage.footerMin).toBeDisplayed();
    // await cartPage.clickMin();  
    // await expect(cartPage.inputQty1).toBeDisplayed();

});

//sdc ----------------------------------------------------------------
Then(/^Catalog rule price in PDP should available$/, async() => {
    await expect(pdpPage.pdpCatalogPrice).toBeDisplayed();
})

Then(/^Original price in PDP should available$/, async() => {
    await expect(pdpPage.pdpOriginalPrice).toBeDisplayed();
})

Then(/^Catalog rule percentage in PDP should available$/, async() => {
    await expect(pdpPage.pdpCatalogPercentage).toBeDisplayed();
})

Then(/^Catalog rule name in PDP should available$/, async() => {
    await expect(pdpPage.pdpCatalogTag).toBeDisplayed();
})

Then(/^Catalog rule price in footer PDP should available$/, async() => {
    await expect(pdpPage.pdpFooterCatalogPrice).toBeDisplayed();
})

Then(/^Original price in footer PDP should available$/, async() => {
    await expect(pdpPage.pdpFooterOriginalPrice).toBeDisplayed();
})
//-----------------------------------------------------------------sdc