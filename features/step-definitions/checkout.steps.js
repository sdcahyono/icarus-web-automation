const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals');


const CartPage = require('../pageobjects/cart.page');
const SecurePage = require('../pageobjects/secure.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const TransactionPage = require('../pageobjects/transaction.page');


const pages = {
    cart: CheckoutPage
}

When(/^User select shipping method SAP Regular$/, async() => {
    await browser.pause(2000);
    await CheckoutPage.clickRadioSAPRegular();
    await browser.pause(1000);
    SAPRegCost = CheckoutPage.shippingCostSapRegular.getText();
    SAPRegCost.then((text) => {
        numericValueSAPRegCost = parseInt(text.replace(/[^\d]/g, ''), 10);
        console.log(numericValueSAPRegCost); // Output: 1297000
    });
//    nominal_SAPRegCost = SAPRegCost.replace(/\D/g, '');
//    int_SAPRegCost = parseInt(nominal_SAPRegCost.replace(/\./g, ''), 10);
});

//sandra
When(/^User select shipping method SAP Regular in shipping method$/, async() => {
    await browser.pause(2000);
    await CheckoutPage.clickRadioSAPRegular();
    await browser.pause(1000);
    SAPRegCost = await CheckoutPage.shippingCostSapRegular.getText();
    numericValueSAPRegCost = parseInt(SAPRegCost.replace(/[^\d]/g, ''), 10);
    console.log("Numeric shipping cost dari list: "+numericValueSAPRegCost);
});

When(/^User select payment method VA BCA$/, async() => {
    await CheckoutPage.clickTabVirtualAccount();
    await CheckoutPage.clickRadioBCAVA();
    await browser.pause(1000);
});

Then(/^Payment popup should available$/, async() => {
    await expect(CheckoutPage.popupPayment).toBeDisplayed();
    await browser.pause(2000);
});

// When(/^User click Back To Merchant$/, async() => {
When(/^User click Check Status$/, async() => {    
    await browser.pause(2000);
//    await CheckoutPage.clickBackToMerchant();

//    await $("//iframe[@id='snap-midtrans']").isDisplayed();
//    const iframe = $("//iframe[@id='snap-midtrans']"); /* const variable named as iframe is created and
//                                         iframe id is assigned to iframe
//                                      */
//    iframe.scrollIntoView();
//    browser.switchToFrame(iframe);
//    $("//button[@type='button']").click();
//    browser.pause(3000);
//    browser.switchToParentFrame();

//    browser.waitForExist("//iframe[@id='snap-midtrans']");
//    var my_frame = $("//iframe[@id='snap-midtrans']").value;
//    browser.frame(my_frame);
//    browser.$("#snap-midtrans").frame();
    const my_frame = await $("//iframe[@id='snap-midtrans']");
    browser.switchToFrame(my_frame);
    // await expect($("//body[@id='snap-body']")).toBeDisplayed();
    await expect($("//div[@id='application']")).toBeDisplayed();
    await $("//button[@type='button']").click();
    // await $("//div[@class='close-snap-button clickable']");
    browser.switchToParentFrame();
});

Then(/^Order page waiting for payment should available$/, async() => {
    await expect(CheckoutPage.pageWaitingPayment).toBeDisplayed();
    await browser.pause(2000);
});

When(/^User click Lakukan Pembayaran$/, async() => {
    await CheckoutPage.clickLakukanPembayaran();
    await browser.pause(2000);
})

When(/^User click Copy$/, async() => {
    const my_frame = await $("//iframe[@id='snap-midtrans']");
    browser.switchToFrame(my_frame);
    // await expect($("//body[@id='snap-body']")).toBeDisplayed();
    await expect($("//div[@id='application']")).toBeDisplayed();
    await $("//div[@class='float-right clickable copy']").click();
//    browser.switchToParentFrame();
})

When(/^User pay in Midtrans BCA VA$/, async() => {
    await browser.newWindow('https://simulator.sandbox.midtrans.com/bca/va/index');
    await browser.maximizeWindow();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await $("#inputMerchantId").click();
    await browser.keys(['Control','v']);
    await $("//input[@value='Inquire']").click();
    await $("//input[@value='Pay']").click();
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await browser.pause(1000);
})

Then(/^Success page should open$/, async() => {
    await browser.pause(2000);
    await expect(CheckoutPage.pageSuccessPayment).toBeDisplayed();
    await browser.pause(2000);
//    let urlString = browser.getUrl();
//    url = new URL(urlString);
//    orderNumber = url.pathname.split('/').pop();
    const nomorPesanan = CheckoutPage.nomorPesanan.getText();
    nomorPesanan.then((text) => {
        let match = text.match(/\d+/);
        orderNumber = match ? match[0] : null;
    });
})

When(/^User click Cek Status Pesanan$/, async() => {
    await CheckoutPage.clickCekStatusPesanan();
})

Then(/^Transaction detail page should open$/, async() => {
    await expect(TransactionPage.breadcrumbMyTransaction).toBeDisplayed();
    await expect(TransactionPage.titleTransactionDetail).toBeDisplayed();
    await expect(TransactionPage.textStatusPaid).toBeDisplayed();
    await expect(TransactionPage.transactionNo).toHaveText(orderNumber);
})

//sandra
Then(/^Shipping method in detail transaction is (.+)$/, async (selectedShippingMethod) => {
    await expect(TransactionPage.titleShippingDetail).toBeDisplayed();
    await expect(TransactionPage.shippingMethodDetail).toHaveText(selectedShippingMethod);
});

//sandra
Then(/^Shipping address name is (.+) in detail transaction$/, async (shippingNamaLengkap) => {
    await expect(TransactionPage.shippingAddressDetailName).toHaveText(shippingNamaLengkap);
});

//sandra
Then(/^Shipping address phone number is (.+) in detail transaction$/, async (shippingPhNumber) => {
    await expect(TransactionPage.shippingAddressDetailPhNumber).toHaveText(shippingPhNumber);
});

//sandra
Then(/^Shipping address full address is (.+) in detail transaction$/, async (shippingAddress) => {
    await expect(TransactionPage.shippingAddressDetailAddress).toHaveText(shippingAddress);
});

Then(/^Shipping name (.+) and shipping detail in transaction detail should be correct$/, async (selectedShippingMethod) => {
    await expect(TransactionPage.titleShippingDetail).toBeDisplayed();
    await expect(TransactionPage.shippingMethodDetail).toHaveText(selectedShippingMethod);
    await expect(TransactionPage.shippingAddressDetailName).toHaveText(tempFullName);
    await expect(TransactionPage.shippingAddressDetailPhNumber).toHaveText(tempPhoneNumber);
    // Memisahkan string berdasarkan tanda hubung ,
    const parts = tempKecamatan.split(/[,]/);
    const splitKec = parts[0];
    const splitWilayah = parts[1];
    const splitProvinsi = parts[2];
    const strKecamatan = splitKec+","+splitProvinsi+","+splitWilayah;
    console.log("Isi dari strKecamatan = "+strKecamatan);
    const strAddress = tempAddress+" "+strKecamatan;
    console.log("Isi dari strAddress = "+strAddress);
    //await expect(TransactionPage.shippingAddressDetailAddress).toHaveTextContaining(tempAddress);
    await expect(TransactionPage.shippingAddressDetailAddress).toHaveText(strAddress);
});

Then(/^(.+) shipping method should applied$/, async(shippingMethod) => {
    await expect(CheckoutPage.appliedShippingMethod).toHaveText(shippingMethod);
    await browser.pause(1000);
})

Then(/^Send As Gift section should available$/, async() => {
    await expect(CheckoutPage.titleSendAsGift).toBeDisplayed();
})

When(/^User click send as gift info$/, async() => {
    await CheckoutPage.clickInfoSAG();
})

Then(/^Informasi send as gift should available$/, async() => {
    await expect(CheckoutPage.titleInfoSAG).toBeDisplayed();
    await expect(CheckoutPage.infoSAG).toBeDisplayed();
})

When(/^User click Tambahkan Kartu Ucapan$/, async() => {
    await CheckoutPage.clickTambahKartuUcapan();
})

Then(/^Kartu ucapan form should open$/, async() => {
    await expect(CheckoutPage.formKartuUcapan).toBeDisplayed();
    await expect(CheckoutPage.formHeaderKartuUcapan).toBeDisplayed();
})

When(/^User select greeting card image$/, async() => {
    await CheckoutPage.clickimgGreetingcard2();
})

When(/^User input field Dari (.+)$/, async(dari) => {
    await CheckoutPage.typeDari(dari);
})

When(/^User input field Untuk (.+)$/, async(untuk) => {
    await CheckoutPage.typeUntuk(untuk);
})

When(/^User input field Pesan (.+)$/, async(pesan) => {
    await CheckoutPage.typePesan(pesan);
})

When(/^User click Save$/, async() => {
    await CheckoutPage.clickSave();
})

Then(/^Add greeting card successful and available in checkout page$/, async() => {
    await expect(CheckoutPage.listGreetingCard).toBeDisplayed();
})

Then(/^Greeting card should available in price breakdown$/, async() => {
    await expect(CheckoutPage.priceBreakdownGreetingCard).toBeDisplayed();
    await expect(CheckoutPage.priceGreetingCard).toBeDisplayed();
})

When(/^User click Ubah Kartu Ucapan$/, async() => {
    await CheckoutPage.clickEditGreetingCard();
})

Then(/^Field Dari should be filled (.+)$/,async(dari) => {
    await expect(CheckoutPage.inputFieldDari).toHaveValue(dari);
})

Then(/^Field Untuk should be filled (.+)$/,async(untuk) => {
    await expect(CheckoutPage.inputFieldUntuk).toHaveValue(untuk);
})

Then(/^Field Pesan should be filled (.+)$/,async(pesan) => {
    await expect(CheckoutPage.inputFieldPesan).toHaveValue(pesan);
})

When(/^User click Discard$/, async() => {
    await CheckoutPage.clickDiscard();
})

When(/^User click Discard in confirmation page$/, async() => {
    await CheckoutPage.clickDiscardConfirm();
})

When(/^User click Close form$/, async() => {
    await CheckoutPage.clickCloseForm();
})

When(/^User click trash$/, async() => {
    await CheckoutPage.clickTrash();
})

When(/^User click Tidak$/, async() => {
    await CheckoutPage.clickTidakConfirm();
})

Then(/^Greeting card should still available in checkout page$/, async() => {
    await expect(CheckoutPage.listGreetingCard).toBeDisplayed();
})

When(/^User click Yakin$/, async() => {
    await CheckoutPage.clickYakinConfirm();
})

Then(/^Greeting card should not available in checkout page$/, async() => {
    await browser.pause(2000);
    await expect(CheckoutPage.listGreetingCard).not.toBeDisplayed();
})

Then(/^Delete successful, User get message (.+)$/, async(pesan) => {
    await browser.pause(2000);
    await expect(CheckoutPage.snackbar).toHaveText(pesan);
})

Then(/^Button Tambahkan Kartu Ucapan should available$/, async() => {
    await expect(CheckoutPage.btnTambahKartuUcapan).toBeDisplayed();
})

When(/^User at checkout page$/, async() => {
    await browser.url('https://web.staging-v1.tbsgroup.co.id/checkout');
})

Then(/^Shipping address section should available$/, async() => {
    await expect(CheckoutPage.titleShippingAddressSection).toBeDisplayed();
    await expect(CheckoutPage.listboxAddress).toBeDisplayed();
})

When(/^User click address list box$/, async() => {
    await browser.pause(2000);
    let tempTambahAddress = await CheckoutPage.btnTambahAlamat.isDisplayed();
    console.log("Isi dari tempTambahAddress = " + tempTambahAddress);
    if (tempTambahAddress == false) {
        await CheckoutPage.clicklistboxAddress();
    } else {
        await CheckoutPage.clickTambahAlamat();
    }
})

When(/^User click Tambah Alamat$/, async() => {
    await CheckoutPage.clickTambahAlamat();
})

Then(/^Form Tambah Alamat Baru should open$/, async() => {
    await expect(CheckoutPage.formTambahAlamatBaru).toBeDisplayed();
    await expect(CheckoutPage.titleFormTambahAlamatBaru).toBeDisplayed();
})

//sandra
When(/^User click Tambah Alamat and form new address should open$/, async() => {
    await CheckoutPage.clickTambahAlamat();
    await expect(CheckoutPage.formTambahAlamatBaru).toBeDisplayed();
    await expect(CheckoutPage.titleFormTambahAlamatBaru).toBeDisplayed();
})

When(/^User click Cancel in form Tambah Alamat$/, async() => {
    await CheckoutPage.clickCancelFormAlamat();
})

When(/^User click Yes, Im Sure in Confirm Cancel$/, async() => {
    await CheckoutPage.clickYesImSure();
})

Then(/^Form Tambah Alamat should close$/, async() => {
    await expect(CheckoutPage.formTambahAlamatBaru).not.toBeDisplayed();
})

Then(/^Error message in field Dari should appear (.+)$/, async(dari) => {
    await expect(CheckoutPage.helperTextDari).toHaveText(dari);
})

Then(/^Error message in field Untuk should appear (.+)$/, async(untuk) => {
    await expect(CheckoutPage.helperTextUntuk).toHaveText(untuk);
})

Then(/^Error message in field Pesan should appear (.+)$/, async(pesan) => {
    await expect(CheckoutPage.helperTextPesan).toHaveText(pesan);
})

Then(/^Form title should Tambah Alamat Baru$/, async() => {
    await expect(CheckoutPage.titleFormTambahAlamatBaru).toBeDisplayed();
})

Then(/^Penerima section should available$/, async() => {
    await expect(CheckoutPage.sectionTitlePenerima).toBeDisplayed();
    await expect(CheckoutPage.labelNamaLengkap).toBeDisplayed();
    await expect(CheckoutPage.inputFieldNamaLengkap).toBeDisplayed();
    await expect(CheckoutPage.labelNomorPonsel).toBeDisplayed();
    await expect(CheckoutPage.inputFieldNomorPonsel).toBeDisplayed();
})

Then(/^Alamat section should available$/, async() => {
    await expect(CheckoutPage.sectionTitleAlamat).toBeDisplayed();
    await expect(CheckoutPage.labelKecamatan).toBeDisplayed();
    await expect(CheckoutPage.inputFieldKecamatan).toBeDisplayed();
    await expect(CheckoutPage.labelKodePos).toBeDisplayed();
    await expect(CheckoutPage.inputKodePos).toBeDisplayed();
    await expect(CheckoutPage.labelAlamatLengkap).toBeDisplayed();
    await expect(CheckoutPage.inputAlamatLengkap).toBeDisplayed();
    await expect(CheckoutPage.labelTitikLokasi).toBeDisplayed();
    await expect(CheckoutPage.inputTitikLokasi).toBeDisplayed();
    await expect(CheckoutPage.labelPesanPengiriman).toBeDisplayed();
    await expect(CheckoutPage.inputPesanPengiriman).toBeDisplayed();
    await expect(CheckoutPage.labelNamaAlamat).toBeDisplayed();
    await expect(CheckoutPage.inputNamaAlamat).toBeDisplayed();
})

Then(/^Checkbox Simpan Alamat should available$/, async() => {
//    await expect(CheckoutPage.checkboxSimpanAlamat).toBeDisplayed();
    await expect(CheckoutPage.labelSimpanAlamat).toBeDisplayed();
})

Then(/^Button Save should available$/, async() => {
    await expect(CheckoutPage.btnSaveFormAlamat).toBeDisplayed();
})

Then(/^Button Cancel should available$/, async() => {
    await expect(CheckoutPage.btnCancelFormAlamat).toBeDisplayed();
})

Then(/^Button close should available$/, async() => {
    await expect(CheckoutPage.btnCloseFormAlamat).toBeDisplayed();
})

When(/^User input nama lengkap (.+)$/, async(namalengkap) => {
    await CheckoutPage.typeNamaLengkap(namalengkap);
})

//sandra
When(/^User clear nama lengkap$/, async() => {
    browser.pause(3000);
    await CheckoutPage.clearNamaLengkap();
    browser.pause(2000);
})

When(/^User input nomor ponsel (.+)$/, async(nomor) => {
    await CheckoutPage.typeNomorPonsel(nomor);
})

//sandra
When(/^User clear nomor ponsel$/, async() => {
    browser.pause(3000);
    await CheckoutPage.clearNomorPonsel();
    browser.pause(2000);
})

//When(/^User input kecamatan (.+)$/, async(kecamatan) => {
//    await CheckoutPage.typeKecamatan(kecamatan);
//    await browser.pause(3000);
//    await CheckoutPage.opsiKecamatan.moveTo();
////    await $("//div[@class='MuiAutocomplete-popper mui-style-1le80r3']").selectByVisibleText("Ayah, Kebumen, Jawa Tengah");
////    await CheckoutPage.opsiKecamatan.click();
//    await CheckoutPage.opsiKecamatan2.click();
//    await browser.pause(2000);
//})

When(/^User input kecamatan (.+)$/, async(kecamatan) => {
//    await CheckoutPage.typeKecamatan(kecamatan);
    await CheckoutPage.typeKecamatan2(kecamatan); //sandra
    //await browser.pause(500);
    //await CheckoutPage.opsiKecamatan.click();
    //await browser.keys(['Enter']);
    //(await CheckoutPage.inputFieldKecamatan).selectByAttribute('aria-activedescendant', 'Serpong, Tangerang Selatan, Banten');
//    await $("//div[@class='MuiAutocomplete-popper mui-style-1le80r3']").selectByVisibleText("Ayah, Kebumen, Jawa Tengah");
    await CheckoutPage.opsiKecamatan2.click();
    await browser.pause(2000);
})

When(/^User click Pilih kode pos$/, async() => {
    await CheckoutPage.clickinputKodePos();
})

//When(/^User select postal code$/, async() => {
//    await CheckoutPage.clickOpsiKodePos();
//})

//sandra
When(/^User click Pilih Kode Pos and select postal code (.+)$/, async(userPostalCode) => {
    await CheckoutPage.clickinputKodePos();
    const liAddress = CheckoutPage.dropdownPostalCode.$(`li=` + userPostalCode);
    liAddress.click();
    browser.pause(3000);
})

//sandra
When(/^User clear kecamatan field$/, async() => {
    await CheckoutPage.clearFieldKecamatan.moveTo();
    await CheckoutPage.clickClearKecamatan();
    browser.pause(3000);
})

When(/^User input alamat lengkap (.+)$/, async(alamatlengkap) => {
    browser.pause(3000);
    await CheckoutPage.typeAlamatLengkap(alamatlengkap);
})

//sandra
When(/^User clear alamat lengkap$/, async() => {
    await CheckoutPage.clearAlamatLengkap();
    browser.pause(2000);
})


//sandra
When(/^User click Atur Titik Lokasi and Titik Lokasi should open$/, async() => {
    await CheckoutPage.clickAturTitikLokasi();
    browser.pause(2000);
    await expect(CheckoutPage.formTambahAlamatBaru).toBeDisplayed();
    await expect(CheckoutPage.titleFormTitikLokasi).toBeDisplayed();
})

//sandra
When(/^User click Ubah Titik Lokasi and Titik Lokasi should open$/, async() => {
    //await CheckoutPage.clickUbahTitikLokasi();
    await CheckoutPage.clickTitikLokasiFront();
    browser.pause(2000);
    await expect(CheckoutPage.formTambahAlamatBaru).toBeDisplayed();
    await expect(CheckoutPage.titleFormTitikLokasi).toBeDisplayed();
})


//sandra
When(/^User input Titik Lokasi (.+)$/, async(titikLokasi) => {
    await CheckoutPage.typeTitikLokasi(titikLokasi);
    await browser.pause(4000);
    await browser.keys(['ArrowDown']);
    await browser.keys(['Enter']);
    await browser.pause(4000);
    tempTitikLokasi = await CheckoutPage.inputTitikLokasi.getValue();
    console.log("Isi variable: "+tempTitikLokasi);
})

//sandra
When(/^User click save Titik Lokasi$/, async() => {
    await CheckoutPage.clickSimpanTitikLokasi();
})

//sandra
When(/^User clear Titik Lokasi$/, async() => {
    await CheckoutPage.clearFieldTitikLokasi.moveTo();
    await CheckoutPage.clickClearTitikLokasi();
    await browser.pause(4000);   
})


When(/^User input pesan pengiriman (.+)$/, async(pesan) => {
    await CheckoutPage.typePesanPengiriman(pesan);
})

//sandra
When(/^User clear pesan pengiriman$/, async() => {
    await CheckoutPage.clearPesanPengiriman();
    browser.pause(2000);
})

When(/^User input nama alamat (.+)$/, async(namaalamat) => {
    await CheckoutPage.typeNamaAlamat(namaalamat)
})

//sandra
When(/^User clear nama alamat$/, async() => {
    await CheckoutPage.clearNamaAlamat();
    browser.pause(2000);
})

//sandra
When(/^User tick checkbox Simpan Alamat$/, async() => {
    await CheckoutPage.clickCheckboxSimpanAlamat();
})

When(/^User click button Save$/, async() => {
    await CheckoutPage.clickSaveFormAlamat();
})

Then(/^Selected shipping address is (.+)$/, async(namaalamat) => {
    await expect(CheckoutPage.listboxAddress).toHaveText(namaalamat);
    await browser.pause(2000);
})

//sandra
// When(/^User select address name (.+)$/, async(namaalamat) => {
//     const liAddress = CheckoutPage.dropdownAddressList.$(`li=` + namaalamat);
//     liAddress.click();
// })

//sandra
When(/^User select address name (.+)$/, async(namaalamat) => {
    const liAddress = CheckoutPage.dropdownAddressList.$(`li=` + namaalamat);
    liAddress.click();
    await browser.pause(2000);
    tempFullName = await CheckoutPage.shippingAddressNamaLengkap.getText();
    tempPhoneNumber = await CheckoutPage.shippingAddressNomorPonsel.getText();
    tempAddress = await CheckoutPage.shippingAddressAlamatLengkap.getText();
    console.log("Isi dari tempFullName = "+tempFullName);
    console.log("Isi dari tempPhoneNumber = "+tempPhoneNumber);
    console.log("Isi dari tempAddress = "+tempAddress);
    await CheckoutPage.clickUbah();
    tempKecamatan = await CheckoutPage.inputFieldKecamatan.getValue();
    await CheckoutPage.btnCloseFormUbahAlamat.click();
    await CheckoutPage.btnYesImSure.click();
    console.log("Isi dari tempKecamatan = "+tempKecamatan);
})

//sandra for future use maybe
Then(/^Selected address data is correct$/, function(dataTable) {
        const addressData = dataTable.rows();
        // Melakukan iterasi pada setiap baris
        data.forEach((row, index) => {
            // Mengakses nilai dari setiap kolom berdasarkan indeks
            const namaLengkap = row[0];
            const nomorPonsel = row[1];
            const kecamatan = row[2];
            const kodePos = row[3];
            const alamatLengkap = row[4];
            const pesanPengiriman = row[5];
            const namaAlamat = row[6];
            const titikLokasi = row[7];

            // Gunakan nilai-nilai tersebut sesuai kebutuhan Anda
            console.log(`Row ${index + 1}:`);
            console.log("Nama Lengkap:", namaLengkap);
            console.log("Nomor Ponsel:", nomorPonsel);
            console.log("Kecamatan:", kecamatan);
            console.log("Kode Pos:", kodePos);
            console.log("Alamat Lengkap:", alamatLengkap);
            console.log("Pesan Pengiriman:", pesanPengiriman);
            console.log("Nama Alamat:", namaAlamat);
            console.log("Titik Lokasi:", titikLokasi);
        });
});

Then(/^Nama lengkap is (.+)$/, async(namalengkap) => {
    await expect(CheckoutPage.shippingAddressNamaLengkap).toHaveText(namalengkap);
})

Then(/^Nomor ponsel is (.+)$/, async(nomorponsel) => {
    await expect(CheckoutPage.shippingAddressNomorPonsel).toHaveText(nomorponsel);
})

Then(/^Alamat lengkap is (.+)$/, async(alamatlengkap) => {
    await expect(CheckoutPage.shippingAddressAlamatLengkap).toHaveText(alamatlengkap);
})

Then(/^Pesan pengiriman is (.+)$/, async(pesanpengiriman) => {
    await expect(CheckoutPage.shippingAddressPesanPengiriman).toHaveText(pesanpengiriman);
})

//sandra
Then(/^Titik Lokasi GO-SEND is correct$/, async() => {
    await browser.pause(2000);
    await expect(CheckoutPage.addressTitikLokasiGOSEND).toHaveText(tempTitikLokasi);
})

//sandra
Then(/^Pesan pengiriman GO-SEND is (.+)$/, async(pesanpengiriman) => {
    await expect(CheckoutPage.pesanTitikLokasiGOSEND).toHaveText(pesanpengiriman);
})

When(/^User click Ubah$/, async() => {
    await CheckoutPage.clickUbah();
})

Then(/^Form Ubah Alamat should open$/, async() => {
    await expect(CheckoutPage.titleFormUbahAlamat).toBeDisplayed();
})

//sandra
When(/^User click Ubah and form edit address should open$/, async() => {
    await CheckoutPage.clickUbah();
    await expect(CheckoutPage.titleFormUbahAlamat).toBeDisplayed();
    await browser.pause(4000);
})

Then(/^Popup message (.+) should open$/, async(pesan) => {
    await expect(CheckoutPage.snackbar).toHaveText(pesan);
})

When(/^User click Cancel in form Ubah Alamat$/, async() => {
    await CheckoutPage.clickCancelFormAlamat();
})

Then(/^Error message in field Nama Lengkap should appear (.+)$/, async(errorNama) => {
    await expect(CheckoutPage.helperTextNamaLengkap).toHaveText(errorNama);
})

Then(/^Error message in field Nomor Ponsel should appear (.+)$/, async(errorNomor) => {
    await expect(CheckoutPage.helperTextNomorPonsel).toHaveText(errorNomor);
})

Then(/^Error message in field Kecamatan should appear (.+)$/, async(errorKecamatan) => {
    await expect(CheckoutPage.helperTextKecamatan).toHaveText(errorKecamatan);
})

Then(/^Error message in field Kode Pos should appear (.+)$/, async(errorKodepos) => {
    await expect(CheckoutPage.helperTextKodePos).toHaveText(errorKodepos);
})

Then(/^Error message in field Alamat Lengkap should appear (.+)$/, async(errorAlamat) => {
    await expect(CheckoutPage.helperTextAlamatLengkap).toHaveText(errorAlamat);
})

Then(/^Error message in field Nama Alamat should appear (.+)$/, async(errorNamaAlamat) => {
    await expect(CheckoutPage.helperTextNamaAlamat).toHaveText(errorNamaAlamat);
})

When(/^User refresh browser$/, async() => {
    await browser.refresh();
})

When(/^User click Cancel in form Tambah Alamat Baru$/, async() => {
    await CheckoutPage.clickCancelFormAlamat();
})

Then(/^Shipping method section should available$/, async() => {
    await expect(CheckoutPage.titleShippingMethodSection).toBeDisplayed();
})

//sandra param
Then(/^Section with (.+) label should available$/, async(labelMethod) => {
    tempLabelMethod = labelMethod;
    await expect(CheckoutPage.labelTitleMethod).toBeDisplayed();
})

Then(/^Pengiriman regular should available$/, async() => {
    await expect(CheckoutPage.labelPengirimanRegular).toBeDisplayed();
})

Then(/^Pengiriman express should available$/, async() => {
    await expect(CheckoutPage.labelPengirimanExpress).toBeDisplayed();
})

Then(/^Pengiriman instant should available$/, async() => {
    await expect(CheckoutPage.labelPengirimanInstant).toBeDisplayed();
})


Then(/^SAP Regular shipping method should available$/, async() => {
    await expect(CheckoutPage.labelSapRegular).toBeDisplayed();
})

Then(/^SAP Regular image should available$/, async() => {
    await expect(CheckoutPage.imgSapRegular).toBeDisplayed();
})

Then(/^SAP Regular title should available$/, async() => {
    await expect(CheckoutPage.labelSapRegular).toBeDisplayed();
})

Then(/^SAP Regular estimation day should available$/, async() => {
    await expect(CheckoutPage.estimationDaySapRegular).toBeDisplayed();
})

Then(/^SAP Regular shipping cost should available$/, async() => {
    await expect(CheckoutPage.shippingCostSapRegular).toBeDisplayed();
})

//sandra
Then(/^SAP Regular should available on shipping method$/, async() => {
    await expect(CheckoutPage.labelSapRegular).toBeDisplayed();
    await expect(CheckoutPage.imgSapRegular).toBeDisplayed();
    await expect(CheckoutPage.estimationDaySapRegular).toBeDisplayed();
    await expect(CheckoutPage.shippingCostSapRegular).toBeDisplayed();
    await expect(CheckoutPage.radioSAPRegular).toBeDisplayed();
})

Then(/^SAP Express shipping method should available$/, async() => {
    await expect(CheckoutPage.labelSapExpress).toBeDisplayed();
})

Then(/^SAP Express image should available$/, async() => {
    await expect(CheckoutPage.imgSapExpress).toBeDisplayed();
})

Then(/^SAP Express title should available$/, async() => {
    await expect(CheckoutPage.labelSapExpress).toBeDisplayed();
})

Then(/^SAP Express estimation day should available$/, async() => {
    await expect(CheckoutPage.estimationDaySapExpress).toBeDisplayed();
})

Then(/^SAP Express shipping cost should available$/, async() => {
    await expect(CheckoutPage.shippingCostSapExpress).toBeDisplayed();
})

//sandra element param
Then(/^(.+) should available on shipping method section$/, async(shippingMethod) => {
    tempShipMethod = shippingMethod;
    await expect(CheckoutPage.labelShippingMethodList).toBeDisplayed();
    await expect(CheckoutPage.imgShippingMethodList).toBeDisplayed();
    await expect(CheckoutPage.estimationDayShippingMethod).toBeDisplayed();
    await expect(CheckoutPage.costShippingMethod).toBeDisplayed();
    await expect(CheckoutPage.radioBtnShippingMethod).toBeDisplayed();
})

//sandra
Then(/^SAP Express should available on shipping method$/, async() => {
    await expect(CheckoutPage.labelSapExpress).toBeDisplayed();
    await expect(CheckoutPage.imgSapExpress).toBeDisplayed();
    await expect(CheckoutPage.estimationDaySapExpress).toBeDisplayed();
    await expect(CheckoutPage.shippingCostSapExpress).toBeDisplayed();
    await expect(CheckoutPage.radioSAPExpress).toBeDisplayed();
})

//sandra
Then(/^GO-SEND Instant should available on shipping method$/, async() => {
    await expect(CheckoutPage.labelGOSENDInstant).toBeDisplayed();
    await expect(CheckoutPage.imgGOSENDInstant).toBeDisplayed();
    await expect(CheckoutPage.estimationDayGOSENDInstant).toBeDisplayed();
    await expect(CheckoutPage.shippingCostGOSENDInstant).toBeDisplayed();
    await expect(CheckoutPage.radioGOSENDInstant).toBeDisplayed();
    await expect(CheckoutPage.labelTitikLokasiGOSEND).toBeDisplayed();
    await expect(CheckoutPage.addressTitikLokasiGOSEND).toBeDisplayed();
    await expect(CheckoutPage.pesanTitikLokasiGOSEND).toBeDisplayed();
})

Then(/^(.+) shipping method should applied$/, async(shippingMethod) => {
    await expect(CheckoutPage.appliedShippingMethod).toHaveText(shippingMethod);
    await browser.pause(1000);
})

//sandrashipping
Then(/^(.+) shipping method should appeared on breakdown price$/, async(shippingMethod) => {
    await expect(CheckoutPage.shippingMethodBreakdown).toHaveText(shippingMethod);
    await browser.pause(1000);
})

When(/^User select shipping method JNE Regular$/, async() => {
    await CheckoutPage.clickRadioJNERegular();
})

When(/^User select shipping method SiCepat Regular$/, async() => {
    await CheckoutPage.clickRadioSiCepatRegular();
})

//sandra shipping with param
When(/^User select (.+) shipping method$/, async(shippingMethod) => {
    tempShipMethod = shippingMethod;
    await browser.pause(2000);
    await CheckoutPage.clickRadioBtnShipMethod();
    await browser.pause(1000);
    txtShipCost = await CheckoutPage.costShippingMethod.getText();
    numericShipCost = parseInt(txtShipCost.replace(/[^\d]/g, ''), 10);
    console.log("Numeric shipping cost dari list: "+numericShipCost);
})


//sandrashipping
When(/^User select shipping method SAP Express in shipping method$/, async() => {
    await browser.pause(2000);
    await CheckoutPage.clickRadioSAPExpress();
    await browser.pause(1000);
    SAPExpCost = await CheckoutPage.shippingCostSapExpress.getText();
    numericValueSAPExpCost = parseInt(SAPExpCost.replace(/[^\d]/g, ''), 10);
    console.log("Numeric shipping cost dari list: "+numericValueSAPExpCost);
})

//sandrashipping
When(/^User select shipping method GO-SEND Instant$/, async() => {
    await browser.pause(2000);
    await CheckoutPage.clickRadioGOSENDInstant();
    await browser.pause(1000);
    GOSENDInsCost = await CheckoutPage.shippingCostGOSENDInstant.getText();
    numericValueGOSENDInstantCost = parseInt(GOSENDInsCost.replace(/[^\d]/g, ''), 10);
    console.log("Numeric shipping cost dari list: "+numericValueGOSENDInstantCost);
})

Then(/^Voucher section should available$/, async() => {
    await expect(CheckoutPage.labelVoucher).toBeDisplayed();
    await expect(CheckoutPage.btnVoucher).toBeDisplayed();
    await browser.pause(1000);
})

When(/^User click Use Voucher button$/, async() => {
    await CheckoutPage.clickBtnVoucher();
})

Then(/^Popup voucher should open$/, async() => {
    await expect(CheckoutPage.popupVoucher).toBeDisplayed();
    await expect(CheckoutPage.titlePopupVoucher).toBeDisplayed();
    await expect(CheckoutPage.titlePopupVoucher).toHaveText("Voucher For You");
    await expect(CheckoutPage.btnClosePopupVoucher).toBeDisplayed();
    await expect(CheckoutPage.inputVoucherCode).toBeDisplayed();
    await expect(CheckoutPage.btnGunakanVoucher).toBeDisplayed();
    await expect(CheckoutPage.btnSimpanVoucher).toBeDisplayed();
    await browser.pause(1000);
})

When(/^User click button close in popup voucher$/, async() => {
    await CheckoutPage.clickClosePopupVoucher();
})

Then(/^Popup voucher should close$/, async() => {
    await expect(CheckoutPage.popupVoucher).not.toBeDisplayed();
    await browser.pause(1000);
})

Then(/^Poin section should available$/, async() => {
    await expect(CheckoutPage.labelPoin).toBeDisplayed();
    await expect(CheckoutPage.checkboxGunakanPoint).toBeDisplayed();
    await expect(CheckoutPage.labelPoinKamu).toBeDisplayed();
    await expect(CheckoutPage.poinKamu).toBeDisplayed();
    await browser.pause(1000);
})

When(/^User click Gunakan poin$/, async() => {
    await CheckoutPage.clickCheckboxGunakanPoint();
    await browser.pause(3000);
})

Then(/^Field input point should open$/, async() => {
    await expect(CheckoutPage.inputPoin).toBeDisplayed();
})

// When(/^User input point (.+)$/, async(jmlPoin) => {
//     await CheckoutPage.clickinputPoin();
// //    await CheckoutPage.typePoin(jmlPoin);
// // await CheckoutPage.inputPoin.waitForVisible();
// await browser.pause(5000); 
//   await CheckoutPage.fieldinputPoin.waitForClickable();
// await CheckoutPage.fieldinputPoin.setValue('15');
//     // await CheckoutPage.clicklabelPoin();
    
// })

When(/^User input point$/, async() => {
    await CheckoutPage.clickinputPoin();
    await browser.pause(3000);
    // Clear the value so it will become 1, until we found something to simulate the correct behaviour.
    await CheckoutPage.fieldinputPoin.clearValue();
})

Then(/^Redeem point should available in price breakdown$/, async() => {
    await expect(CheckoutPage.labelRedeemPoint).toBeDisplayed();
})

// Then(/^Redeem point value is (.+)$/, async(nominalRedeem) => {
// //     redeem =  CheckoutPage.redeemPoint.getText();
// //     nominalRedeem = redeem.replace(/\D/g, '');
// //     await expect(redeem).isEqual("-Rp "+nominalRedeem);
// // })



Then('Redeem point value is {int}', async (expectedRedeemPoint) => {
// Temukan dan dapatkan nilai teks dari elemen redeempoint
    const redeempointElement = await $('//p[@class="MuiTypography-root MuiTypography-body1 MuiTypography-alignRight mui-style-lf4cym"]');
    const redeempointText = await redeempointElement.getText();
// Konversi nilai teks menjadi integer
    const actualRedeemPoint = parseInt(redeempointText.replace(/[^0-9]/g, ''), 10);
// Hitung nilai redeem point yang diharapkan dengan rumus input point x 1000
    const expectedRedeemPointCalculation = expectedRedeemPoint * 1000;
    textRedeem = "-Rp " + expectedRedeemPointCalculation.toLocaleString();
    textRedeem =  textRedeem.replace(',', '.');
    console.log(textRedeem);
    await expect(CheckoutPage.TotalredeemPoint).toHaveText(textRedeem);

});

// let numericValueCartSubtotal;
Then(/^Total payment using pointshould correct$/, async() => {
    await browser.pause(1000);
    totalbayar =  numericValueCartSubtotal+textRedeem;
    textTotalbayar = "Rp " + totalbayar.toLocaleString();
    textTotalbayar = textTotalbayar.replace(',', '.');
    console.log(textTotalbayar);
    await expect(CheckoutPage.totalWithDonasi).toHaveText(textTotalbayar);
})



Then(/^Donation should available$/, async() => {
    await expect(CheckoutPage.titleDonasi).toBeDisplayed();
    await expect(CheckoutPage.descriptionDonasi).toBeDisplayed();
    await expect(CheckoutPage.btnDonasi).toBeDisplayed();
})

When(/^User click button Ayo Beri Donasi$/, async() => {
    await CheckoutPage.clickBtnDonasi();
})

Then(/^Donation popup should open$/, async() => {
    await browser.pause(1000);
    await expect(CheckoutPage.popupDonation).toBeDisplayed();
    await expect(CheckoutPage.titlePopupDonation).toBeDisplayed();
    await expect(CheckoutPage.btnClosePopupDonation).toBeDisplayed();
//    await expect(CheckoutPage.opsiDonation5k).toBeDisplayed();
//    await expect(CheckoutPage.opsiDonation10k).toBeDisplayed();
//    await expect(CheckoutPage.opsiDonation20k).toBeDisplayed();
//    await expect(CheckoutPage.opsiDonation50k).toBeDisplayed();
//    await expect(CheckoutPage.opsiDonation100k).toBeDisplayed();
//    await expect(CheckoutPage.opsiDonationNominalLain).toBeDisplayed();
    await expect(CheckoutPage.btnHapusDonasi).toBeDisplayed();
    await expect(CheckoutPage.btnBeriDonasi).toBeDisplayed();
})

When(/^User click button close in donation popup$/, async() => {
    await CheckoutPage.clickClosePopupDonation();
})

Then(/^Donation popup should close$/, async() => {
    await expect(CheckoutPage.popupDonation).not.toBeDisplayed();
})

When(/^User select donation value 5000$/, async() => {
    await CheckoutPage.clickOpsiDonation5k();
})

When(/^User click button Beri Donasi$/, async() => {
    await CheckoutPage.clickBeriDonasi();
})

Then(/^Donation (.+) should available in donation section and breakdown price$/, async(donasi) => {
    numericDonasi = parseInt(donasi.replace('.', ''), 10);
    await expect(CheckoutPage.labelDonasimu).toBeDisplayed();
    await expect(CheckoutPage.nominalDonasi).toHaveText("Rp "+donasi);
    await expect(CheckoutPage.labelItemNonPPN).toBeDisplayed();
    if(donasi=='5.000'){
        await expect(CheckoutPage.donationAmount).toHaveText("Rp "+donasi);
    } else if(donasi=='10.000'){
        await expect(CheckoutPage.donationAmount10k).toHaveText("Rp "+donasi);
    } else if(donasi=='1.500'){
        await expect(CheckoutPage.donationAmount1500).toHaveText("Rp "+donasi);
    }
})

When(/^User click Ganti$/, async() => {
    await CheckoutPage.clickGanti();
})

When(/^User select donation value 10000$/, async() => {
    await CheckoutPage.clickOpsiDonation10k();
})

When(/^User select Nominal lain$/, async() => {
    await CheckoutPage.clickOpsiDonationNominalLain();
})

When(/^User input nominal donasi (.+)$/, async(nominalDonasi) => {
    await CheckoutPage.typeDonasi(nominalDonasi);
})

When(/^User click Hapus Donasi$/, async() => {
    await CheckoutPage.clickHapusDonasi();
})

When(/^User click Confirm in popup confirmation$/, async() => {
    await CheckoutPage.clickConfirmPopupDonation();
})

Then(/^Donation amount should not available in donation section and breakdown price$/, async() => {
    await expect(CheckoutPage.labelDonasimu).not.toBeDisplayed();
    await expect(CheckoutPage.labelItemNonPPN).not.toBeDisplayed();
})

When(/^User click Cancel in popup confirmation$/, async() => {
    await CheckoutPage.clickCancelPopupDonation();
})

Then(/^Metode Pembayaran should available$/, async() => {
    await expect(CheckoutPage.titleMetodePembayaran).toBeDisplayed();
})

Then(/^Virtual Account should available$/, async() => {
    await expect(CheckoutPage.tabVirtualAccount).toBeDisplayed();
})

Then(/^Pembayaran Instan should available$/, async() => {
    await expect(CheckoutPage.tabPembayaranInstan).toBeDisplayed();
})

Then(/^Kartu debit kredit should available$/, async() => {
    await expect(CheckoutPage.tabKartuDebitKredit).toBeDisplayed();
})

Then(/^Internet Banking should available$/, async() => {
    await expect(CheckoutPage.tabInternetBanking).toBeDisplayed();
})

When(/^User click Virtual account$/, async() => {
    await CheckoutPage.clickTabVirtualAccount();
})

Then(/^Virtual account BCA option should available$/, async() => {
    await expect(CheckoutPage.radioBCAVA).toBeDisplayed();
})

Then(/^Image virtual account BCA should available$/, async() => {
    await expect(CheckoutPage.imageBCAVA).toBeDisplayed();
})

Then(/^Text virtual account BCA should available$/, async() => {
    await expect(CheckoutPage.textBCAVA).toBeDisplayed();
})

Then(/^Virtual account BNI option should available$/, async() => {
    await expect(CheckoutPage.radioBNIVA).toBeDisplayed();
})

Then(/^Image virtual account BNI should available$/, async() => {
    await expect(CheckoutPage.imageBNIVA).toBeDisplayed();
})

Then(/^Text virtual account BNI should available$/, async() => {
    await expect(CheckoutPage.textBNIVA).toBeDisplayed();
})

Then(/^Virtual account Permata option should available$/, async() => {
    await expect(CheckoutPage.radioPermataVA).toBeDisplayed();
})

Then(/^Image virtual account Permata should available$/, async() => {
    await expect(CheckoutPage.imagePermataVA).toBeDisplayed();
})

Then(/^Text virtual account Permata should available$/, async() => {
    await expect(CheckoutPage.textPermataVA).toBeDisplayed();
})

Then(/^Virtual account Mandiri option should available$/, async() => {
    await expect(CheckoutPage.radioMandiriVA).toBeDisplayed();
})

Then(/^Image virtual account Mandiri should available$/, async() => {
    await expect(CheckoutPage.imageMandiriVA).toBeDisplayed();
})

Then(/^Text virtual account Mandiri should available$/, async() => {
    await expect(CheckoutPage.textMandiriVA).toBeDisplayed();
})

Then(/^Virtual account BRI option should available$/, async() => {
    await expect(CheckoutPage.radioBRIVA).toBeDisplayed();
})

Then(/^Image virtual account BRI should available$/, async() => {
    await expect(CheckoutPage.imageBRIVA).toBeDisplayed();
})

Then(/^Text virtual account BRI should available$/, async() => {
    await expect(CheckoutPage.textBRIVA).toBeDisplayed();
})

When(/^User click Pembayaran instan$/, async() => {
    await CheckoutPage.clickTabPembayaranInstan();
})

Then(/^Gopay option should available$/, async() => {
    await expect(CheckoutPage.radioGopay).toBeDisplayed();
})

Then(/^Image gopay should available$/, async() => {
    await expect(CheckoutPage.imageGopay).toBeDisplayed();
})

Then(/^Text gopay should available$/, async() => {
    await expect(CheckoutPage.textGopay).toBeDisplayed();
})

Then(/^Shopeepay option should available$/, async() => {
    await expect(CheckoutPage.radioShopeepay).toBeDisplayed();
})

Then(/^Image shopeepay should available$/, async() => {
    await expect(CheckoutPage.imageShopeepay).toBeDisplayed();
})

Then(/^Text shopeepay should available$/, async() => {
    await expect(CheckoutPage.textShopeepay).toBeDisplayed();
})

When(/^User click Kartu debit kredit$/, async() => {
    await CheckoutPage.clickTabKartuDebitKredit();
})

Then(/^Credit card option should available$/, async() => {
    await expect(CheckoutPage.radioCC).toBeDisplayed();
})

Then(/^Image credit card should available$/, async() => {
    await expect(CheckoutPage.imageCC).toBeDisplayed();
})

Then(/^Text credit card should available$/, async() => {
    await expect(CheckoutPage.textCC).toBeDisplayed();
})

When(/^User click Internet Banking$/, async() => {
    await CheckoutPage.clickTabInternetBanking();
})

Then(/^Klik BCA option should available$/, async() => {
    await expect(CheckoutPage.radioKlikBCA).toBeDisplayed();
})

Then(/^Image Klik BCA should available$/, async() => {
    await expect(CheckoutPage.imageKlikBCA).toBeDisplayed();
})

Then(/^Text Klik BCA should available$/, async() => {
    await expect(CheckoutPage.textKlikBCA).toBeDisplayed();
})

Then(/^Octo Clicks option should available$/, async() => {
    await expect(CheckoutPage.radioOcto).toBeDisplayed();
})

Then(/^Image Octo Clicks should available$/, async() => {
    await expect(CheckoutPage.imageOcto).toBeDisplayed();
})

Then(/^Text Octo Clicks should available$/, async() => {
    await expect(CheckoutPage.textOcto).toBeDisplayed();
})

Then(/^Total payment using (.+) should correct$/, async(paymentMethod) => {
    await browser.pause(1000);
    total = numericValueCartSubtotal+numericValueSAPRegCost;
    textTotal = "Rp " + total.toLocaleString();
    textTotal = textTotal.replace(',', '.');
    console.log(textTotal);
    await expect(CheckoutPage.totalWithoutPromo).toHaveText(textTotal);
})


//sandrashipping
Then(/^Total payment on breakdown price should correct$/, async() => {
    await browser.pause(3000);
    var nilaiSubtotalCart;
    const cartCustSubtotal = await CartPage.subtotalShippingCart.getText();
    const txtCostShip = await CheckoutPage.priceBreakdownShippingCost.getText();
    nilaiSubtotalCart = parseInt(cartCustSubtotal.replace(/[^\d]/g, ''), 10);
    nilaiCostBreakdownPrice = parseInt(txtCostShip.replace(/[^\d]/g, ''), 10);
    console.log("Doooorr! nilaiSubtotalCart= "+nilaiSubtotalCart+" dan nilaiCostBreakdownPrice= "+nilaiCostBreakdownPrice);
    total = nilaiSubtotalCart+nilaiCostBreakdownPrice;
    textTotal = "Rp " + total.toLocaleString();
    textTotal = textTotal.replace(',', '.');
    console.log("Doooorr! textTotal"+textTotal);
    await expect(CheckoutPage.totalPembayaran).toHaveText(textTotal);
})


Then(/^(.+) shipping method should available in price breakdown$/, async(ShippingMethod) => {
    await expect(CheckoutPage.priceBreakdownShippingMethod).toHaveText(ShippingMethod);
})

Then(/^Shipping cost using SAP Regular should correct$/, async() => {
    let shippingCost = await CheckoutPage.shippingCostSapRegular.getText();
    await expect(CheckoutPage.priceBreakdownShippingCost).toHaveText(shippingCost);
})

//sandrashipping
Then(/^Shipping cost (.+) on breakdown price should correct$/, async(breakdownShipping) => {
    //console.log("Shipping method yang digunakan" + breakdownShipping);
    console.log("Shipping cost "+breakdownShipping+" pada list shipping method: "+txtShipCost);
        await expect(CheckoutPage.priceBreakdownShippingCost).toHaveText(txtShipCost);
})

//sandrashipping
Then(/^Shipping cost using SAP Express should correct$/, async() => {
    await expect(CheckoutPage.priceBreakdownShippingCost).toHaveText("Rp 13.000");
})

When(/^User select credit card$/, async() => {
    await CheckoutPage.clickCreditCard();
})

When(/^User input nomor kartu (.+)$/, async(nomorKartu) => {
    await CheckoutPage.typeFieldCCNumber(nomorKartu);
})

When(/^User input tanggal kadaluarsa (.+)$/, async(exp) => {
    await CheckoutPage.typeFieldCardExp(exp);
})

When(/^User input cvv (.+)$/, async(cvv) => {
    await CheckoutPage.typeFieldCVV(cvv);
})

When(/^User select payment method Internet Banking$/, async() => {
    await CheckoutPage.clickTabInternetBanking();
    await CheckoutPage.clickRadioOcto();
})

When(/^User click Pay now$/, async() => {
    const my_frame = await $("//iframe[@id='snap-midtrans']");
    browser.switchToFrame(my_frame);
    // await expect($("//body[@id='snap-body']")).toBeDisplayed();
    await expect($("//div[@id='application']")).toBeDisplayed();
    await $("//button[text()='Pay now']").click();
//    browser.switchToParentFrame();
})

When(/^User input account id (.+)$/, async(accountid) => {
    browser.switchToParentFrame();
    const handles = await browser.getWindowHandles();
    // await browser.switchToWindow(handles[1]);
    // await $("#inputMerchantId").click();
    // await browser.keys(['Control','v']);
    // await $("//input[@value='Inquire']").click();
    // await $("//input[@value='Pay']").click();
    // await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await browser.pause(1000);
    await CheckoutPage.typeoctoAccountID(accountid);
})

When(/^User click button Bayar$/, async() => {
    await CheckoutPage.clickOctoBayar();
})

Then(/^Transaction using Octo success$/, async() => {
    await expect(CheckoutPage.alertOctoSuccess).toHaveText('Transaksi Sukses');
}) 

When(/^User click Kembali ke website merchant$/, async() =>{
    await CheckoutPage.clickOctoKembaliKeMerchant();
})

Then(/^Transaction detail page should open with status paid$/, async() => {
    await expect(TransactionPage.breadcrumbMyTransaction).toBeDisplayed();
    await expect(TransactionPage.titleTransactionDetail).toBeDisplayed();
    await expect(TransactionPage.textStatusPaid).toBeDisplayed();
})

Then(/^Total payment with donation should correct$/, async() => {
    await browser.pause(1000);
    let total = numericValueCartSubtotal+numericValueSAPRegCost+numericDonasi;
    let textTotal = "Rp " + total.toLocaleString();
    textTotal = textTotal.replace(',', '.');
    await expect(CheckoutPage.totalWithDonasi).toHaveText(textTotal);
})

Then(/^Total payment with applied cart rule promo should correct$/, async() => {
    await browser.pause(1000);
    await expect(CheckoutPage.promoTagCartRuleArber).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleArber).toHaveText("Disc 15%");
    let total = (numericValueCartSubtotal+numericValueSAPRegCost)-promoAmount;
    let textTotal = "Rp " + total.toLocaleString().replace(',', '.');
    await expect(CheckoutPage.totalWithPromo).toHaveText(textTotal);
})

