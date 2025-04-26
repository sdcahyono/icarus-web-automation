const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class CheckoutPage extends Page{

    get radioSAPRegular(){
//        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1bqce4r'])[1]");
        //return $("(//p[normalize-space()='SAP Regular'])[1]");
        return $("(//p[text()='SAP Regular'])/parent::div/parent::div/parent::div/parent::span/preceding-sibling::span");
    }

    get tabVirtualAccount(){
        return $("//div[@title='Virtual Account']");
    }

    get radioBCAVA(){
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[1]");
        
    }

    get popupPayment(){
        return $("//iframe[@id='snap-midtrans']");
    }

    get btnBackToMerchant(){
//        var iframe = $("//iframe[@id='snap-midtrans']");
        return $("//iframe[@id='snap-midtrans']//button[text()='Back to merchant']");
    }

    get pageWaitingPayment(){
        return $("//h4[text()='Menunggu Pembayaran']");
    }

    get titleMidtrans(){
        return $("//div[@class='merchant-name']");
    }

    get vaNumberfield(){
        return $("#vaField");
    }

    get btnCopyVaNumber(){
        return $("//div[@class='float-right clickable copy']");
    }

    get btnLakukanPembayaran(){
        return $("(//button[normalize-space()='Lakukan Pembayaran'])[1]");
    }

    get pageSuccessPayment(){
        return $("//h4[normalize-space()='Pembayaran Berhasil']");
    }

    get btnCekStatusPesanan(){
        return $("(//button[normalize-space()='Cek Status Pesanan'])[1]");
    }

    get titleSendAsGift(){
        return $("//h4[normalize-space()='Send As Gift']");
    }

    get btnInfoSAG(){
        return $("//button[@aria-label='info']");
    }

    get titleInfoSAG(){
        return $("//h5[normalize-space()='Informasi Send As Gift']");
    }

    get infoSAG(){
        return $("(//span[@class='MuiTypography-root MuiTypography-caption mui-style-a81z2u'])[1]");
    }

    get btnTambahKartuUcapan(){
        return $("(//button[normalize-space()='Tambahkan Kartu Ucapan'])[1]");
    }

    get formKartuUcapan(){
        return $("//div[@role='dialog']");
    }

    get formHeaderKartuUcapan(){
        return $("(//h2[normalize-space()='Kartu Ucapan'])[1]");
    }

    get imgGreetingcard1(){
        return $("(//span[@class='MuiButtonBase-root MuiRadio-root MuiRadio-colorDefault PrivateSwitchBase-root MuiRadio-root MuiRadio-colorDefault mui-style-1e162g'])[1]")
    }

    get imgGreetingcard2(){
        return $("(//div[@class='mui-style-em2j9n'])[1]");
    }

    get inputFieldDari(){
        return $("//input[@id='from']");
    }

    get inputFieldUntuk(){
        return $("//input[@id='to']");
    }

    get inputFieldPesan(){
        return $("//textarea[@id='remark']")
    }

    get btnSave(){
        return $("(//button[normalize-space()='Save'])[1]");
    }

    get listGreetingCard(){
        return $("//div[@class='mui-style-uudpsy']");
    }

    get priceBreakdownGreetingCard(){
        return $("//h5[normalize-space()='Greeting Card']");
    }

    get priceGreetingCard(){
        return $("//p[normalize-space()='Rp 0']")
    }

    get btnEditGreetingCard(){
        return $("(//button[normalize-space()='Ubah Kartu Ucapan'])[1]");
    }

    get btnDiscard(){
        return $("(//button[normalize-space()='Discard'])[1]");
    }

    get btnDiscardConfirm(){
        return $("//button[@class='MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeLarge MuiButton-textSizeLarge MuiButton-fullWidth mui-style-1nk29cs']");
    }

    get btnCloseForm(){
        return $("(//button[@type='button'])[7]");
    }

    get btnTrash(){
        return $("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-iyuabp']");
    }

    get btnTidakConfirm(){
        return $("(//button[normalize-space()='Tidak'])[1]");
    }

    get btnYakinConfirm(){
        return $("(//button[normalize-space()='Yakin'])[1]");
    }

    get snackbar(){
        return $("//div[@id='notistack-snackbar']");
    }

    get titleShippingAddressSection(){
        return $("//h4[normalize-space()='Shipping Address']");
    }

    get listboxAddress(){
        return $("//div[@id='addressShipment']");
    }

    //sandra
    get dropdownAddressList() {
        return $("(//ul[@role='listbox'])[1]");
    }

    get btnTambahAlamat(){
        return $("(//button[normalize-space()='Tambah Alamat'])[1]");
    }

    get formTambahAlamatBaru() {
        return $("//div[@role='dialog']");
    }

    get titleFormTambahAlamatBaru() {
        return $("(//h2[normalize-space()='Tambah Alamat Baru'])[1]");
    }

    //sandra
    get titleFormTitikLokasi() {
        return $("(//h2[normalize-space()='Titik Lokasi'])[1]");
    }

    get btnCancelFormAlamat() {
        return $("(//button[normalize-space()='Cancel'])[1]");
    }

    get btnYesImSure() {
        //return $("/html[1]/body[1]/div[4]/div[3]/div[1]/div[1]/button[1]");
        return $("//h3[normalize-space()='Confirm Cancel']/following-sibling::button[1]");
    }

    get helperTextDari() {
        return $("//p[@id='from-helper-text']");
    }

    get helperTextUntuk() {
        return $("//p[@id='to-helper-text']");
    }

    get helperTextPesan() {
        return $("//p[@id='remark-helper-text']");
    }

    get sectionTitlePenerima() {
        return $("//h4[normalize-space()='Penerima']");
    }

    get labelNamaLengkap() {
        return $("//label[@for='recipientName']");
    }

    get inputFieldNamaLengkap() {
        return $("//input[@id='recipientName']");
    }

    get labelNomorPonsel() {
        return $("//label[@for='recipientPhone']");
    }

    get inputFieldNomorPonsel() {
        return $("//input[@id='recipientPhone']");
    }

    get sectionTitleAlamat() {
        return $("//h4[normalize-space()='Alamat']");
    }

    get labelKecamatan() {
        return $("//label[@for='city']");
    }

    get inputFieldKecamatan() {
        return $("//input[@name='city']");
    }

    //sandra
    get clearFieldKecamatan() {
        return $("(//button[@title='Clear'])[1]");
    }

    //sandra
    get clearFieldTitikLokasi() {
        return $("(//button[@title='Clear'])[2]");
        
    }


    get labelKodePos() {
        return $("//label[@for='postalCode']");
    }

    get inputKodePos() {
        return $("//div[@id='postalCode']");
    }

    //sandra
    get dropdownPostalCode() {
        return $("//ul[@role='listbox']");
    }


    get labelAlamatLengkap() {
        return $("//label[@for='street']");
    }

    get inputAlamatLengkap() {
        return $("//textarea[@id='street']");
    }

    get labelTitikLokasi() {
        return $("//label[@for='pinpointAddress']");
    }

    get inputTitikLokasi() {
        //return $("//input[@id='pinpointAddress']");
        return $("//input[@name='location']");
    }

    //sandra
    get inputTitikLokasiFront() {
        return $("//input[@id='pinpointAddress']");
    }

    //sandra
    get buttonAturTitikLokasi() {
        return $("//button[normalize-space()='Atur']");
    }

    //sandra
    get buttonUbahTitikLokasi() {
        return $("//button[normalize-space()='Ubah']");
    }

    //sandra
    get dropdownTitikLokasi() {
        return $("(//input[@role='combobox'])");
    }

    //sandra
    get buttonSimpanTitikLokasi() {
        return $("//button[text()='Simpan']");
    }

    get labelPesanPengiriman() {
        return $("//label[@for='note']");
    }

    get inputPesanPengiriman() {
        return $("//textarea[@id='note']");
    }

    get labelNamaAlamat() {
        return $("//label[@for='addressName']");
    }

    get inputNamaAlamat() {
        return $("//input[@id='addressName']");
    }

    get checkboxSimpanAlamat() {
        return $("//input[@name='isSave']");
//        return $("//input[@type='checkbox']");
    }

    get labelSimpanAlamat() {
        return $("//span[normalize-space()='Simpan Alamat']");
    }

    get btnSaveFormAlamat() {
        return $("(//button[normalize-space()='Save'])[1]");
    }

//    get btnCancelAlamat() {
//        return $("(//button[normalize-space()='Cancel'])[1]");
//    }

    get btnCloseFormAlamat() {
        return $("(//button[@type='button'])[6]");
    }

    get btnCloseFormUbahAlamat() {
        return $("//h2[normalize-space()='Ubah Alamat']/button");
    }


    get opsiKecamatan() {
        return $("//input[@aria-controls='free-solo-2-demo-listbox']");
    }

    get opsiKecamatan2() {
//        return $("//input[@aria-activedescendant='free-solo-2-demo-option-0']");
        //return $("//div[@class='MuiAutocomplete-popper mui-style-1le80r3']");
        return $("(//div[@role='presentation'])[3]");
    }

    get opsiKodePos() {
        return $("//li[@data-value='54473']");
    }

    get shippingAddressNamaLengkap() {
        //return $("(//p[@class='MuiTypography-root MuiTypography-body2 mui-style-bjkkqm'])[1]");
        return $("//h4[text()='Shipping Address']/following-sibling::div[2]/div/div/p[1]"); //sandra
    }

    get shippingAddressNomorPonsel() {
        //return $("(//p[@class='MuiTypography-root MuiTypography-body2 mui-style-1e3oiaj'])[1]");
        return $("//h4[text()='Shipping Address']/following-sibling::div[2]/div/div/p[2]"); //sandra
    }

    get shippingAddressAlamatLengkap() {
        //return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/p[3]");
        return $("//h4[text()='Shipping Address']/following-sibling::div[2]/div/div/p[3]"); //sandra
    }

    get shippingAddressPesanPengiriman() {
        //return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/p[5]");
        return $("//h4[text()='Shipping Address']/following-sibling::div[2]/div/div/p[5]"); //sandra
    }

    get btnUbah() {
        return $("(//button[normalize-space()='Ubah'])[1]");
    }

    get titleFormUbahAlamat() {
        return $("(//h2[normalize-space()='Ubah Alamat'])[1]");
    }

    get helperTextNamaLengkap() {
        return $("//p[@id='recipientName-helper-text']");
    }

    get helperTextNomorPonsel() {
        return $("/html[1]/body[1]/div[3]/div[3]/div[1]/div[1]/form[1]/div[1]/div[1]/div[2]/div[1]/p[1]");
    }

    get helperTextKecamatan() {
        return $("/html[1]/body[1]/div[3]/div[3]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/p[1]");
    }

    get helperTextKodePos() {
        return $("/html[1]/body[1]/div[3]/div[3]/div[1]/div[1]/form[1]/div[1]/div[2]/div[2]/div[1]/p[1]");
    }

    get helperTextAlamatLengkap() {
        return $("//p[@id='street-helper-text']");
    }

    get helperTextNamaAlamat() {
        return $("//p[@id='addressName-helper-text']");
    }

    get titleShippingMethodSection() {
        return $("//h4[normalize-space()='Shipping Method']");
    }

    get labelPengirimanRegular() {
        return $("//p[normalize-space()='Pengiriman Regular']");
    }

    get labelPengirimanExpress() {
        return $("//p[normalize-space()='Pengiriman Express']");
    }   
    
    //sandra
    get labelPengirimanInstant() {
        return $("//p[normalize-space()='Instant']");
    }

    //sandra element param
    get labelTitleMethod() {
        return $("//p[normalize-space()='"+tempLabelMethod+"']");
    }

    //sandra element param
    get labelShippingMethodList() {
        return $("//p[normalize-space()='"+tempShipMethod+"']");
    }
    
    //sandra element param
    get imgShippingMethodList() {
        return $("//img[@alt='"+tempShipMethod+"']");
    }
    
    //sandra element param
    get estimationDayShippingMethod() {
        return $("(//p[text()='"+tempShipMethod+"'])/following-sibling::span");
    }

    //sandra element param
    get costShippingMethod() {
        return $("(//p[text()='"+tempShipMethod+"'])/parent::div/parent::div/following-sibling::h5");
    }

    //sandra element param
    get radioBtnShippingMethod() {
        return $("(//p[text()='"+tempShipMethod+"'])/parent::div/parent::div/parent::div/parent::span/preceding-sibling::span");
    }

    get imgSapRegular() {
        return $("//img[@alt='SAP Regular']");
    }

    get labelSapRegular() {
        return $("//p[normalize-space()='SAP Regular']");
    }

    get estimationDaySapRegular() {
        //return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/label[1]/span[2]/div[1]/div[1]/div[1]/span[1]");
        return $("(//p[text()='SAP Regular'])/following-sibling::span");
    }

    get shippingCostSapRegular() {
        //return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/label[1]/span[2]/div[1]/h5[1]");
        return $("(//p[text()='SAP Regular'])/parent::div/parent::div/following-sibling::h5");
    }

    get shippingCostSiCepatRegular() {
return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/label[3]/span[2]/div[1]/h5[1]");
        // return $("//label[3]//span[2]//div[1]//h5[1]");
    }
///
    get imgSapExpress() {
        return $("//img[@alt='SAP Express']");
    }

    get labelSapExpress() {
        return $("//p[normalize-space()='SAP Express']");
    }

    get estimationDaySapExpress() {
        //return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/label[1]/span[2]/div[1]/div[1]/div[1]/span[1]");
        return $("(//p[text()='SAP Express'])/following-sibling::span");
    }

    get shippingCostSapExpress() {
        //return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/label[1]/span[2]/div[1]/h5[1]");
        return $("(//p[text()='SAP Express'])/parent::div/parent::div/following-sibling::h5");
    }

    //sandrashipping
    get shippingCostGOSENDInstant() {
        return $("(//p[text()='GO-SEND Instant'])/parent::div/parent::div/following-sibling::h5");
    }

    //sandra
    get imgGOSENDInstant() {
        return $("//img[@alt='GO-SEND Instant']");
    }

    //sandra
    get labelGOSENDInstant() {
        return $("//p[normalize-space()='GO-SEND Instant']");
    }

    //sandra
    get estimationDayGOSENDInstant() {
        return $("(//p[text()='GO-SEND Instant'])/following-sibling::span");
    }


    //sandra
    get labelTitikLokasiGOSEND() {
        return $("//h5[normalize-space()='Titik Lokasi untuk GO-SEND']");
    }

    //sandra
    get addressTitikLokasiGOSEND() {
        return $("//h5[normalize-space()='Titik Lokasi untuk GO-SEND']/parent::div/following-sibling::div/p[1]");
    }

    //sandra
    get pesanTitikLokasiGOSEND() {
        return $("//h5[normalize-space()='Titik Lokasi untuk GO-SEND']/parent::div/following-sibling::div/p[3]");
    }


    get appliedShippingMethod() {
        return $("(//p[@class='MuiTypography-root MuiTypography-body1 mui-style-zfwc1c'])[1]");
    }

    //sandrashipping
    get shippingMethodBreakdown() {
        //return $("//*[@id='__next']/div[1]/div/div[2]/div/div[3]/div/section/div/div[2]/div[2]/span/p");
        return $("//h5[text()='Shipping']/parent::div/following-sibling::div/span/p");
    }

    get radioJNERegular() {
        //return $("(//p[normalize-space()='JNE Regular'])[1]");
        return $("(//p[text()='JNE Regular'])/parent::div/parent::div/parent::div/parent::span/preceding-sibling::span");
    }

    get radioSiCepatRegular() {
        //return $("(//p[normalize-space()='SiCepat Regular'])[1]");
        return $("(//p[text()='SiCepat Regular'])/parent::div/parent::div/parent::div/parent::span/preceding-sibling::span");
    }

    get radioSAPExpress() {
        //return $("(//p[@class='MuiTypography-root MuiTypography-body2 mui-style-1chmyew'][normalize-space()='SAP Express'])[1]");
        return $("(//p[text()='SAP Express'])/parent::div/parent::div/parent::div/parent::span/preceding-sibling::span");
    }

    //sandra
    get radioGOSENDInstant() {
        return $("(//p[text()='GO-SEND Instant'])/parent::div/parent::div/parent::div/parent::span/preceding-sibling::span");
    }

    //sandrashipping
    get radioGOSENDInstant(){
        return $("(//p[text()='GO-SEND Instant'])/parent::div/parent::div/parent::div/parent::span/preceding-sibling::span");
    }

    get labelVoucher() {
        return $("//h4[normalize-space()='Voucher']");
    }

    get btnVoucher() {
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]");
    }

    get popupVoucher() {
        return $("//div[@role='dialog']");
    }

    get titlePopupVoucher() {
//        return $("(//h2[normalize-space()='Voucher For You'])[1]");
        return $("(//div[@class='MuiBox-root mui-style-z7mtfw'])[1]")
    }

    get btnClosePopupVoucher() {
        return $("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-iyuabp']");
    }

    get inputVoucherCode() {
        return $("(//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl mui-style-13q0h7c'])[1]");
    }

    get btnGunakanVoucher() {
        return $("(//button[normalize-space()='Gunakan'])[1]");
    }

    get btnSimpanVoucher() {
        return $("(//button[normalize-space()='Simpan'])[1]");
    }

    get labelPoin() {
        return $("//h4[normalize-space()='Poin']");
    }

    get checkboxGunakanPoint() {
        return $("(//span[@class='MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary mui-style-11mtq6l'])[1]");
    }

    get labelPoinKamu() {
        return $("//span[normalize-space()='Poin kamu']");
    }

    get poinKamu() {
        return $("//h4[@class='MuiTypography-root MuiTypography-h4 mui-style-1hd9pzr']");
    }

    get inputPoin() {
//        return $("//input[@placeholder='Masukkan Jumlah Poin']");
        return $("(//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth mui-style-1saty3w'])[1]");
    }

    get fieldinputPoin() {
        return $("//input[@placeholder='Masukkan Jumlah Poin']");
//  return $("(//input[@placeholder='Masukkan Jumlah Poin'])[1]");
        // return $("//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-fullWidth Mui-focused mui-style-1saty3w']");
    }

    get labelRedeemPoint() {
        return $("//h5[normalize-space()='Redeem Point']");
    }

    get redeemPoint() {
        return $("//p[@class='MuiTypography-root MuiTypography-body1 MuiTypography-alignRight mui-style-lf4cym']");
    }
    get TotalredeemPoint() {
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/section[1]/div[1]/div[3]/div[1]/p[1]");
    }

