const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')


const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');
const cartPage = require('../pageobjects/cart.page');
const pdpPage = require('../pageobjects/pdp.page');

const pages = {

    Search: SearchPage
}

        When(/^User Click search field$/, async () => {
            await browser.pause(5000);
            await SearchPage.clickSearch()
});

        When(/^Txt search available$/, async () => {
            await expect(SearchPage.txtSearch).toBeDisplayed();
});

        When(/^User type search by name (.+)$/, async (namesku1) => {
            await SearchPage.typeskuname(namesku1)
});


    When(/^User click icon search$/, async () => {

            await SearchPage.icnSearch('.search-results');
});


         Then(/^Result search available$/, async () => {
                await expect(SearchPage.ResultSearch).toBeDisplayed();
});

         Then(/^User click 1 product search$/, async () => {
                await browser.pause(5000);
                await SearchPage.clickresultSearch();
                await expect(SearchPage.skuinpdp).toBeDisplayed();
                
});
    Then(/^User close browser$/, async () => {
          await browser.close;

});

//Scenario2 by sku

          When(/^User type search by sku (.+)$/, async (sku) => {
                await SearchPage.clearSearch();
                await SearchPage.typesku(sku);
});


        Then(/^Result search by sku available$/, async () => {
                await expect(SearchPage.ResultSearchSKU).toHaveText("Blue Musk Fragrance Mist 100ml");
});

        Then(/^User click 1 product search by SKU$/, async () => {
                await browser.pause(3000);
                await SearchPage.ClickSKU();
});

