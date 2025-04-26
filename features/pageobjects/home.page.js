const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class HomePage extends Page{


    get buttonLogin(){
        return $("//p[text()='LOGIN']");
    }

    get menuOffers(){
        return $("//p[text()='Offers']");
    }

    get menuTrendings(){
        return $("//p[text()='Trending']");
    }

    get menuFace(){
        return $("//p[text()='FACE']");
    }

    get menuBody(){
        return $("//p[text()='Body']");
    }

    get menuHair(){
        return $("//p[text()='HAIR']");
    }

    get menuMakeup(){
        return $("//p[text()='Make-Up']");
    }

    get menuGifts(){
        return $("//p[text()='Gifts']");
    }

    get menuFragrance(){
        return $("//p[text()='FRAGRANCE']");
    }

    get menuRange(){
        return $("//p[text()='Range']");
    }
    
    get menuStoreLocator(){
        return $("//p[text()='Stores']");
    }

    get username(){
        // return $("//p[text()='Hi, Akun Tester 1017']");
        return $("//a[contains(@href,'/my-account')]/span/p");
    }

    get menuNew(){
        return $("//p[text()='New']");
    }

    get closePopupBig(){
        return $('button[class="mui-style-1x2se5c"]');
    }

    get btnSearch(){
        return $("/html[1]/body[1]/div[1]/div[1]/header[1]/div[1]/div[2]/section[1]/div[3]/a[1]/*[name()='svg'][1]");
    }

    get cartBadge(){
        //return $("(//span[@class='BaseBadge-badge MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorSecondary mui-style-2y6c0w'][normalize-space()='1'])[2]");
        return $("//a[contains(@href,'/cart')]//span/span"); //sandra
    }

    get btnShoppingCart(){
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1u07pm0'])[6]");
        // return $("//a[contains(@href,'/cart')]/span/svg");
    }

    get btnWishlist(){
        return $("//a[@href='/my-account/wishlist']");
    }

    get snackbarNotif(){
        return $("//div[@id='notistack-snackbar']");
    }





    async clickClosePopupBig(){
        await this.closePopupBig.click()
    }

    async clickLogin(){
        await this.buttonLogin.click()
    }

    async clickNew(){
        await this.menuNew.click();
    }

    async clickBody(){
        await this.menuBody.click();
    }

    async clickFace(){
        await this.menuFace.click();
    }

    async clickHair(){
        await this.menuHair.click();
    }

    async clickFragrance(){
        await this.menuFragrance.click();
    }

    async clickMakeup(){
        await this.menuMakeup.click();
    }

    async clickGifts(){
        await this.menuGifts.click();
    }

    async clickMyAccount(){
        await this.username.click();
    }

    async clickSearch(){
        await this.btnSearch.click();
    }

    async clickShoppingCart(){
        await this.btnShoppingCart.click();
    }

    async clickWishlist(){
        await this.btnWishlist.click();
    }


    

    open () {
        return super.open();
    }

}

module.exports = new HomePage();