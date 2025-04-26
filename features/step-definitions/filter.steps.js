const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals');
const assert = require('assert');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');
const FilterPage = require('../pageobjects/filter.page');

const pages = {
    filter: FilterPage
}

let page;
let hargas; // Menyimpan harga untuk diakses di seluruh skenario
let skus;

     Then(/^Txt filter A-Z available$/, async () => {
        await expect(FilterPage.txtfilter).toBeDisplayed()
        await expect(FilterPage.txtfilter).toHaveText("Name: A - Z");
});

      When(/^User click cmb filter$/, async () => {
        await FilterPage.clickcmb()
});

     When(/^User filter desc Z-A$/, async () => {
        await FilterPage.clickfilterbynamedesc();
});

     Then(/^Verify filter name by desc Z-A available$/, async () => {
        await browser.pause(3000);
        await expect(FilterPage.firstskudesc).toBeDisplayed();
        await expect(FilterPage.descbyname).toHaveText("Name: Z - A");
        //await expect(FilterPage.descbyname).toBeDisplayed();
});

When(/^User retrieves SKU in name ascending order by web$/, async () => {
    // const dynamicValue = 'All Day Long Setting Spray 100ml';
    const elementByName = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[2]/h5/span");
    await elementByName.waitForDisplayed();
   
    const dynamicValue = await elementByName.getText();
    const nameSkuElements = await $$("//span[contains(@class, '')]");
    const skus = [];
    for (const element of nameSkuElements) {
        const sku = await element.getText();
        skus.push(sku);
    }
    // Mencari indeks elemen yang memiliki teks 'Full Orange Blossom Edp 75ml'
    const startIndex = skus.findIndex(sku => sku === dynamicValue);
    if (startIndex !== -1) { // Memastikan indeks ditemukan
   
    top5SKUsWeb = skus.slice(startIndex + 0); // Memotong array mulai dari indeks berikutnya
    top5SKUsWeb = top5SKUsWeb.filter(sku => sku !== ''); // Menghapus SKU yang kosong
    if (top5SKUsWeb.length > 5) { // Jika lebih dari 5 SKU tersedia, ambil 5 SKU pertama saja
            top5SKUsWeb = top5SKUsWeb.slice(0, 5);
        }
        console.log('Top 5 SKUs A-Z by web:', top5SKUsWeb);
    } else {
        console.log('Elemen dengan teks yang diberikan tidak ditemukan.');
    }
});

When(/^User retrieves SKU in name ascending order by me$/, async () => {
    // const dynamicValue = 'All Day Long Setting Spray 100ml';
    const elementByname = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[2]/h5/span");
    await elementByname.waitForDisplayed();

    const dynamicValue = await elementByname.getText();
    const nameskuElements = await $$("//span[contains(@class, '')]");
skus = [];
    for (const element of nameskuElements) {
        const sku = await element.getText();
        skus.push(sku);
    }

    skus.sort((a, b) => a.localeCompare(b)); // Mengurutkan SKU secara ascending
const startIndex = skus.findIndex(sku => sku === dynamicValue);
if (startIndex !== -1) { // Memastikan indeks ditemukan
    // Mengambil 5 SKU setelah elemen dengan teks 'Full Orange Blossom Edp 75ml'
    top5SKUsMe = skus.slice(startIndex + 0); // Memotong array mulai dari indeks berikutnya
    top5SKUsMe = top5SKUsMe.filter(sku => sku !== ''); // Menghapus SKU yang kosong
    if (top5SKUsMe.length > 5) { // Jika lebih dari 5 SKU tersedia, ambil 5 SKU pertama saja
            top5SKUsMe = top5SKUsMe.slice(0, 5);
        }
        console.log('Top 5 SKUs A-Z by Me:', top5SKUsMe);
    } else {
        console.log('Elemen dengan teks yang diberikan tidak ditemukan.');
    }
});


