const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class WishlistPage extends Page{

    get iconWishlist(){
//        return $("(//input[@type='checkbox'])[1]");
        return $("(//div[@class='MuiBox-root mui-style-74hafj'])[1]");
    }

    get inWishlistProductName(){
        return $("//span[@class='MuiBox-root mui-style-1jnnoms']");
    };

    get snackbarWishlist(){
        return $("//div[@id='notistack-snackbar']");
    };

    async clickWishlistIcon(){
        await browser.pause(2000);
        await this.iconWishlist.click();
    }


    open () {
        return super.open();
    }

}

module.exports = new WishlistPage();