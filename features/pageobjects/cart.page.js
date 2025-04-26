const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class CartPage extends Page{
// ini test saja
    get headerShoppingCart(){
        return $("//h1[text()='Tas Belanja']");
    }

    //sandra
    get cartJumlahProduk(){
        return $("//h1[text()='Tas Belanja']/following-sibling::p");
    }

    get btnPlus(){
        return $("(//button[@class='ButtonUnstyled-root mui-style-95clcn'])[1]");
    }

    get btnMin(){
        return $("(//button[@class='ButtonUnstyled-root mui-style-1tz97xv'])[1]");
    }

    get inputQty1(){
        return $("//input[@value='1']");
    }

    get inputQty2(){
        return $("//input[@value='2']");
    }

    get inputQty3(){
        return $("//input[@value='3']");
    }    

    get inputQty10(){
        return $("//input[@value='10']");
    }

    get btnTrashIcon(){
        return $("(//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall mui-style-l9o7ez'])[1]");
    }

    get btnConfirm(){
        return $("(//button[normalize-space()='Confirm'])[1]");
    }

    get btnAddToWishlist(){
        return $("(//button[normalize-space()='Pindahkan ke Wishlist'])[1]");
    }

    get snackbarDeleteProduct(){
        return $("//div[@id='notistack-snackbar']");
    }

    get btnClose(){
        // return $("(//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mui-style-adah2c'])[1]");
        return $("//h3[text()='Hapus Produk']/parent::div/preceding-sibling::button");
    }

    get inCartProductName(){
        return $("//h5[text()='FULL ORANGE BLOSSOM EDP 75ML']");
    };

    get btnBayar(){
        return $("//button[text()='Bayar']");
    };

    get subtotalOnCart(){
//        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/p[1]");
//        return $("(//p[@class='MuiTypography-root MuiTypography-body1 MuiTypography-alignRight mui-style-2xxnmq'])[1]");
        // return $(".MuiTypography-root.MuiTypography-body1.MuiTypography-alignRight.mui-style-2xxnmq");
        return $("//h5[text()='Subtotal']/following-sibling::p");
    };

    //sandra
    get subtotalShippingCart(){
        return $("//h5[normalize-space()='Subtotal']/following-sibling::p");
    };


    get cartHargaAsli() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]");
        return $("//h5[text()='GINGER CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div[3]/div[1]");
    }

    get cartOriginalPrice() {
        return $("//h5[text()='"+catalogProduct+"']/parent::a/parent::div/following-sibling::div[3]/div[1]");
    }

    get cartHargaCatalog() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]");
        return $("//h5[text()='GINGER CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div[2]");
    }

    get cartCatalogPrice() {
        return $("//h5[text()='"+catalogProduct+"']/parent::a/parent::div/following-sibling::div[2]");
    }

    get labelPromoCart() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/h5[1]");
        return $("//h5[normalize-space()='Promo']");
    }

    get promoAmountCart() {
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/p[1]");
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/p[1]");
        // return $("(//p[@class='MuiTypography-root MuiTypography-body1 MuiTypography-alignRight mui-style-lf4cym'])[1]");
        return $("//h5[text()='Promo']/following-sibling::p");
    }

    get subtotalProductPrice1() {
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]/h4[1]");
    }

    get promoTag() {
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]");
    }

    get cartRulePromoTagArber() {
        return $("//h5[text()='ARBER EAU DE TOILETTE 100ML']/parent::a/parent::div/following-sibling::div[1]/div");
    }

    get arberProduct() {
        return $("//h5[normalize-space()='ARBER EAU DE TOILETTE 100ML']");
    }

    get arberPrice() {
        // return $("(//div[@class='MuiBox-root mui-style-1bfx2ni'])[1]");
        return $("//h5[text()='ARBER EAU DE TOILETTE 100ML']/parent::a/parent::div/following-sibling::div[2]");
    }

    get bananaProduct() {
        return $("//h5[normalize-space()='BANANA CONDITIONER 250ML']");
    }

    get bananaPrice() {
        // return $("(//div[@class='MuiBox-root mui-style-52fp49'])[1]");
        return $("//h5[text()='BANANA CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div[2]");
    }

    get promoTags() {
        return $("//div[@class='MuiBox-root mui-style-nqkj2l']");
    }

    get productPrice() {
        return $("//div[@class='MuiBox-root mui-style-1bfx2ni']");
    }

    get productName() {
        return $("//div[@class='MuiTypography-root MuiTypography-h5 mui-style-flcq3u']");
    }

    get productNameElement() {
        return $("//h5[@class='MuiTypography-root MuiTypography-h5 mui-style-flcq3u']");
    }

    get promoTagCoolingCucumber() {
        return $("//h5[text()='COOLING CUCUMBER EYE SHEET MASK 2X6ML']/parent::a/parent::div/following-sibling::div//div[contains(text(), 'Diskon 50%')]");
    }

    get priceCoolingCucumber() {
        return $("//h5[text()='COOLING CUCUMBER EYE SHEET MASK 2X6ML']/parent::a/parent::div/following-sibling::div[2]");
    }

    get promoTagDoubleEnded() {
        return $("//h5[text()='DOUBLE ENDED BLACKHEAD REMOVER']/parent::a/parent::div/following-sibling::div//div[contains(text(), 'Diskon 150K')]");
    }

    get priceDoubleEnded() {
        return $("//h5[text()='DOUBLE ENDED BLACKHEAD REMOVER']/parent::a/parent::div/following-sibling::div[2]");
    }

    get promoTagHairScrunchies() {
        // return $("//h5[text()='HAIR SCRUNCHIES']/parent::a/parent::div/following-sibling::div//div[contains(text(), 'Diskon 150K')]");
        return $("//h5[text()='HAIR SCRUNCHIES']/parent::a/parent::div/following-sibling::div[1]/div");
    }

    get priceHairScrunchies() {
        return $("//h5[text()='HAIR SCRUNCHIES']/parent::a/parent::div/following-sibling::div[2]");
    }

    get cartRulePromoTagBlackMusk() {
        return $("//h5[text()='BLACK MUSK EDP 30ML']/parent::a/parent::div/following-sibling::div[1]/div");
    }

    get priceBlackMusk() {
        return $("//h5[text()='BLACK MUSK EDP 30ML']/parent::a/parent::div/following-sibling::div[2]");
    }

    get catalogPromoTagGinger() {
        return $("//h5[text()='GINGER CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div//div[contains(text(), '(Test QA) Diskon exclude Mobile Apps 20RB')]");
    }

    get catalogPromoTag() {
        return $("//h5[text()='GINGER CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div[1]/div")
    }

    get cartRulePromoTagBanana() {
        return $("//h5[text()='BANANA CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div[1]//div[contains(text(), 'Disc 15%')]");
    }

    get catalogRulePromoTagBanana() {
        return $("//h5[text()='BANANA CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div[1]//div[contains(text(), '(Test QA) Diskon exclude Mobile Apps 20RB')]");
    }

    get cartRulePromoTagAloe() {
        return $("//h5[text()='ALOE CREAM CLEANSER 125ML']/parent::a/parent::div/following-sibling::div[1]/div");
    }

    get cartRulePromoTagAloe15() {
        return $("//h5[text()='ALOE CREAM CLEANSER 125ML']/parent::a/parent::div/following-sibling::div[1]/div[2]");
    }

    get bananaNormalPrice() {
        return $("//h5[text()='BANANA CONDITIONER 250ML']/parent::a/parent::div/following-sibling::div[3]/div[1]");
    }

    get priceAloe() {
        return $("//h5[text()='ALOE CREAM CLEANSER 125ML']/parent::a/parent::div/following-sibling::div[2]");
    }

    get advanceSetProduct() {
        return $("//h5[normalize-space()='ADVANCE SET']");
    }

    get cartProductName() {
        return $("//h5[normalize-space()='"+cartProductName+"']");
    }

    get inputQty() {
        return $("//input[@type='number']");
    }

    get buttonPlus() {
        return $("//input[@type='number']/parent::div/following-sibling::button");
    }

    get buttonMin() {
        return $("//input[@type='number']/parent::div/preceding-sibling::button");
    }

    get labelSubtotal() {
        return $("//h5[text()='Subtotal']");
    }

    get subtotalProductPrice() {
        return $("//input[@type='number']/parent::div/parent::div/parent::div/parent::div/following-sibling::div//h4");
    }

    get labelTotal() {
        return $("//h4[text()='Total']");
    }

    get cartTotalAmount() {
        return $("//h4[text()='Total']/following-sibling::h4");
    }

    get imgAdvanceSetProduct() {
        return $("//a[contains(@href,'/advance-set-950')]//img");
    }
    
    get cartImgProduct() {
        return $("//h5[text()='"+cartProductName+"']/parent::a/parent::div/parent::div/preceding-sibling::a/div/div/div/img");
    }


    async clickPlus(){
        // await this.btnPlus.click();
        await this.buttonPlus.click();
    }

    async clickMin(){
        // await this.btnMin.click();
        await this.buttonMin.click();
    }

    async typeQty2(){
        await browser.pause(3000);
        await this.inputQty1.click();
        await this.inputQty1.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputQty1.clearValue();
        await this.inputQty1.setValue(2);
        await this.headerShoppingCart.click();
    }

    async typeQty3(){
        await browser.pause(3000);
        await this.inputQty2.click();
        await this.inputQty2.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputQty2.clearValue();
        await this.inputQty2.setValue(3);
        await this.headerShoppingCart.click();
    }

    async typeQty1(){
        await browser.pause(3000);
        await this.inputQty2.click();
        await this.inputQty2.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputQty2.setValue(1);
        await this.headerShoppingCart.click();
    }

    async typeQty11(){
        await browser.pause(3000);
        await this.inputQty1.click();
        await this.inputQty1.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputQty1.setValue(11);
        await this.headerShoppingCart.click();
    }

    async clickTrashIcon(){
        await this.btnTrashIcon.click();
    }

    async clickConfirm(){
        await browser.pause(2000);
        await this.btnConfirm.click();
    }

    async clickAddToWishlist(){
        await browser.pause(2000);
        await this.btnAddToWishlist.click();
    }

    async clickClose(){
        await browser.pause(2000);
        await this.btnClose.click();
    }

    async clickBayar(){
        await this.btnBayar.click();
    }

    //sandra
    async getNilaiSubtotal() {
        await this.subtotalShippingCart.getText();
    }

    async typeQty(val){
        await browser.pause(3000);
        await this.inputQty.click();
        await this.inputQty.doubleClick();
        await browser.keys(['Backspace']);
        await this.inputQty.setValue(val);
        await this.headerShoppingCart.click();
    }

    async clickImgAdvanceSetProduct() {
        await this.imgAdvanceSetProduct.click();
    }

    async clickcartImgProduct() {
        await this.cartImgProduct.click();
    }

    async clickcartProductName() {
        await this.cartProductName.click();
    }





    open () {
        return super.open();
    }

}

module.exports = new CartPage();