Then('User verifies the order from by name asc', async () => {
  // Log yang disimpan sebelumnya
const top5SKUsWebbyasc = top5SKUsWeb;// Ganti dengan nilai dari log 'Top 5 SKUs A-Z by web'
  const top5SKUsMebyasc = top5SKUsMe; // Ganti dengan nilai dari log 'Top 5 SKUs A-Z by Me'
  // Fungsi untuk membandingkan dua array SKU
function compareSKUs(skuArray1, skuArray2) {
    if (skuArray1.length !== skuArray2.length) {
        return false; // Jika panjangnya berbeda, langsung kembalikan false
    }

    for (let i = 0; i < skuArray1.length; i++) {
        if (skuArray1[i] !== skuArray2[i]) {
            return false; // Jika ada perbedaan di antara SKU, kembalikan false
        }
    }

    return true; // Jika tidak ada perbedaan, kembalikan true
}
// Log SKU by web
console.log("SKU by Web:", top5SKUsWeb);

// Log SKU by me
console.log("SKU by Me:", top5SKUsMe);

// Verifikasi urutan SKU antara by web dan by me
const isOrderCorrect = compareSKUs(top5SKUsWebbyasc, top5SKUsMebyasc);

// Output hasil verifikasi
if (isOrderCorrect) {
    console.log("Urutan SKU dari by web dan by me sudah sesuai.");
} else {
    console.log("Urutan SKU dari by web dan by me tidak sesuai.");
}
});

When(/^User retrieves SKU in name descending order by web$/, async () => {
    // const dynamicValue = 'All Day Long Setting Spray 100ml';
    const elementByName = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[2]/h5/span");
    await elementByName.waitForDisplayed();

    const dynamicValue = await elementByName.getText();
    const nameSkuElements = await $$("//span[contains(@class, '')]");
    const skus = [];
    for (const element of nameSkuElements) {
        const sku = await element.getText();
        skus.push(sku);
    }
    // Mencari indeks elemen yang memiliki teks
    const startIndex = skus.findIndex(sku => sku === dynamicValue);
    if (startIndex !== -1) { // Memastikan indeks ditemukan

    top5SKUsWeb = skus.slice(startIndex + 0); // Memotong array mulai dari indeks berikutnya
    top5SKUsWeb = top5SKUsWeb.filter(sku => sku !== ''); // Menghapus SKU yang kosong
    if (top5SKUsWeb.length > 5) { // Jika lebih dari 5 SKU tersedia, ambil 5 SKU pertama saja
            top5SKUsWeb = top5SKUsWeb.slice(0, 5);
        }
        console.log('Top 5 SKUs A-Z by web:', top5SKUsWeb);
    } else {
        console.log('Elemen dengan teks yang diberikan tidak ditemukan.');
     }
});

When(/^User retrieves SKU in name descending order by me$/, async () => {

    // const dynamicValue = 'Second Skin Tint Tan 1w 30ml';
    // const elementbyname = await $("//span[normalize-space()='Second Skin Tint Tan 1w 30ml']");
    const elementbynameDesc = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[2]/h5/span");
    await elementbynameDesc.waitForDisplayed();

    const dynamicValue = await elementbynameDesc.getText();
    const nameskuElements = await $$("//span[contains(@class, '')]");
 skus = [];
    for (const element of nameskuElements) {
        const sku = await element.getText();
        skus.push(sku);
    }

    skus.sort((a, b) => b.localeCompare(a)); // Mengurutkan SKU secara descending

    top5SKUsMeAsc = skus.slice(0, 5);
    console.log('Top 5 SKUs Z-A by Me:', top5SKUsMeAsc);
});

