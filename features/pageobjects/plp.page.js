const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');
// let prodName = '';
class PLP extends Page{

    get btnAddToCart1(){
        return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]");
    }

    get inputSearch(){
        return $("//input[@id='search']");
    };

    get btnInputSearch(){
        return $("//button[@data-testid='customButton']");
    };

    get btnAddToCartSearch(){
        return $("(//button[normalize-space()='Add to Bag'])[1]");
    }

    get imgProduct(){
        return $("(//div[@class='mui-style-1nqnvtt'])[1]");
    }

    get linkArber() {
        return $("//a[contains(@href,'/arber-eau-de-toilette-100ml-039')]/div");
    }

    // get btnAddToBagAdvanceSet() {
    get btnAddToBag() {
        return $("//span[text()='"+prodName+"']/parent::h5/parent::div/parent::div/parent::a/parent::div/following-sibling::div/button");
    }


    get imgPLP() {
        return $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[1]");
    }

    get catalogPrice() {
        return $("//a[contains(@href,'/ginger-conditioner-250ml-108')]/following-sibling::div/h3");
    }

    get originalPrice() {
        return $("//a[contains(@href,'/ginger-conditioner-250ml-108')]/following-sibling::div[2]/div/span");
    }

    get catalogPercentage() {
        return $("//a[contains(@href,'/ginger-conditioner-250ml-108')]/following-sibling::div[2]/div[2]");
    }

    get catalogTag() {
        return $("//a[contains(@href,'/ginger-conditioner-250ml-108')]/div/div[3]//h6");
    }


    get totalproduk() {
        // return $("//p[text()='85']"),  $("//p[text()=' Products']");
        return $("//div[@id='variant']/parent::div/parent::div/parent::div/preceding-sibling::p");
}
//
    async clickAddToCart(){
        await this.btnAddToCart1.click()
    }

    async typeSearch(productName) {
        await this.inputSearch.setValue(productName);
        await browser.pause(1000);
        await this.btnInputSearch.click();
        await browser.pause(3000);
    }

    async clickAddToCartSearch(){
        await this.btnAddToCartSearch.click();
    }

    async clickimgProduct(){
        await this.imgPLP.click();
    }

    async clickLinkArber() {
        await this.linkArber.click();
    }

    // async clickAddToBagAdvanceSet() {
    async clickAddToBag() {    
        // await this.btnAddToBagAdvanceSet.click();
        await this.btnAddToBag.click();
    }




    open () {
        return super.open();
    }

}

module.exports = new PLP();