Then(/^Total payment with applied catalog rule and cart rule promo should correct$/, async() => {
    await browser.pause(1000);
    await expect(CheckoutPage.promoTagCartRuleArber).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleArber).toHaveText("Disc 15%");
    await expect(CheckoutPage.promoTagCartRuleBanana).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleBanana).toHaveText("Disc 15%");
    await expect(CheckoutPage.promoTagCatalogBanana).toBeDisplayed();
    await expect(CheckoutPage.promoTagCatalogBanana).toHaveText("(Test QA) Diskon exclude Mobile Apps 20RB");
    let total = (numericValueCartSubtotalCartCat+numericValueSAPRegCost)-promoAmountCatCart;
    let textTotal = "Rp " + total.toLocaleString().replace(/,/g, '.');
    await expect(CheckoutPage.totalWithPromo).toHaveText(textTotal);
})

When(/^User skip GWP option$/, async() => {
    await browser.pause(1000);
    await CheckoutPage.clickLewatiGWP();
    await CheckoutPage.clickYakinConfirmGWP();
})

Then(/^Total payment with cart rule combination promo should correct$/, async() => {
    await browser.pause(1000);
    await expect(CheckoutPage.promoTagCartRuleCooling).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleCooling).toHaveText("Diskon 50%");
    await expect(CheckoutPage.promoTagCartRuleDoubleEnded).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleDoubleEnded).toHaveText("Diskon 150K");
    await expect(CheckoutPage.promoTagCartRuleHairScrunchies).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleHairScrunchies).toHaveText("Diskon 150K");
    let total = (subTotal+numericValueSAPRegCost)-totalPromo;
    let textTotal = "Rp " + total.toLocaleString().replace(/,/g, '.');
    await expect(CheckoutPage.totalWithPromo).toHaveText(textTotal);
})

