const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class TransactionPage extends Page{

    get breadcrumbMyTransaction(){
        return $("//h5[normalize-space()='My Transactions']");
    }

    get breadcrumbOrderNo(){
        return $("//h5[normalize-space()='My Transactions']/parent::a/parent::li/following-sibling::li[2]");
    }

    //transaction list section
    get fieldFilterType(){
        return $("(//div[@role='button'][normalize-space()='Type'])[2]");
    }

    get fieldFilterStatus(){
        return $("(//div[@role='button'][normalize-space()='Status'])[2]");
    }

    get fieldFilterTime(){
        return $("(//div[@role='button'][normalize-space()='Time'])[2]");
    }

    get dropdownFilterTransaction() {
        return $("//ul[@role='listbox']");
    }

    get orderTypeTitle(){
        //return $("(//div[@role='button'][normalize-space()='Type']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/a/div/div/div)[1]");
        return $("(//img[@alt='"+tempImgType+"'])[1]/following-sibling::div[1]/div[1]");
    }

    get imgTypeOrder(){
        return $("(//img[@alt='"+tempImgType+"'])[1]")
    }

    get orderStatusTitle(){
        //return $("(//img[@alt='"+tempImgType+"'])[1]/following-sibling::div[2]/span");
        return $("(//div[@role='button'][normalize-space()='"+tempOrderType+"']/parent:: div/parent::div/parent::div/parent::div/following-sibling::div/a/div/div/div[2]/span)[1]");
    }

    get imgEmptyOrder(){
        return $("(//img[@alt='Oops'])[1]")
    }

    get emptyOrderWording1(){
        return $("(//img[@alt='Oops'])[1]/following-sibling::div/h4");
    }

    get emptyOrderWording2(){
        return $("//h6[normalize-space()='It seems a bit empty here at the moment.']");
    }

    //transaction detail section header
    get titleTransactionDetail(){
        return $("//h1[normalize-space()='Transaction Detail']");
    }

    get statusTransaction(){
        return $("//span[normalize-space()='"+tempOrderStatusBadge+"']");
    }

    get textStatusPaid(){
        return $("//h4[normalize-space()='Your order has been paid.']");
    }

    get textStatusTransaction(){
        return $("//h1[normalize-space()='Transaction Detail']/parent::div/parent::div/following-sibling::div[1]/div/div/h4");
    }

    get statusOrderOnline(){
        return $("//h1[normalize-space()='Transaction Detail']/parent::div/parent::div/following-sibling::div[1]/following-sibling::div/div/div/div[1]/span/span[2]/span");
    }

    //order detail section
    get titleOrderDetail(){
        return $("//h4[normalize-space()='Order Detail']");
    }

    get orderDetailProductElement(){
        return $("//h4[normalize-space()='Order Detail']/following-sibling::div");
    }

    //transaction detail section
    get titleTransactionDetail(){
        return $("//h4[normalize-space()='Transaction Detail']");
    }

    get transactionDate(){
        return $("//td[contains(text(),'Transaction Date')]/following-sibling::td[2]/h6");
    }

    get transactionTime(){
        return $("//td[contains(text(),'Transaction Time')]/following-sibling::td[2]/h6");
    }

    get transactionNo(){
        // return $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[2]/div[1]/table[1]/tbody[1]/tr[3]/td[3]/h6[1]");
        return $("//td[contains(text(),'Transaction No.')]/following-sibling::td[2]/h6");
    }

    //payment detail section
    get titlePaymentDetail(){
        return $("//h4[normalize-space()='Payment Detail']");
    }

    get paymentMethod(){
        return $("//td[contains(text(),'Payment Method')]/following-sibling::td[2]/h6");
    }

    get paymentSubtotal(){
        return $("//p[contains(text(),'Subtotal')]/parent::td/following-sibling::td[2]/h6");
    }

    get paymentShippingSectionTitle(){
        return $("//p[contains(text(),'Shipping')]");
    }

    get paymentShippingMethod(){
        return $("//p[contains(text(),'Shipping')]/parent::td/parent::tr/following-sibling::tr[1]/td[1]");
    }

    get paymentShippingCost(){
        return $("//p[contains(text(),'Shipping')]/parent::td/parent::tr/following-sibling::tr[1]/td[3]");
    }


    //shipping detail section
    //sandra
    get titleShippingDetail(){
        return $("//h4[normalize-space()='Shipping Detail']");
    }

    //sandra
    get shippingMethodDetail(){
        return $("//td[normalize-space()='Shipping Method']/following-sibling::td[2]");
    }

    //sandra
    get shippingAddressDetailName(){
        return $("//td[normalize-space()='Shipping Address']/following-sibling::td/h6[1]");
    }

    //sandra
    get shippingAddressDetailPhNumber(){
        return $("//td[normalize-space()='Shipping Address']/following-sibling::td/h6[2]");
    }

    //sandra
    get shippingAddressDetailAddress(){
        return $("//td[normalize-space()='Shipping Address']/following-sibling::td/h6[3]");
    }

    //action
    //sandra
    async clickInputOrderType() {
        await this.fieldFilterType.click();
    }

    async clickInputOrderStatus() {
        await this.fieldFilterStatus.click();
    }

    async clickInputOrderTime() {
        await this.fieldFilterTime.click();
    }

    async clickOrder() {
        await this.orderTypeTitle.click();
    }



    open () {
        return super.open();
    }

}

module.exports = new TransactionPage();