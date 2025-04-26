const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');

class PDP extends Page{
    get pdpIconWishlist(){
        return $("(//input[@type='checkbox'])[1]");
        // return $("//div[@class='mui-style-1qzusr4']//input[@type='checkbox']")
    };

    get pdpAddToBag() {
        return $("//h6[text()='Blue Musk Fragrance Mist 100ml']/parent::div/following-sibling::div/div/div/div[2]/button");
    }

    get pdpProductBreadcrumbs() { 
        return $("//h5[normalize-space()='Blue Musk Fragrance Mist 100ml']");
    }

    get pdpvariant() { 
        return $("//p[text()='Blue Musk']");
    }
    

    get pdpTxtSummary() { 
        return $("//button[normalize-space()='Summary']");
    }

    get pdpTxtDescription() { 
        return $("//p[normalize-space()='Description']");
    }

    get pdpIsiDescription() { 
        return $("//div[contains(text(),'Tunjukkan keunggulan diri terbaikmu dengan Blue Mu')]");
    }
    
    get pdpTxtWhatsInside() { 
        return $("//div[@id='simple-tabpanel-0']//div[2]//div[1]//p[1]");
    }

    get pdpIsiWhatsInside() { 
        return $("//div[contains(text(),'Community Fair Trade Organic Sugarcane Essence')]");
    }

    get pdpTxtProductTips() { 
        return $("//p[normalize-space()='Product Tips']");
    }

    get pdpIsiProductTips() { 
        return $("//div[@class='render-html'][normalize-space()='Lengkapi perawatan tubuh Anda dengan rangkaian Blue Musk dari The Body Shop.']");
    }

    get recomendedforyou() { 
        return $("//h3[normalize-space()='Recommended For You']");
    }

    get pdpTxtHowToUse() { 
        return $("//button[normalize-space()='How To Use']");
    }

    get pdpIsiHowToUse() { 
        return $("//p[contains(text(),'1. Semprotkan pada seluruh tubuh, terutama di titi')]");
        return $("//p[contains(text(),'2. Gunakan pelembap tubuh dengan aroma yang serupa')]");
    }

    get pdpTxtReviews() { 
        return $("//button[normalize-space()='Reviews']");
    }

    get pdppopupwhislist() { 
        return $("//div[@id='notistack-snackbar']");
    }

    get pdppopupaddtobag() { 
        return $("//div[@id='notistack-snackbar']//div[@class='MuiBox-root mui-style-0']");
    }

    get pdpsoldout() { 
        return $("//div[@class='mui-style-u4p24i']");
    }


    get footernamesku() { 
        return $("//h6[normalize-space()='Blue Musk Fragrance Mist 100ml']");
    }

    get footerprice() { 
        return $("//h4[normalize-space()='Rp 249.000']");
    }

    get footerPlus() { 
        return $("//h4[normalize-space()='Rp 249.000']//parent::div//parent::div/following-sibling::div/div/div/div/button[2]");
    }

    get footerMin() { 
        return $("//h4[normalize-space()='Rp 249.000']//parent::div//parent::div/following-sibling::div/div/div/div/button[1]");
    }

//sdc------------------------------------------------
    get pdpCatalogPrice() { 
        return $("//p[text()='SKU #155060108']/parent::div/following-sibling::div[2]/div/h3");
    }

    get pdpOriginalPrice() { 
        return $("//p[text()='SKU #155060108']/parent::div/following-sibling::div[2]/div/div/p");
    }

    get pdpCatalogPercentage() { 
        return $("//p[text()='SKU #155060108']/parent::div/following-sibling::div[2]/div/div/div");
    }

    get pdpCatalogTag() {
        return $("//p[text()='SKU #155060108']/parent::div/preceding-sibling::div[2]/div");
    }

    get pdpFooterCatalogPrice() {
        return $("//h6[text()='Ginger Conditioner 250ml']/following-sibling::div/h4");
    }

    get pdpFooterOriginalPrice() {
        return $("//h6[text()='Ginger Conditioner 250ml']/following-sibling::div/p");
    }

    get pdpArberAddToBag() {
        return $("//h6[text()='Arber Eau De Toilette 100ml']/parent::div/following-sibling::div/div/div/div[2]/button");
    }

    get pdpBreadcrumbs() {
        return $("//h5[text()='Home']/parent::a/parent::li/following-sibling::li[2]/h5");
    }
//------------------------------------------------sdc


//

    async clickPdpIconWishlist(){
        await this.pdpIconWishlist.click();
    }

    async clickPdpAddToBag() {
        await this.pdpAddToBag.click();
    }
    
    async pdpIssoldout() {
        return this.pdpsoldout.isExisting();
    }

    async clickPdpvariant() {
        await this.pdpvariant.click();
    }

    async clickPdpArberAddToBag() {
        await this.pdpArberAddToBag.click();
    }
    

    open () {
        return super.open();
    }

}

module.exports = new PDP();