Then('User verifies the order from by name desc', async () => {
 // Log yang disimpan sebelumnya
    const top5SKUsWebbydesc = top5SKUsWeb;// Ganti dengan nilai dari log 'Top 5 SKUs A-Z by web'
    const top5SKUsMebydesc = top5SKUsMeAsc; // Ganti dengan nilai dari log 'Top 5 SKUs A-Z by Me'
 // Fungsi untuk membandingkan dua array SKU
function compareSKUs(skuArray1, skuArray2) {
    if (skuArray1.length !== skuArray2.length) {
       return false; // Jika panjangnya berbeda, langsung kembalikan false
    }

    for (let i = 0; i < skuArray1.length; i++) {
    if (skuArray1[i] !== skuArray2[i]) {
           return false; // Jika ada perbedaan di antara SKU, kembalikan false
    }
}

   return true; // Jika tidak ada perbedaan, kembalikan true
}
// Log SKU by web
console.log("SKU by Web:", top5SKUsWeb);

// Log SKU by me
console.log("SKU by Me:", top5SKUsMeAsc);

// Verifikasi urutan SKU antara by web dan by me
const isOrderCorrect = compareSKUs(top5SKUsWebbydesc, top5SKUsMebydesc);

// Output hasil verifikasi
if (isOrderCorrect) {
console.log("Urutan SKU dari by web dan by me sudah sesuai.");
} else {
console.log("Urutan SKU dari by web dan by me tidak sesuai.");
}
});

When(/^User filter asc  Low-High$/, async () => {
        await FilterPage.clickfilterbypriceasc()

});

   Then(/^Verify filter price by asc Low-High available$/, async () => {
        await expect(FilterPage.firstskuascbyprice).toBeDisplayed();
       await expect(FilterPage.descbyname).toHaveText("Price: Lowest - Highest");

});

When(/^User retrieves SKU in price ascending order by web$/, async () => {
    // const elementprice = await $("//a[contains(@href,'/moringa-shower-gel-60ml-218')]/following-sibling::div/h3");
    const elementprice = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/following-sibling::div/h3");
    await elementprice.waitForDisplayed();
    const hargaElements = await $$("//h3[contains(text(), 'Rp')]");

    hargas = [];
    for (const element of hargaElements) {
        const text = await element.getText();
        const harga = parseInt(text.replace('Rp', '').replace(/\./g, '').trim());
        hargas.push(harga);
    }

    top5SKUsWeb = hargas.slice(0, 5);
    // console.log('Top 5 SKUs Price Asc By Web:', top5SKUsWeb);
});

When(/^User retrieves SKU in price ascending order by me$/, async () => {
    // const elementprice = await $("//a[contains(@href,'/moringa-shower-gel-60ml-218')]/following-sibling::div/h3");
    const elementprice = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/following-sibling::div/h3");
    await elementprice.waitForDisplayed();
    await elementprice.waitForDisplayed();
    const hargaElements = await $$("//h3[contains(text(), 'Rp')]");

    hargas = [];
    for (const element of hargaElements) {
        const text = await element.getText();
        const harga = parseInt(text.replace('Rp', '').replace(/\./g, '').trim());
        hargas.push(harga);
    }

    hargas.sort((a, b) => a - b);

    top5SKUsMe = hargas.slice(0, 5);
    // console.log('Top 5 SKUs Price Asc by Me:', top5SKUsMe);
});

Then('User verifies the order from low to high', async () => {
// Log yang disimpan sebelumnya
const top5SKUbyWebpriceasc = top5SKUsWeb;// Ganti dengan nilai dari log 'Top 5 SKUs A-Z by web'
const top5SKUsbyMepriceAsc = top5SKUsMe; // Ganti dengan nilai dari log 'Top 5 SKUs A-Z by Me'
// Fungsi untuk membandingkan dua array SKU
function compareSKUs(skuArray1, skuArray2) {
if (skuArray1.length !== skuArray2.length) {
   return false; // Jika panjangnya berbeda, langsung kembalikan false
}

for (let i = 0; i < skuArray1.length; i++) {
if (skuArray1[i] !== skuArray2[i]) {
       return false; // Jika ada perbedaan di antara SKU, kembalikan false
}
}

return true; // Jika tidak ada perbedaan, kembalikan true
}
// Log SKU by web
console.log("SKU by Web:", top5SKUbyWebpriceasc);

// Log SKU by me
console.log("SKU by Me:", top5SKUsbyMepriceAsc);

// Verifikasi urutan SKU antara by web dan by me
const isOrderCorrect = compareSKUs(top5SKUbyWebpriceasc, top5SKUsbyMepriceAsc);

// Output hasil verifikasi
if (isOrderCorrect) {
console.log("Urutan SKU dari by web dan by me sudah sesuai.");
} else {
console.log("Urutan SKU dari by web dan by me tidak sesuai.");
}
});