///html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/section[1]/div[1]/div[3]/div[1]/p[1]
    get titleDonasi() {
        return $("//h4[normalize-space()='Donasi']");
//        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/h4[1]");
    }

    get descriptionDonasi() {
//        return $("(//p[@class='MuiTypography-root MuiTypography-body1 mui-style-rxytbn'])[1]");
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/p[1]");
        return $("//h4[text()='Donasi']/following-sibling::p");
    }

    get btnDonasi() {
        // return $("(//button[normalize-space()='Ayo Beri Donasi'])[1]");
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/button[1]");
        return $("//h4[text()='Donasi']/following-sibling::button[contains(text(), 'Ayo Beri Donasi')]");
    }

    get popupDonation() {
        return $("//div[@role='dialog']");
//        return $("/html[1]/body[1]/div[3]/div[3]/div[1]");
    }

    get titlePopupDonation() {
        return $("(//h2[normalize-space()='Donasi'])[1]")
    }

    get btnClosePopupDonation() {
        // return $("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-iyuabp']");
//        return $("/html[1]/body[1]/div[3]/div[3]/div[1]/h2[1]/button[1]");
        return $("//h2[text()='Donasi']/button");
    }

    get opsiDonation5k() {
        return $("//input[@value='5000']");
//        return $("/html[1]/body[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/input[1]")
    }

    get opsiDonation10k() {
        return $("//input[@value='10000']");
    }

    get opsiDonation20k() {
        return $("//input[@value='20000']");
    }

    get opsiDonation50k() {
        return $("//input[@value='50000']");
    }

    get opsiDonation100k() {
        return $("//input[@value='100000']");
    }

    get opsiDonationNominalLain() {
        return $("//input[@value='other']");
    }

    get btnHapusDonasi() {
        return $("(//button[normalize-space()='Hapus Donasi'])[1]");
    }

    get btnBeriDonasi() {
        return $("(//button[normalize-space()='Beri Donasi'])[1]");
    }

    get labelDonasimu() {
        return $("//h6[normalize-space()='Donasimu']");
    }

    get nominalDonasi() {
        // return $("//h2[@class='MuiTypography-root MuiTypography-h2 mui-style-67680p']");
        return $("//h6[text()='Donasimu']/following-sibling::h2");
    }

    get labelItemNonPPN() {
        return $("//h5[normalize-space()='Item Non PPN']");
    }

    get donationAmount() {
        // return $("//p[normalize-space()='Rp 5.000']");
        return $("//h5[text()='Item Non PPN']/following-sibling::p");
    }

    get donationAmount10k() {
        return $("//p[normalize-space()='Rp 10.000']");
    }

    get btnGanti() {
        return $("(//button[normalize-space()='Ganti'])[1]");
    }

    get inputDonasi() {
        return $("//input[@type='text']");
    }

    get donationAmount1500() {
        return $("//p[normalize-space()='Rp 1.500']");
    }

    get btnConfirmPopupDonation() {
        return $("(//button[normalize-space()='Confirm'])[1]");
    }

    get btnCancelPopupDonation() {
        return $("(//button[normalize-space()='Cancel'])[1]");
    }

    get titleMetodePembayaran() {
        return $("//h4[normalize-space()='Metode Pembayaran']");
    }

    get tabPembayaranInstan(){
        return $("//div[@title='Pembayaran Instan']");
    }

    get tabKartuDebitKredit(){
        return $("//div[@title='Kartu Debit/Kredit']");
    }

    get tabInternetBanking(){
        return $("//div[@title='Internet Banking']");
    }

    get imageBCAVA() {
        return $("//img[@alt='Virtual Account BCA']");
    }

    get textBCAVA() {
        return $("//h6[normalize-space()='Virtual Account BCA']");
    }

    get radioBNIVA() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[2]");
    }

    get imageBNIVA() {
        return $("//img[@alt='Virtual Account BNI']");
    }

    get textBNIVA() {
        return $("//h6[normalize-space()='Virtual Account BNI']");
    }

    get radioPermataVA() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[3]");
    }

    get imagePermataVA() {
        return $("//img[@alt='Virtual Account Permata']");
    }

    get textPermataVA() {
        return $("//h6[normalize-space()='Virtual Account Permata']");
    }

    get radioMandiriVA() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[4]");
    }

    get imageMandiriVA() {
        return $("//img[@alt='Virtual Account Mandiri']");
    }

    get textMandiriVA() {
        return $("//h6[normalize-space()='Virtual Account Mandiri']");
    }

    get radioBRIVA() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[5]");
    }

    get imageBRIVA() {
        return $("//img[@alt='Virtual Account BRI']");
    }

    get textBRIVA() {
        return $("//h6[normalize-space()='Virtual Account BRI']");
    }

    get radioGopay() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[6]");
    }

    get imageGopay() {
        return $("//img[@alt='Gopay']");
    }

    get textGopay() {
        return $("//h6[normalize-space()='Gopay']");
    }

    get radioShopeepay() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[7]");
    }

    get imageShopeepay() {
        return $("//img[@alt='ShopeePay QRIS']");
    }

    get textShopeepay() {
        return $("//h6[normalize-space()='ShopeePay QRIS']");
    }

    get radioCC() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[8]");
    }

    get imageCC() {
        return $("//img[@alt='Credit Card']");
    }

    get textCC() {
        return $("//h6[normalize-space()='Credit Card']");
    }

    get radioKlikBCA() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[9]");
    }

    get imageKlikBCA() {
        return $("//img[@alt='Klik BCA']");
    }

    get textKlikBCA() {
        return $("//h6[normalize-space()='Klik BCA']");
    }

    get radioOcto() {
        return $("(//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mui-style-1fky6vw'])[10]");
    }

    get imageOcto() {
        return $("//img[@alt='Octo Clicks']");
    }

    get textOcto() {
        return $("//h6[normalize-space()='Octo Clicks']");
    }

    get totalWithoutPromo() {
//        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/section[1]/div[1]/div[3]/h4[2]");
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/section[1]/div[1]/div[3]/h4[2]");
        // return $("//h4[normalize-space()='Rp 137.000']");
        return $("//h4[text()='Total']/following-sibling::h4");
    }

    //sandra
    get totalPembayaran() {
        return $("//h4[normalize-space()='Total']/following-sibling::h4");
    }

    get priceBreakdownShippingMethod() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/section[1]/div[1]/div[2]/div[2]/span[1]/p[1]");
        return $("//h5[text()='Shipping']/parent::div/following-sibling::div/span/p");
    }

    get priceBreakdownShippingCost() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/section[1]/div[1]/div[2]/div[2]/p[1]");
        return $("//h5[text()='Shipping']/parent::div/following-sibling::div/p");
    }

    get nomorPesanan() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/h5[1]");
        return $("//h5[contains(text(), 'Nomor Pesanan')]");
    }

    get inputFieldCCNumber() {
        return $("//input[@id='card_number']");
    }

    get inputFieldCardExp() {
        return $("//input[@id='card_exp']");
    }

    get inputFieldCVV() {
        return $("//input[@id='cvv']");
    }

    get octoAccountID() {
        return $("//input[@id='account']");
        // return $("/html[1]/body[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]");
    }

    get btnOctoBayar() {
        return $("//button[normalize-space()='Bayar']");
    }

    get alertOctoSuccess() {
        return $("//div[@class='alert alert-success']");
    }

    get btnOctoKembaliKeMerchant() {
        return $("//button[normalize-space()='Kembali ke website Merchant']");
    } 

    get totalWithDonasi() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/section[1]/div[1]/div[4]/h4[2]");
        return $("//h4[text()='Total']/following-sibling::h4");
    }

    get totalWithPromo() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/section[1]/div[1]/div[4]/h4[2]");
        return $("//h4[text()='Total']/following-sibling::h4");
    }

    get btnLewatiGWP() {
        return $("(//button[normalize-space()='Lewati'])[1]");
    }

    get btnYakinConfirmGWP() { 
        return $("(//button[normalize-space()='Yakin'])[1]");
    }

    get promoTagCartRuleArber() {
        return $("//h5[text()='ARBER EAU DE TOILETTE 100ML']/parent::div/following-sibling::div[1]/div");
    }

    get promoTagCartRuleCooling() {
        return $("//h5[text()='COOLING CUCUMBER EYE SHEET MASK 2X6ML']/parent::div/following-sibling::div[1]/div");
    }

    get promoTagCartRuleDoubleEnded() {
        return $("//h5[text()='DOUBLE ENDED BLACKHEAD REMOVER']/parent::div/following-sibling::div[1]/div");
    }

    get promoTagCartRuleHairScrunchies() {
        return $("//h5[text()='HAIR SCRUNCHIES']/parent::div/following-sibling::div[1]/div");
    }

    get promoTagCatalogGinger() {
        return $("//h5[text()='GINGER CONDITIONER 250ML']/parent::div/following-sibling::div[1]/div");
    }

    get promoTagCartRuleBanana() {
        return $("//h5[text()='BANANA CONDITIONER 250ML']/parent::div/following-sibling::div[1]/div[1]");
    }

    get promoTagCatalogBanana() {
        return $("//h5[text()='BANANA CONDITIONER 250ML']/parent::div/following-sibling::div[1]/div[2]");
    }

    get btnUseVouchers() {
        return $("//p[text()='Use Vouchers']/parent::div/parent::div/parent::button");
    }

    get opsiVoucher30K() {
        return $("//div[text()='Voucher 30K']/parent::h4/parent::div/parent::div/parent::button[1]");
    }

    get btnSimpanVoucher() {
        return $("//button[text()='Simpan']");
    }

    get appliedVoucher30K() {
        return $("//p[text()='Voucher 30K']/parent::div/parent::p/parent::div/parent::div");
    }

    get labelVouchers() {
        return $("//h5[text()='Vouchers']");
    }

    get voucherAmount() {
        return $("//h5[text()='Vouchers']/parent::div/following-sibling::div/p");
    }

    get promoTagCartRuleBlackMusk() {
        return $("//h5[text()='BLACK MUSK EDP 30ML']/parent::div/following-sibling::div[1]/div");
    }

    get opsiVoucher100K() {
        return $("//div[text()='QA voucher 100K']/parent::h4/parent::div/parent::div/parent::button[1]");
    }

    get appliedVoucher100K() {
        return $("//p[text()='QA voucher 100K']/parent::div/parent::p/parent::div/parent::div");
    }

    get promoTagCartRuleAloe50() {
        return $("//h5[text()='ALOE CREAM CLEANSER 125ML']/parent::div/following-sibling::div[1]/div[1]");
    }

    get promoTagCartRuleAloe15() {
        return $("//h5[text()='ALOE CREAM CLEANSER 125ML']/parent::div/following-sibling::div[1]/div[2]");
    }


    //sandra click param
    async clickRadioBtnShipMethod(){
        await this.radioBtnShippingMethod.click();
    }

    async clickRadioSAPRegular(){
        await this.radioSAPRegular.click();
    }

    async clickRadioJNERegular(){
        await this.radioJNERegular.click();
    }

    async clickRadioSiCepatRegular(){
        await this.radioSiCepatRegular.click();
    }

    async clickRadioSAPExpress(){
        await this.radioSAPExpress.click();
    }

    //sandrashipping
    async clickRadioGOSENDInstant(){
        await this.radioGOSENDInstant.click();
    }

    async clickTabVirtualAccount(){
        await this.tabVirtualAccount.click();
    }

    async clickRadioBCAVA(){
        // await this.radioBCAVA.click();
        (await this.textBCAVA).click();
    }

    async clickBackToMerchant(){
//        let frame= browser.$("//iframe[@id='snap-midtrans']");
//        browser.pause(2000);
//        browser.switchToFrame(frame);
//        browser.setTimeout({ 'implicit': 10000 })
//        let clickBackToMerchant =   $("//button[text()='Back to merchant']");
//        clickBackToMerchant.click();
//        browser.switchToParentFrame();
//        await this.btnBackToMerchant.click();
        $("//iframe[@id='snap-midtrans']").isDisplayed();
        const iframe = $("//iframe[@id='snap-midtrans']");
        iframe.scrollIntoView();
        browser.switchToFrame(iframe);
        $("//button[@type='button']").click();
        browser.pause(3000);
        browser.switchToParentFrame();
    }

    async clickLakukanPembayaran(){
        await this.btnLakukanPembayaran.click();
    }

    async clickCopyVaNumber(){
//        $("//iframe[@id='snap-midtrans']").isDisplayed();
//        const iframe = $("//iframe[@id='snap-midtrans']");
//        iframe.scrollIntoView();
//        browser.switchToFrame(iframe);
//        $("//div[@class='float-right clickable copy']").click();
//        browser.pause(2000);
//        browser.switchToParentFrame();
    }

    async clickCekStatusPesanan(){
        await this.btnCekStatusPesanan.click();
    }

    async clickInfoSAG(){
        await this.btnInfoSAG.click();
    }

    async clickTambahKartuUcapan(){
        await this.btnTambahKartuUcapan.click();
    }

    async clickimgGreetingcard2(){
        await this.imgGreetingcard2.click();
    }

    async typeDari(dari) {
        await this.inputFieldDari.setValue(dari);
    }

    async typeUntuk(untuk) {
        await this.inputFieldUntuk.setValue(untuk);
    }

    async typePesan(pesan) {
        await this.inputFieldPesan.setValue(pesan);
    }

    async clickSave() {
        await this.btnSave.click();
    }

    async clickTitleSendAsGift() {
        await this.titleSendAsGift.click();
    }

    async clickEditGreetingCard() {
        await this.btnEditGreetingCard.click();
    }

    async clickDiscard() {
        await this.btnDiscard.click();
    }

    async clickDiscardConfirm(){
        await this.btnDiscardConfirm.click();
    }

    async clickCloseForm(){
        await this.btnCloseForm.click();
    }

    async clickTrash(){
        await this.btnTrash.click();
    }

    async clickTidakConfirm(){
        await this.btnTidakConfirm.click();
    }

    async clickYakinConfirm(){
        await this.btnYakinConfirm.click();
    }

    async clicklistboxAddress(){
        await this.listboxAddress.click();
    }

    async clickTambahAlamat() {
        await this.btnTambahAlamat.click();
    }

    async clickCancelFormAlamat() {
        await this.btnCancelFormAlamat.click();
    }

    async clickYesImSure() {
        await this.btnYesImSure.click();
    }

    async typeNamaLengkap(namalengkap) {
        await this.inputFieldNamaLengkap.setValue(namalengkap);
    }

    //sandra
    async clearNamaLengkap () {
        await this.inputFieldNamaLengkap.clearValue();
    }

    async typeNomorPonsel(nomor) {
        await this.inputFieldNomorPonsel.setValue(nomor);
    }

    //sandra
    async clearNomorPonsel () {
        await this.inputFieldNomorPonsel.clearValue();
    }

    async typeKecamatan(kecamatan) {
        await this.inputFieldKecamatan.setValue(kecamatan);
    }

    //Sandra
    async clickClearKecamatan() {
        await this.clearFieldKecamatan.click();
    }

    //sandra
    async typeKecamatan2(kecamatan) {
        await this.inputFieldKecamatan.click();
        browser.keys(kecamatan);
        await browser.pause(3000);
        browser.keys(',');
    }

    async clickinputKodePos() {
        await this.inputKodePos.click();
    }

    async clickOpsiKodePos() {
        await this.opsiKodePos.click();
    }

    async typeAlamatLengkap(alamatlengkap) {
        await this.inputAlamatLengkap.setValue(alamatlengkap);
    }

    //sandra
    async clearAlamatLengkap () {
        await this.inputAlamatLengkap.clearValue();
    }

    //sandra
    async clickAturTitikLokasi() {
        await this.buttonAturTitikLokasi.click();
    }

    //sandra
    async clickUbahTitikLokasi() {
        await this.buttonUbahTitikLokasi.click();
    }

    //sandra
    async clickTitikLokasiFront() {
        await this.inputTitikLokasiFront.click();
    }

    //sandra
    async typeTitikLokasi(titikLokasi) {
        await this.inputTitikLokasi.setValue(titikLokasi);
    }

    //sandra
    async clickClearTitikLokasi() {
        await this.clearFieldTitikLokasi.click();
    }

    //sandra
    async clickSimpanTitikLokasi() {
        await this.buttonSimpanTitikLokasi.click();
    }

    async typePesanPengiriman(pesan) {
        await this.inputPesanPengiriman.setValue(pesan);
    }

    //sandra
    async clearPesanPengiriman () {
        await this.inputPesanPengiriman.clearValue();
    }

    async typeNamaAlamat(namaalamat) {
        await this.inputNamaAlamat.setValue(namaalamat);
    }

    //sandra
    async clearNamaAlamat () {
        await this.inputNamaAlamat.clearValue();
    }

    //sandra
    async clickCheckboxSimpanAlamat() {
        await this.checkboxSimpanAlamat.click();
    }

    async clickSaveFormAlamat() {
        await this.btnSaveFormAlamat.click();
    }

    //sandra
    async clickAlamatUser() {
        await this.listboxAddress.click();
    }

    async clickUbah() {
        await this.btnUbah.click();
    }

    async clickBtnVoucher() {
        await this.btnVoucher.click();
    }

    async clickClosePopupVoucher() {
        await this.btnClosePopupVoucher.click();
    }

    async clickCheckboxGunakanPoint() {
        await this.checkboxGunakanPoint.click();
    }

    async typePoin(jmlPoin) {
        await this.fieldinputPoin.addValue(jmlPoin);
    }

    async getRedeemPointValue() {
        redeem =  this.redeemPoint.getText();
        nominalRedeem = redeem.replace(/\D/g, '');
    }

    async clicklabelPoin(){
        await this.labelPoin.click();
    }

    async clickinputPoin(){
        await this.inputPoin.click();
    }

    async clickBtnDonasi() {
        await this.btnDonasi.click();
    }

    async clickClosePopupDonation() {
        await this.btnClosePopupDonation.click();
    }

    async clickOpsiDonation5k() {
        await this.opsiDonation5k.click();
    }

    async clickBeriDonasi() {
        await this.btnBeriDonasi.click();
    }

    async clickGanti() {
        await this.btnGanti.click();
    }

    async clickOpsiDonation10k() {
        await this.opsiDonation10k.click();
    }

    async clickOpsiDonationNominalLain() {
        await this.opsiDonationNominalLain.click();
    }

    async typeDonasi(nominalDonasi) {
        await this.inputDonasi.setValue(nominalDonasi);
    }

    async clickHapusDonasi() {
        await this.btnHapusDonasi.click();
    }

    async clickConfirmPopupDonation() {
        await this.btnConfirmPopupDonation.click();
    }

    async clickCancelPopupDonation() {
        await this.btnCancelPopupDonation.click();
    }

    async clickTabPembayaranInstan() {
        await this.tabPembayaranInstan.click();
    }

    async clickTabKartuDebitKredit() {
        await this.tabKartuDebitKredit.click();
    }

    async clickTabInternetBanking() {
        await this.tabInternetBanking.click();
    }

    async clickCreditCard() {
        await this.radioCC.click();
    }

    async typeFieldCCNumber(CCNumber) {
        await this.inputFieldCCNumber.setValue(CCNumber);
    }

    async typeFieldCardExp(exp) {
        await this.inputFieldCardExp.setValue(exp);
    }

    async typeFieldCVV(cvv) {
        await this.inputFieldCVV.setValue(cvv);
    }

    async clickRadioOcto() {
        // await this.radioOcto.click();
        await this.textOcto.click();
    }

    async typeoctoAccountID(accountid) {
        await this.octoAccountID.click();
        await this.octoAccountID.setValue(accountid);
    }

    async clickOctoBayar() {
        await this.btnOctoBayar.click();
    }

    async clickOctoKembaliKeMerchant() {
        await this.btnOctoKembaliKeMerchant.click();
    }

    async clickbtnshopeepay(){
        await this.radioShopeepay.click();
    }

    async clickLewatiGWP(){
        await this.btnLewatiGWP.click();
    }

    async clickYakinConfirmGWP(){
        await this.btnYakinConfirmGWP.click();
    }

    async clickUseVoucher(){
        await this.btnUseVouchers.click();
    }

    async clickSimpanVoucher() {
        await this.btnSimpanVoucher.click();
    }

    async clickVoucher30K() {
        await this.opsiVoucher30K.click();
    }

    async clickVoucher100K() {
        await this.opsiVoucher100K.click();
    }



    open () {
        return super.open();
    }

}

module.exports = new CheckoutPage();