Then(/^Catalog promo tag should available$/, async() => {
    await expect(CheckoutPage.promoTagCatalogGinger).toBeDisplayed();
    await expect(CheckoutPage.promoTagCatalogGinger).toHaveText("(Test QA) Diskon exclude Mobile Apps 20RB");
})

When(/^User click Use Vouchers$/, async() => {
    await CheckoutPage.clickUseVoucher();
})

When(/^User click button Simpan$/, async() => {
    await CheckoutPage.clickSimpanVoucher();
})

Then(/^Applied voucher 30K should available in voucher section and breakdown price$/, async() => {
    await expect(CheckoutPage.appliedVoucher30K).toBeDisplayed();
    await expect(CheckoutPage.labelVouchers).toBeDisplayed();
    await expect(CheckoutPage.voucherAmount).toHaveText("-Rp 30.000");
    const vou = await CheckoutPage.voucherAmount.getText();
    nilaiVoucher = parseInt(vou.replace(/[^\d]/g, ''), 10);
})

Then(/^Applied QA voucher 100K should available in voucher section and breakdown price$/, async() => {
    await expect(CheckoutPage.appliedVoucher100K).toBeDisplayed();
    await expect(CheckoutPage.labelVouchers).toBeDisplayed();
    await expect(CheckoutPage.voucherAmount).toHaveText("-Rp 100.000");
    const vou = await CheckoutPage.voucherAmount.getText();
    nilaiVoucher = parseInt(vou.replace(/[^\d]/g, ''), 10);
})

