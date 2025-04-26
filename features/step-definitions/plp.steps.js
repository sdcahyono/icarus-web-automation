const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const PlpPage = require('../pageobjects/plp.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');

const pages = {
    plp: PlpPage
}

When(/^User scroll down page (.+)$/, async(y) => {
    yy = parseInt(y);
    await browser.scroll(0, yy);
})

When(/^User scroll down last page$/, async () => {
    async function scrollDownToBottom() {
        let lastScrollPosition = -1;
        let currentScrollPosition = 0;
    
        // Loop hingga posisi scroll tidak berubah
        while (lastScrollPosition !== currentScrollPosition) {
            lastScrollPosition = currentScrollPosition;
            // Menggulir halaman ke bawah sejauh 1000 piksel
            await driver.executeScript('window.scrollBy(0, 800);');
            // Menunggu sejenak setelah menggulir
            await driver.sleep(1000); // Menunggu 1 detik
            // Mendapatkan posisi scroll vertikal saat ini
            currentScrollPosition = await driver.executeScript('return window.scrollY;');
        }
    }
    
    // Panggil fungsi untuk menggulirkan halaman ke bawah hingga akhir
    await scrollDownToBottom();
})

When(/^User click Add To Bag button$/, async () => {
    await PlpPage.clickAddToCart();
});

When(/^User scroll up page (.+)$/, async(y) => {
    yy = parseInt(y);
    await browser.scroll(0, yy);
});

When(/^User click Add To Bag$/, async () => {
    await PlpPage.clickAddToCartSearch();
    await browser.pause(1000);
})

Then(/^Verify total PLP is show$/, async () => {
    // await expect(PlpPage.totalproduk).toBeDisplayed();
    let jumlahPLP = await PlpPage.totalproduk.getText();
    if (jumlahPLP){
    console.log('Jumlah produk di PLP:', jumlahPLP);
} else {
    console.error("Jumlah PLP tidak ditemukan.");
}
    
})


When(/^User click product image$/, async () => {
    await PlpPage.clickimgProduct();
    await browser.pause(3000);
})


When(/^User search product (.+)$/, async(productName) => {
    await PlpPage.typeSearch(productName)
});

When(/^User click Add To Bag in product (.+)$/, async(productName) => {
    prodName = productName;
    // await PlpPage.clickAddToBagAdvanceSet();
    await PlpPage.clickAddToBag();
})


Then(/^Verify Img PLP is show$/, async () => {
    await expect(PlpPage.imgPLP).toBeDisplayed();
  // Temukan elemen gambar (img) menggunakan XPath yang diberikan
  const imgElement = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[1]");

  // Verifikasi apakah elemen gambar (img) ditemukan
  if (imgElement) {
      console.log("Gambar PLP ditampilkan.");
  } else {
      console.error("Gambar PLP tidak ditemukan.");
  }
});


Then(/^Verify List SKU name PLP is show$/, async () => {
      const elementByName = await $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[2]/h5/span");
      await elementByName.waitForDisplayed();
     
      const dynamicValue = await elementByName.getText();
      const nameSkuElements = await $$("//span[contains(@class, '')]");
      const skus = [];
      for (const element of nameSkuElements) {
          const sku = await element.getText();
          skus.push(sku);
      }
      // Mencari indeks element namesku
      const startIndex = skus.findIndex(sku => sku === dynamicValue);
      if (startIndex !== -1) { // Memastikan indeks ditemukan
     
      top5SKUsPLP = skus.slice(startIndex + 0); // Memotong array mulai dari indeks berikutnya
      top5SKUsPLP = top5SKUsPLP.filter(sku => sku !== ''); // Menghapus SKU yang kosong
      if (top5SKUsPLP.length > 5) { // Jika lebih dari 5 SKU tersedia, ambil 5 SKU pertama saja
              top5SKUsPLP = top5SKUsPLP.slice(0, 5);
          }
          console.log('Top 5 Name SKUs PLP:', top5SKUsPLP);
      } else {
          console.log('Elemen dengan teks yang diberikan tidak ditemukan.');
      }
})

Then(/^Verify List SKU price PLP is show$/, async () => {

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
    console.log('Top 5 SKUs Price:', top5SKUsWeb);
});

Then(/^Catalog rule price should available$/, async() => {
    await expect(PlpPage.catalogPrice).toBeDisplayed();
})

Then(/^Original price should available$/, async() => {
    await expect(PlpPage.originalPrice).toBeDisplayed();
})

Then(/^Catalog rule percentage should available$/, async() => {
    await expect(PlpPage.catalogPercentage).toBeDisplayed();
})

Then(/^Catalog rule name should available$/, async() => {
    await expect(PlpPage.catalogTag).toBeDisplayed();
})