//scenario 3 high-low
   When(/^User filter desc High-Lowest$/, async () => {
        await FilterPage.clickfilterbypricedesc()

});

   Then(/^Verify filter price by desc High-Low available$/, async () => {
        await expect(FilterPage.firstskudescbyprice).toBeDisplayed();
        await expect(FilterPage.descbyname).toHaveText("Price: Highest - Lowest");
});

When(/^User retrieves SKU in price descending order by web$/, async () => {
    // const elementprice = await $("//a[contains(@href,'/edelweiss-sleeping-mask-75ml-074')]/following-sibling::div/h3");
    const elementprice = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/following-sibling::div/h3");
    await elementprice.waitForDisplayed();

    const hargaElements = await $$("//h3[contains(text(), 'Rp')]");

    hargas = [];
    for (const element of hargaElements) {
        const text = await element.getText();
        const harga = parseInt(text.replace('Rp', '').replace(/\./g, '').trim());
        hargas.push(harga);
    }

    top5SKUsWeb = hargas.slice(0, 5);
    // console.log('Top 5 SKUs Price Desc:', top5SKUs);
});


When(/^User retrieves SKU in price descending order by me$/, async () => {
    // const elementprice = await $("//a[contains(@href,'/edelweiss-sleeping-mask-75ml-074')]/following-sibling::div/h3");
    const elementprice = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/following-sibling::div/h3")
    await elementprice.waitForDisplayed();

    const hargaElements = await $$("//h3[contains(text(), 'Rp')]");

    hargas = [];
    for (const element of hargaElements) {
        const text = await element.getText();
        const harga = parseInt(text.replace('Rp', '').replace(/\./g, '').trim());
        hargas.push(harga);
    }

    hargas.sort((a, b) => b - a);

    top5SKUsMe = hargas.slice(0, 5);
    // console.log('Top 5 SKUs Price Desc:', top5SKUs);
});

Then('User verifies the order from high to low', async () => {
// Log yang disimpan sebelumnya
const top5SKUbyWebpriceDesc = top5SKUsWeb;// Ganti dengan nilai dari log 'Top 5 SKUs A-Z by web'
const top5SKUsbyMepriceDesc = top5SKUsMe; // Ganti dengan nilai dari log 'Top 5 SKUs A-Z by Me'
// Fungsi untuk membandingkan dua array SKU
function compareSKUs(skuArray1, skuArray2) {
if (skuArray1.length !== skuArray2.length) {
   return false; // Jika panjangnya berbeda, langsung kembalikan false
}

for (let i = 0; i < skuArray1.length; i++) {
if (skuArray1[i] !== skuArray2[i]) {
       return false; // Jika ada perbedaan di antara SKU, kembalikan false
}
}

return true; // Jika tidak ada perbedaan, kembalikan true
}
// Log SKU by web
console.log("SKU by Web:", top5SKUbyWebpriceDesc);

// Log SKU by me
console.log("SKU by Me:", top5SKUsbyMepriceDesc);

// Verifikasi urutan SKU antara by web dan by me
const isOrderCorrect = compareSKUs(top5SKUbyWebpriceDesc, top5SKUsbyMepriceDesc);

// Output hasil verifikasi
if (isOrderCorrect) {
console.log("Urutan SKU dari by web dan by me sudah sesuai.");
} else {
console.log("Urutan SKU dari by web dan by me tidak sesuai.");
}
});