const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class VouchersPage extends Page{

    get breadcrumbMyVouchers(){
        return $("//h5[normalize-space()='my voucher']");
    }

    get myVocuhersTitle(){
        return $("//h1[normalize-space()='Voucher yang Ada']");
    }

    get tabActiveVoucher(){
        return $("//button[normalize-space()='Active Voucher']");
    }

    get tabPastVoucher(){
        return $("//button[normalize-space()='Past Voucher']");
    }

    get voucherElement(){
        return $("//h1[normalize-space()='Voucher yang Ada']/parent::div/following-sibling::div[2]/div/div/section[1]/div");
    }

    get imgEmptyVoucher(){
        return $("(//img[@alt='Oops'])[1]")
    }

    get emptyOrderWording1(){
        return $("(//img[@alt='Oops'])[1]/following-sibling::div/h4");
    }

    get emptyOrderWording2(){
        return $("//h6[normalize-space()='It seems a bit empty here at the moment.']");
    }


    async clickTabPastVoucher() {
        await this.tabPastVoucher.click();
    }


    open () {
        return super.open();
    }

}

module.exports = new VouchersPage();