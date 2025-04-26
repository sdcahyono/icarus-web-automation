const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')

class CoInstantPage extends Page{

get addtobag(){
        return $("(//button[normalize-space()='Add to Bag'])[1]");
    }

get skubyname(){
        return $("(//h5[normalize-space()='WHITE MUSK DEODORANT 50ML'])[1]");
    }

get skuprice(){
        return $("(//h4[@class='MuiTypography-root MuiTypography-h4 mui-style-1hd9pzr'])[1]");
    }

get subtotalcart() {
    return $("p.MuiTypography-root.MuiTypography-body1.MuiTypography-alignRight.mui-style-2xxnmq");
}

//  (//button[normalize-space()='Back to merchant'])[1]


get grandtotalcart(){
    return $("//h4[@class='MuiTypography-root MuiTypography-h4 mui-style-18wl5cj'][normalize-space()='Rp 149.000']");
}

get shipmentpage(){
    return $("(//h4[normalize-space()='Pengiriman'])[1]");
}

get grandtotalonshipmentcart(){
    return $("(//h4[normalize-space()='Rp 161.000'])[1]");
}

get paymentpage(){
    return $("(//h4[normalize-space()='Pembayaran'])[1]");
}

get btnbacktomerchantldlgpage() {
    return $("//a[normalize-space()='Back to simulator landing page']");
}

get btnstatuspesan() {
    return $("(//button[normalize-space()='Cek Status Pesanan'])[1]");
}

get orderpaid() {
    return $("(//h4[normalize-space()='Your order has been paid.'])[1]");
}

get trxdetail(){
return $("(//h1[normalize-space()='Transaction Detail'])[1]")
}

get textpwpredeem(){
    //return $("(//h6[@class='MuiTypography-root MuiTypography-h6 mui-style-15v2ari'][normalize-space()='Pay With Point Redeem'])[1]")
    
return $("//h6[text()='Pay With Point Redeem']");
}

    get txtatecommerce() {
        //return $("(//span[@class='MuiTypography-root MuiTypography-caption mui-style-a81z2u'][normalize-space()='at E-Commerce'])[2]");
   return $("//h6[text()='Pay With Point Redeem']/following-sibling::span[1]");
    }

    get txtvoucher() {
        return $("//h4[normalize-space()='Voucher']");
        //return $("//h4[normalize-space()='Voucher']");
    }

    get btnusevoucher() {
        return $("//h4[normalize-space()='Voucher']/following-sibling::div");
        
    }

    get txtvoucherforyou() {
        return $("//div[@class='MuiBox-root mui-style-z7mtfw' and contains(text(), 'Voucher For You')]");
    }
    
    get btngunakanvocuher () {
        return $("(//button[normalize-space()='Gunakan'])[1]");
    }

    get clickvocuher () {
        return $("//div[@class='render-html' and text()='Voucher QA 50K']");
    }
    
    get savevocuher () {
        return $("(//button[normalize-space()='Simpan'])[1]']");
    }
    get closevcr () {
        return $("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-style-1n0ep7y'])[1]");
    }

    get txtcashvoucher() {
        return $("//p[text()='Cash Voucher']");
    }

    get valuevoucher(){
    return $("//p[text()='Cash Voucher']/parent::span/following-sibling::p");
    }
    
//----------------------------pemisah-------------------------------------------------------
async btnaddtocart(){
    await this.addtobag.click();
}


async clickbtnshopeepay(){
    await this.addtobag.click();
}
async clickbacktomerchantldg(){
    await this.btnbacktomerchantldlgpage.click();
}

async clickstatuspesan(){
    await this.btnstatuspesan.click();
}

async clickbtnusevoucher(){
    await this.btnusevoucher.click();
}

async clickbtnvcr(){
    await this.clickvocuher.click();
}

async clickbtngunakan(){ //Apabila by inputcode voucher
    await this.btngunakanvocuher.click();
}

async clicksavevcr(){
    await this.savevocuher.click();
}

async clickclosevcr(){
    await this.closevcr.click();
}


////

    open () {
        return super.open();
    }

}

module.exports = new CoInstantPage();