When(/^User click Voucher 30K$/, async() => {
    await CheckoutPage.clickVoucher30K();
})

When(/^User click QA voucher 100K$/, async() => {
    await CheckoutPage.clickVoucher100K();
})

Then(/^Total payment checkout voucher donation cart catalog should correct$/,async() => {
    // await expect(CheckoutPage.promoTagCartRuleArber).toBeDisplayed();
    // await expect(CheckoutPage.promoTagCartRuleArber).toHaveText("Disc 15%");
    await expect(CheckoutPage.promoTagCartRuleAloe50).toHaveText("Diskon 50%");
    await expect(CheckoutPage.promoTagCartRuleAloe15).toHaveText("Disc 15%");
    await expect(CheckoutPage.promoTagCartRuleBlackMusk).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleBlackMusk).toHaveText("Disc 15%");
    await expect(CheckoutPage.promoTagCartRuleBanana).toBeDisplayed();
    await expect(CheckoutPage.promoTagCartRuleBanana).toHaveText("Disc 15%");
    await expect(CheckoutPage.promoTagCatalogBanana).toBeDisplayed();
    await expect(CheckoutPage.promoTagCatalogBanana).toHaveText("(Test QA) Diskon exclude Mobile Apps 20RB");
    let total = valueCartSubTotal + numericValueSAPRegCost + numericDonasi - totalPromo - nilaiVoucher;
    let textTotal = "Rp " + total.toLocaleString().replace(/,/g, '.');
    await expect(CheckoutPage.totalWithPromo).toHaveText(textTotal);
})

