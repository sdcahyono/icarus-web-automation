const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals');


const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const MyAccountPage = require('../pageobjects/myaccount.page');
const TransactionsPage = require('../pageobjects/transaction.page');




const pages = {
    myTransactions: TransactionsPage
}


//My Transactions
Then(/^My Transaction page open$/, async () => {
    await browser.pause(2000);
    await expect(TransactionsPage.breadcrumbMyTransaction).toBeDisplayed();
});

Then(/^Filter for transaction available$/, async () => {
    await browser.pause(1000);
    await expect(TransactionsPage.fieldFilterStatus).toBeDisplayed();
    await expect(TransactionsPage.fieldFilterTime).toBeDisplayed();
    await expect(TransactionsPage.fieldFilterType).toBeDisplayed();
});

When(/^User choose filter type (.+) and filter result appeared$/, async (orderType) => {
    tempOrderType = orderType;
    await TransactionsPage.clickInputOrderType();
    const liOrderType = TransactionsPage.dropdownFilterTransaction.$(`li=` + orderType);
    liOrderType.click();
    await browser.pause(3000);
    let isElementDisplayed = await TransactionsPage.imgEmptyOrder.isDisplayed();
    console.log("Isi variable isElementDisplayed: " + isElementDisplayed);
    if (isElementDisplayed == false) {
        if (orderType == "Order") {
            tempImgType = "cart-image";
            await expect(TransactionsPage.imgTypeOrder).toBeDisplayed();
            let tempOrderTypeTitle = await TransactionsPage.orderTypeTitle.getText();
            console.log("Isi variable tempOrderTypeTitle: " + tempOrderTypeTitle);
            if (tempOrderTypeTitle.includes("TBS")) {
                await expect(TransactionsPage.orderTypeTitle).toHaveTextContaining("TBS");
            } else if(tempOrderTypeTitle.includes("E-Commerce")){
                await expect(TransactionsPage.orderTypeTitle).toHaveText("E-Commerce");
            } else {
                await expect(TransactionsPage.orderTypeTitle).toHaveText("Lazada");
            }
            await browser.pause(1000); 
        } else if (orderType == "Order Redemption") {
            tempImgType = "gift-image";
            await expect(TransactionsPage.imgTypeOrder).toBeDisplayed();
            await expect(TransactionsPage.orderTypeTitle).toHaveTextContaining("Penukaran Poin di TBS");
            await browser.pause(1000);
        }
    } else {
        await expect(TransactionsPage.imgEmptyOrder).toBeDisplayed();
        await expect(TransactionsPage.emptyOrderWording1).toHaveText("It's Quiet Here");
        await expect(TransactionsPage.emptyOrderWording2).toBeDisplayed();
        console.log("Transaction history is empty");
    }
});

When(/^User choose filter status (.+) and filter result appeared$/, async (orderStatus) => {
    await TransactionsPage.clickInputOrderStatus();
    const liOrderStatus = TransactionsPage.dropdownFilterTransaction.$(`li=` + orderStatus);
    liOrderStatus.click();
    await browser.pause(3000);
    let isElementDisplayed = await TransactionsPage.imgEmptyOrder.isDisplayed();
    console.log("Isi variable isElementDisplayed: " + isElementDisplayed);
    let tempOrderStatus = orderStatus.toUpperCase();
    if (isElementDisplayed == false) {
        await browser.pause(3000);
        await expect(TransactionsPage.orderStatusTitle).toHaveText(tempOrderStatus);
    } else {
        await expect(TransactionsPage.imgEmptyOrder).toBeDisplayed();
        await expect(TransactionsPage.emptyOrderWording1).toHaveText("It's Quiet Here");
        await expect(TransactionsPage.emptyOrderWording2).toBeDisplayed();
        console.log("Transaction history is empty");
    } 
});

When(/^User choose filter time (.+) and filter result appeared$/, async (orderTime) => {
    await TransactionsPage.clickInputOrderTime();
    const liOrderStatus = TransactionsPage.dropdownFilterTransaction.$(`li=` + orderTime);
    liOrderStatus.click();
    await browser.pause(3000);
});