Then(/^Make sure the results match in PDP$/, async () => {
    await browser.pause(3000);
    await expect(SearchPage.titlePDP).toBeDisplayed();
    await expect(SearchPage.verifysku).toHaveText("SKU #126490021");
    await expect(SearchPage.img1PDP).toExist();
    // await expect(SearchPage.img1PDP).toBeDisplayed();   
    await expect(pdpPage.pdpProductBreadcrumbs).toBeDisplayed();

    await expect(SearchPage.summarydescriptionPDP).toBeDisplayed();
    await expect(SearchPage.pricePDP).toHaveText("Rp 249.000");
if (await expect(cartPage.inputQty1).toBeDisplayed()){
    console.log("Element pdpinputQty1 is displayed on the page.");
} else {
    console.log("Product Sold Out");
}
if  (await expect(cartPage.buttonMin).toBeDisplayed()){
    console.log("Element pdpbuttonMin is displayed on the page.");
} else {
    console.log("Product Sold Out");
}
    if (await expect(cartPage.buttonPlus).toBeDisplayed()){
        console.log("Element pdpbuttonPlus is displayed on the page.");
    } else {
        console.log("Product Sold Out");
    }
    await browser.pause(3000);
    // await pdpPage.pdpIconWishlist.scrollIntoView();
    // await expect(pdpPage.pdpIconWishlist).toBeDisplayed(); 
    await expect(pdpPage.pdpIconWishlist).toExist()
    if (await expect(pdpPage.pdpAddToBag).toBeDisplayed()){
        console.log("Element pdpAddToBag is displayed on the page.");
    } else {
        console.log("Product Sold Out");
    }

    await expect(pdpPage.pdpTxtSummary).toBeDisplayed();
    if (await expect(pdpPage.pdpTxtDescription).toBeDisplayed()){
        console.log("Element pdpTxtDescription is displayed on the page.");
    } else {
        console.log("Element pdpTxtDescription is not displayed on the page.");
            }  
    if (await expect(pdpPage.pdpIsiDescription).toBeDisplayed()){
        console.log("Element pdpIsiDescription is displayed on the page.");
    } else {
        console.log("Element pdpIsiDescription is not displayed on the page.");
            }         
    if  (await pdpPage.pdpTxtWhatsInside.isDisplayed()){
        console.log("Element pdpTxtWhatsInside is displayed on the page.");
    } else {
        console.log("Element pdpTxtWhatsInside is not displayed on the page.");
            }
    if  (await pdpPage.pdpIsiWhatsInside.isDisplayed()){
        console.log("Element pdpIsiWhatsInside is displayed on the page.");
    } else {
        console.log("Element pdpIsiWhatsInside is not displayed on the page.");
            }        
    if  (await pdpPage.pdpTxtProductTips.isDisplayed()){
        console.log("Element pdpTxtProductTips is displayed on the page.");
    } else {
        console.log("Element pdpTxtProductTips is not displayed on the page.");
            }  
    if  (await pdpPage.pdpIsiProductTips.isDisplayed()){
        console.log("Element pdpIsiProductTips is displayed on the page.");
    } else {
        console.log("Element pdpIsiProductTips is not displayed on the page.");
            }  

    await expect(pdpPage.recomendedforyou).toBeDisplayed();
    const dynamicValue = 'Full Orange Blossom Edp 75ml';
    const elementByName = await $(`//span[normalize-space()='${dynamicValue}']`);
    await elementByName.waitForDisplayed();
    const nameSkuElements = await $$("//span[contains(@class, '')]");
    const skus = [];
    for (const element of nameSkuElements) {
        const sku = await element.getText();
        skus.push(sku);
    }
    // Mencari indeks elemen yang memiliki teks 'Full Orange Blossom Edp 75ml'
    const startIndex = skus.findIndex(sku => sku === dynamicValue);
    if (startIndex !== -1) { // Memastikan indeks ditemukan
    // Mengambil 5 SKU setelah elemen dengan teks 'Full Orange Blossom Edp 75ml'
    let top5SKUs = skus.slice(startIndex + 0); // Memotong array mulai dari indeks berikutnya
    top5SKUs = top5SKUs.filter(sku => sku !== ''); // Menghapus SKU yang kosong
    if (top5SKUs.length > 5) { // Jika lebih dari 5 SKU tersedia, ambil 5 SKU pertama saja
            top5SKUs = top5SKUs.slice(0, 5);
        }
        console.log('Top 5 SKUs Recomended For You:', top5SKUs);
    } else {
        console.log('Elemen dengan teks yang diberikan tidak ditemukan.');
    }
});
//User click How to Use
    When(/^User click How to Use$/, async () => {
    await expect(pdpPage.pdpTxtHowToUse).toBeDisplayed();
    await browser.pause(3000);
    const elementToClickHowToUse = await $('//button[normalize-space()="How To Use"]');
    // Lakukan aksi untuk mengklik elemen
    await browser.execute((elementToClickHowToUse) => {
        elementToClickHowToUse.click();
    }, elementToClickHowToUse);
    await expect(pdpPage.pdpIsiHowToUse).toBeDisplayed();
});

    When(/^User click Reviews$/, async () => {
    await expect(pdpPage.pdpTxtReviews).toBeDisplayed();
    const elementToClickReviews = await $('//button[normalize-space()="Reviews"]');
    // Lakukan aksi untuk mengklik elemen
    await browser.execute((elementToClickReviews) => {
        elementToClickReviews.click();
    }, elementToClickReviews);
    // Tunggu hingga elemen review muncul
    const reviewElement = await browser.$('//h3[contains(normalize-space(), "Review")]');
    // Ambil teks dari elemen review
    const reviewText = await reviewElement.getText();
    // Ambil jumlah review dari teks menggunakan ekspresi reguler
    const match = reviewText.match(/\d+/);
    let reviewCount;
    if (match) {
        reviewCount = match[0];
    } else {
        reviewCount = 'Tidak ada ulasan'; // Jika tidak ada nomor review yang ditemukan
    }
    // Tulis jumlah review dalam log
    console.log('Jumlah review ada:', reviewCount);
    // Verifikasi bahwa elemen review ada
    await expect(reviewElement).toBeDisplayed();

   
});

/// Scenario 3 search by invalid SKU
            When(/^User type search by invalid sku (.+)$/, async (namesku3) => {
            await SearchPage.clearSearch();
            await SearchPage.typeinvalidsku(namesku3)
});

            Then(/^Result search by invalid sku available$/, async () => {
            await expect(SearchPage.ResultSearchInvalidSKU).toHaveText("0 Products");
});


//Result search by invalid sku available
/// User type search by invalid sku <namesku3>
// // Tutup browser saat selesai
//  await browser.close();