When(/^User pay with BCA VA$/, async() => {
    await browser.pause(2000);
    await CartPage.clickBayar();
    const my_frame = await $("//iframe[@id='snap-midtrans']");
    await browser.switchToFrame(my_frame);
    // await expect($("//body[@id='snap-body']")).toBeDisplayed();
    await expect($("//div[@id='application']")).toBeDisplayed();
    await $("//div[@class='float-right clickable copy']").click();
    await browser.newWindow('https://simulator.sandbox.midtrans.com/bca/va/index');
    await browser.maximizeWindow();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await $("#inputMerchantId").click();
    await browser.keys(['Control','v']);
    await $("//input[@value='Inquire']").click();
    await $("//input[@value='Pay']").click();
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await browser.pause(1000);
    // const my_frame = await $("//iframe[@id='snap-midtrans']");
    await browser.switchToFrame(my_frame);
    // await expect($("//body[@id='snap-body']")).toBeDisplayed();
    await expect($("//div[@id='application']")).toBeDisplayed();
    await $("//button[@type='button']").click();
    await browser.switchToParentFrame();
    await browser.pause(2000);
    await expect(CheckoutPage.pageSuccessPayment).toBeDisplayed();
    await browser.pause(2000);
//    let urlString = browser.getUrl();
//    url = new URL(urlString);
//    orderNumber = url.pathname.split('/').pop();
    const nomorPesanan = CheckoutPage.nomorPesanan.getText();
    nomorPesanan.then((text) => {
        let match = text.match(/\d+/);
        orderNumber = match ? match[0] : null;
    });
})