When(/^User click Order and Order Detail page open$/, async () => {
    await TransactionsPage.clickOrder();
    await browser.pause(3000);
    await expect(TransactionsPage.titleTransactionDetail).toBeDisplayed();
    await expect(TransactionsPage.breadcrumbOrderNo).toBeDisplayed();
});

Then(/^Order Status should be (.+) and text status should appeared on page$/, async (orderStatus) => {
    let upperCaseStatusOrder = orderStatus.toUpperCase();
    tempOrderStatusBadge = upperCaseStatusOrder;
    await expect(TransactionsPage.statusTransaction).toBeDisplayed();
    if (orderStatus == "Paid") {
        await expect(TransactionsPage.textStatusTransaction).toHaveText("Your order has been paid.");
    } else if (orderStatus == "Cancelled") {
        await expect(TransactionsPage.textStatusTransaction).toHaveText("Your order has been canceled");
    } else if (orderStatus == "On Progress") {
        await expect(TransactionsPage.textStatusTransaction).toHaveText("Your order is being processed.");
    } else if (orderStatus == "Complete") {
        await expect(TransactionsPage.textStatusTransaction).toHaveText("Yay! Your order has been completed");
    } else if (orderStatus == "Failed") {
        await expect(TransactionsPage.textStatusTransaction).toHaveText("Your order has failed");
    } else {
        console.log("Text Status Transaction not appeared on page");
    }
});

Then(/^Online order status should available$/, async () => {
    await expect(TransactionsPage.statusOrderOnline).toBeDisplayed();
    await expect(TransactionsPage.statusOrderOnline).toHaveText("Payment Received");
});

Then(/^Order Detail should available$/, async () => {
    await expect(TransactionsPage.titleOrderDetail).toBeDisplayed();
    await expect(TransactionsPage.orderDetailProductElement).toBeDisplayed();
});

Then(/^Transaction Detail should be available and correct$/, async () => {
    await expect(TransactionsPage.titleTransactionDetail).toBeDisplayed();
    await expect(TransactionsPage.transactionDate).toBeDisplayed();
    await expect(TransactionsPage.transactionTime).toBeDisplayed();
    await expect(TransactionsPage.transactionNo).toBeDisplayed();
    tempTrxNo = await TransactionsPage.breadcrumbOrderNo.getText();
    console.log("Isi variable tempTrxNo: " + tempTrxNo);
    await expect(TransactionsPage.transactionNo).toHaveText(tempTrxNo);
});

Then(/^Payment Detail should available$/, async () => {
    await expect(TransactionsPage.titlePaymentDetail).toBeDisplayed();
    await expect(TransactionsPage.paymentMethod).toBeDisplayed();
    await expect(TransactionsPage.paymentSubtotal).toBeDisplayed();
    await expect(TransactionsPage.paymentShippingSectionTitle).toBeDisplayed();
    await expect(TransactionsPage.paymentShippingMethod).toBeDisplayed();
    await expect(TransactionsPage.paymentShippingCost).toBeDisplayed();
    tempShippingMethod = await TransactionsPage.paymentShippingMethod.getText();
});

Then(/^Shipping Detail should available$/, async () => {
    await expect(TransactionsPage.titleShippingDetail).toBeDisplayed();
    await expect(TransactionsPage.shippingMethodDetail).toBeDisplayed();
    console.log("Isi dari tempShippingMethod : "+tempShippingMethod);
    await expect(TransactionsPage.shippingMethodDetail).toHaveText(tempShippingMethod);
    await expect(TransactionsPage.shippingAddressDetailName).toBeDisplayed();
    await expect(TransactionsPage.shippingAddressDetailPhNumber).toBeDisplayed();
    await expect(TransactionsPage.shippingAddressDetailAddress).toBeDisplayed();
});

//My Vouchers

Then(/^My Voucher page open$/, async () => {
    await browser.pause(2000);
    await expect(TransactionsPage.breadcrumbMyVoucher).toBeDisplayed();
});