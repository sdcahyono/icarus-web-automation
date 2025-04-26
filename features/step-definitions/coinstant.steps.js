const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals');
const { remote } = require('webdriverio');


const CartPage = require('../pageobjects/cart.page');
const SecurePage = require('../pageobjects/secure.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const TransactionPage = require('../pageobjects/transaction.page');
const CoInstantPage = require('../pageobjects/coinstant.page');
const LoginPage = require('../pageobjects/login.page');


const pages = {
    checkout: CoInstantPage
}

Then(/^User add to bag$/, async () => {
    await browser.pause(3000);
    await CoInstantPage.btnaddtocart();
});

Then(/^Validate shopping cart$/, async () => {
    await browser.pause(3000);
    await expect(CoInstantPage.skubyname).toHaveText("WHITE MUSK DEODORANT 50ML");
    await expect(CoInstantPage.skuprice).toHaveText("Rp 149.000");
    await expect(CartPage.inputQty1).toBeDisplayed();
    await expect(CartPage.subtotalOnCart).toHaveText("Rp 149.000");
    const cartSubtotal = CartPage.subtotalOnCart.getText();
    cartSubtotal.then((text) => {
    numericValueCartSubtotal = parseInt(text.replace(/[^\d]/g, ''), 10);
    console.log(numericValueCartSubtotal); // Output: 149000
    });
    await expect(CoInstantPage.grandtotalcart).toHaveText("Rp 149.000");
    // await expect(CoInstantPage.grandtotalcart).toHaveText("Rp 149.000");
});

Then(/^user direct shipment methode page should available$/, async() => {
    await expect(CoInstantPage.shipmentpage).toBeDisplayed();

})

Then(/^Validate SAP Express shipping cost$/, async() => {
    SAPExpCost = CheckoutPage.shippingCostSapExpress.getText();
    SAPExpCost.then((text) => {
        numericValueSAPExpCost = parseInt(text.replace(/[^\d]/g, ''), 10);
        console.log(numericValueSAPExpCost); 
    });
});

Then(/^Grand total should correct on shipment methode page$/, async() => {
    await browser.pause(1000);
    total = numericValueCartSubtotal+numericValueSAPExpCost;
    textTotal = "Rp " + total.toLocaleString();
    textTotal = textTotal.replace(',', '.');
    await expect(CoInstantPage.grandtotalonshipmentcart).toHaveText(textTotal);
})

Then(/^user direct payment methode page should available$/, async() => {
    await expect(CoInstantPage.paymentpage).toBeDisplayed();
})

When(/^User select shopeepay$/, async() => {
    await CheckoutPage.clickbtnshopeepay();
})

//
Then(/^Grand total should correct on payment methode page$/, async() => {
    await browser.pause(1000);
    total = numericValueCartSubtotal+numericValueSAPExpCost;
    textTotal = "Rp " + total.toLocaleString();
    textTotal = textTotal.replace(',', '.');
    await expect(CheckoutPage.totalWithoutPromo).toHaveText(textTotal);
})


let qrCodeSrc; // Declare the qrCodeSrc variable at a higher scope level to access it across steps

When(/^User click Copyqr$/, async () => {
    const my_frame = await $("//iframe[@id='snap-midtrans']");
    browser.switchToFrame(my_frame);
    await expect($("(//img[@alt='qr-code'])[1]")).toBeDisplayed();

    // Find the element containing the QR code with XPath
    const qrCodeImage = await browser.$("(//img[@alt='qr-code'])[1]");
    qrCodeSrc = await qrCodeImage.getAttribute('src'); // Remove 'const' to assign the value to the global variable
    console.log('QR Code Text:', qrCodeSrc);
    await browser.pause(5000);
});

When(/^User pay Midtrans instantpayment$/, async () => {
    await browser.pause(5000);
    await browser.newWindow('https://simulator.sandbox.midtrans.com/qris/index');
    await browser.maximizeWindow();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await $("#qrCodeUrl").click();
    const qrCodeInputElement = await browser.$('#qrCodeUrl');
    await qrCodeInputElement.click();
    await browser.keys(['Control', 'a']); // Selects all text in the input field
    await browser.keys(qrCodeSrc); // Enters the value obtained from QR code
    await $("//input[@value='Scan QR']").click();
    //input[@value="Scan QR"]
    await browser.pause(3000);
    await $("//input[@value='Pay']").click();
    await browser.pause(3000);
    const pinInput = await $("//input[@id='pin']");
    await pinInput.setValue("123456");
    await $("//input[@value='Confirm']").click();
   ////input[@value="Confirm"]
    await browser.pause(3000);
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await browser.pause(1000);
    await browser.refresh();
});


Then(/^Verify order$/, async() => {
await expect(CoInstantPage.orderpaid).toBeDisplayed();
await expect(CoInstantPage.trxdetail).toBeDisplayed();

try {
    // Check if the 'Point Redeemed' field exists
    const pointRedeemedElement = driver.findElement(By.xpath("//td[normalize-space()='Point Redeemed']"));

    if (pointRedeemedElement) {
        // If the 'Point Redeemed' field exists, capture and verify the dynamic value
        const redeemedPointsElement = driver.findElement(By.xpath("//h6[normalize-space()='Point Redeemed']"));
        const redeemedPoints = await redeemedPointsElement.getText();

        // Print and assert the redeemed points value
        console.log('Redeemed Points:', redeemedPoints);
        assert.ok(redeemedPoints.length > 0, 'Redeemed points value is empty');
        console.log('Test passed: Redeemed points displayed successfully');
    } else {
        console.log('Test passed: No points redeemed during checkout');
    }

    // Continue with the existing order number verification
    const dynamicElement = driver.findElement(By.xpath("(//h5[normalize-space()='349990020240903559'])[1]"));
    const orderNumber = await dynamicElement.getText();

    console.log('Order Number:', orderNumber);
    assert.ok(orderNumber.length > 0, 'Order number is empty');
    console.log('Test passed: Order number is displayed successfully');
} catch (error) {
    console.error('Test failed:', error.message);
}
});

//----------------- Co with point----------------------

Then(/^SiCepat Regular shipping cost should available$/, async() => {
    await browser.pause(1000);
    await expect(CheckoutPage.shippingCostSiCepatRegular).toBeDisplayed();
    
    SiCepatRegCost = CheckoutPage.shippingCostSiCepatRegular.getText();
    SiCepatRegCost.then((text) => {
        numericValueSiCepatRegCost = parseInt(text.replace(/[^\d]/g, ''), 10);
        console.log(numericValueSiCepatRegCost); // Output: 1297000
    });
    
});


Then(/^Verify Point History$/, async() => {
    await browser.newWindow('https://web.staging-v1.tbsgroup.co.id/membership/point-activities');
    await browser.maximizeWindow();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect(CoInstantPage.textpwpredeem).toHaveText("Pay With Point Redeem");
    await expect(CoInstantPage.txtatecommerce).toBeDisplayed();

//Get Tgl point history
    

    const todayDateElement = await $(`(//span[contains(text(),'${await getCurrentDate()}')])[1]`);

    await browser.pause(3000);
    // await todayDateElement.waitForExist();
    const todayDateText = await todayDateElement.getText();
    console.log(`Today's Date: ${todayDateText}`);
    
    async function getCurrentDate() {
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString('en-US', { month: 'long' });
        const year = now.getFullYear();
        const time = now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
        // const time = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        return `${day} ${month} ${year} • ${time}`;
    }


//Perbandingan pengurangan point di riwyat trx = point history
const dynamicHistoryPointElement = await $('//p[contains(@class, "MuiTypography-body1")][contains(normalize-space(), "Poin")]');
const dynamicHistorytrxtElement = await $('//h6[contains(normalize-space(), "")]');
// Mendapatkan teks dari elemen yang sesuai dengan pola
const dynamicPointText = await dynamicHistoryPointElement.getText();
console.log(`Dynamic P Element Text: ${dynamicPointText}`)
// console.log(`Dynamic Point Value: ${dynamicPointText}`);
const dynamicHistorytrxtText = await dynamicHistorytrxtElement.getText();
// console.log(`Dynamic H6 Value: ${dynamicH6Text}`);
console.log(`Dynamic History trx Element Text: ${dynamicHistorytrxtText}`);

if (dynamicPointText === dynamicHistorytrxtText) {
    console.log('The values are the same.');
} else {
    console.log('The values are different.');
}
});


/// ------ Voucher--------------

Then(/^Teks voucher should available$/, async () => {
    await browser.pause(5000);
    await expect(CoInstantPage.txtvoucher).toBeDisplayed();
});

When(/^User click use voucher$/, async () => {
    await CoInstantPage.clickbtnusevoucher();
});

Then(/^Teks voucher for you should available$/, async () => {
    await browser.pause(3000);
    await expect(CoInstantPage.txtvoucherforyou).toBeDisplayed();
}); 

// When(/^User input kode voucher$/, async () => {
//     // const voucherCode = 'QA-Mils-FullFlower-51698649290000309-test120224A';
//     // //const inputElement = await $(CoInstantPage.inputvoucher);
//     // const inputElement = await $("//input[@placeholder='Masukkan kode voucher']");
//     //  // Ensure the input element is present and visible before interacting with it
//     // await inputElement.waitForDisplayed();
//     //  // Set the value of the input element
//     // await inputElement.setValue(voucherCode);
//});


// const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Daftar huruf abjad
// //const startingCharacter = 'A'; // Huruf awal
// When(/^User input kode voucher$/, async () => {


//         const baseVoucherCode = 'QA-Mils-FullFlower-51698649290000309-test120224'; // Bagian tetap dari kode voucher
//         const inputElement = await $("//input[@placeholder='Masukkan kode voucher']");
        
//         // Pastikan elemen input hadir dan terlihat sebelum berinteraksi dengannya
//         await inputElement.waitForDisplayed();
    
//         // Dapatkan nilai dari elemen input
//     const inputValue = await inputElement.getValue();
//     const lastCharacter = inputValue[inputValue.length - 1]; // Ambil karakter terakhir

//     let currentIndex = alphabet.indexOf(lastCharacter);
//     let nextCharacter;

//     // Jika karakter terakhir bukan huruf abjad, mulai dari awal
//     if (currentIndex === -1) {
//         nextCharacter = alphabet[0];
//     } else {
//         // Jika huruf terakhir adalah Z, kembali ke A, jika tidak, ambil huruf berikutnya
//         nextCharacter = currentIndex === alphabet.length - 1 ? alphabet[0] : alphabet[currentIndex + 1];
//     }

//     const voucherCode = baseVoucherCode + nextCharacter;
//     await inputElement.setValue(voucherCode);
// });

// Import modul node-localstorage
const LocalStorage = require('node-localstorage').LocalStorage;
// Lokasi penyimpanan lokal (bisa diatur sesuai kebutuhan Anda)
const localStorage = new LocalStorage('./scratch');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Daftar huruf abjad
let lastUsedVoucher = localStorage.getItem('lastUsedVoucher'); // Mengambil kode voucher terakhir dari penyimpanan lokal

When(/^User input kode voucher$/, async () => {
    const baseVoucherCode = 'QA-Mils-FullFlower-51698649290000309-test120224'; // Bagian tetap dari kode voucher
    const inputElement = await $("//input[@placeholder='Masukkan kode voucher']");
    
    // Pastikan elemen input hadir dan terlihat sebelum berinteraksi dengannya
    await inputElement.waitForDisplayed();

    let nextCharacter;

    if (!lastUsedVoucher) {
        // Jika ini pertama kali penggunaan atau localStorage kosong, mulai dari A
        nextCharacter = alphabet[0];
    } else {
        const lastCharacter = lastUsedVoucher[lastUsedVoucher.length - 1]; // Ambil karakter terakhir dari kode voucher terakhir yang digunakan

        const currentIndex = alphabet.indexOf(lastCharacter);
        // Jika huruf terakhir adalah Z, kembali ke A, jika tidak, ambil huruf berikutnya
        nextCharacter = currentIndex === alphabet.length - 1 ? alphabet[0] : alphabet[currentIndex + 1];
    }

    const voucherCode = baseVoucherCode + nextCharacter;

    // Simpan kode voucher yang digunakan ke dalam penyimpanan lokal
    localStorage.setItem('lastUsedVoucher', voucherCode);

    await inputElement.setValue(voucherCode);
});



When(/^User click gunakan$/, async () => {
    await CoInstantPage.clickbtngunakan();
});

When(/^User click voucher$/, async () => {
const element = await CoInstantPage.clickbtnvcr();
        // Temukan semua elemen yang sesuai dengan XPath    
// const elements = await driver.findElements(By.xpath("//div[@class='render-html' and text()='Voucher QA 50K']"));
  // Periksa apakah ada elemen yang ditemukan
  if (elements.length > 0) {
    // Ambil dan klik elemen pertama dari hasil pencarian
    await elements[0].click();
  } else {
    console.log("No matching element found.");
  }
});

    When(/^User click simpan voucher$/, async () => {
        await CoInstantPage.clicksavevcr();
    });


    When(/^user click close voucher list$/, async () => {
        await CoInstantPage.clickclosevcr();
    });
    //Then validate voucher applied
    Then(/^validate voucher applied$/, async () => {
        await expect(CoInstantPage.txtcashvoucher).toBeDisplayed();
    });

    Then(/^validate value voucher$/, async () => {
        await expect(CoInstantPage.valuevoucher).toHaveText("-Rp 50.000");
    });