When(/^User pay with Octo$/, async() => {
    await browser.pause(2000);
    await CartPage.clickBayar();
    await expect(CheckoutPage.popupPayment).toBeDisplayed();
    await browser.pause(2000);
    const my_frame = await $("//iframe[@id='snap-midtrans']");
    await browser.switchToFrame(my_frame);
    // await expect($("//body[@id='snap-body']")).toBeDisplayed();
    await expect($("//div[@id='application']")).toBeDisplayed();
    await $("//button[text()='Pay now']").click();
    await browser.switchToParentFrame();
    const handles = await browser.getWindowHandles();
    // await browser.switchToWindow(handles[1]);
    // await $("#inputMerchantId").click();
    // await browser.keys(['Control','v']);
    // await $("//input[@value='Inquire']").click();
    // await $("//input[@value='Pay']").click();
    // await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
    await browser.pause(1000);
    await CheckoutPage.typeoctoAccountID("testuser00");
    await CheckoutPage.clickOctoBayar();
    await expect(CheckoutPage.alertOctoSuccess).toHaveText('Transaksi Sukses');
    await CheckoutPage.clickOctoKembaliKeMerchant();
})

When(/^User click close icon$/, async() => {
    await browser.pause(2000);
//    await CheckoutPage.clickBackToMerchant();

//    await $("//iframe[@id='snap-midtrans']").isDisplayed();
//    const iframe = $("//iframe[@id='snap-midtrans']"); /* const variable named as iframe is created and
//                                         iframe id is assigned to iframe
//                                      */
//    iframe.scrollIntoView();
//    browser.switchToFrame(iframe);
//    $("//button[@type='button']").click();
//    browser.pause(3000);
//    browser.switchToParentFrame();

//    browser.waitForExist("//iframe[@id='snap-midtrans']");
//    var my_frame = $("//iframe[@id='snap-midtrans']").value;
//    browser.frame(my_frame);
//    browser.$("#snap-midtrans").frame();
    const my_frame = await $("//iframe[@id='snap-midtrans']");
    await browser.switchToFrame(my_frame);
    // await expect($("//body[@id='snap-body']")).toBeDisplayed();
    await expect($("//div[@id='application']")).toBeDisplayed();
    // await $("//button[@type='button']").click();
    await $("//div[@class='close-snap-button clickable']").click();
    await browser.switchToParentFrame();
});
