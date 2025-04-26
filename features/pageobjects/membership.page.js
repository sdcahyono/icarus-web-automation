const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');

class Membership extends Page{
    get menuMembership(){
        return $("//p[text()='Membership']");
    }

    get titleLYBC(){
        return $("//p[text()='LOVE YOUR BODY™ CLUB']");
    }

    get breadcrumbMembership(){
        return $("//h5[text()='membership']");
    }

    get titleMembership(){
        return $("//h1[text()='Membership Benefits']");
    }

    get imgMemberCard(){
        return $("//img[@alt='member card']");
    }

    get btnMyQRCode(){
        return $("//button[text()='My QR Code']");
    }

    get lblTierCardnumber(){
        return $("//a[contains(@href,'/tools/qrcode')]/span");
    }

    get membershipAccountName(){
        return $("//a[contains(@href,'/tools/qrcode')]/following-sibling::span");
    }

    get pointInformation(){
        // return $("(//p[@class='MuiTypography-root MuiTypography-body1 mui-style-v485bh'])[1]");
        return $("//a[contains(@href,'/membership/point-activities')]/div/p");
    }

    get starter(){
        return $("//h4[normalize-space()='Starter']");
    }

    get club(){
        return $("//h4[normalize-space()='CLUB']");
    }

    get fan(){
        return $("//h4[normalize-space()='FAN']");
    }

    get btnStarter(){
        return $("//div[@class='swiper-slide swiper-slide-active']");
    }

    get btnClub(){
        return $("//div[@class='swiper-slide swiper-slide-next']");
    }

    get btnFan(){
        return $("//div[@class='swiper-slide']");
    }

    get lblBenefitStarter(){
        return $("//h4[normalize-space()='STARTER Member Benefits']");
    }

    get benefitShopToEnjoy(){
        return $("//p[normalize-space()='Shop To Enjoy']");
    }

    get benefitBirthdayTreats(){
        return $("//p[normalize-space()='Birthday Treats']");
    }

    get benefitTrackPurchase(){
        return $("//p[normalize-space()='Track Your Online Purchases']");
    }

    get benefitShopMore(){
        return $("//p[normalize-space()='Shop More to Enjoy More']");
    }

    get lblBenefitClub(){
        return $("//h4[normalize-space()='CLUB Member Benefits']");
    }

    get benefitEarnPoint(){
        return $("//p[normalize-space()='Earn Points']");
    }

    get benefitShoppingVoucher(){
        return $("//p[normalize-space()='Shopping Voucher']");
    }

    get benefitPointPlusPay(){
        return $("//p[normalize-space()='Point Plus Pay']");
    }

    get benefitRedemptionCatalogue(){
        return $("//p[normalize-space()='Redemption Catalogue']");
    }

    get benefitBBOB(){
        return $("//p[normalize-space()='Bring Back Our Bottle']");
    }

    get benefitFreeMakeOver(){
        return $("//p[normalize-space()='Free Make Over']");
    }

    get benefitSpecialEvent(){
        return $("//p[normalize-space()='Special Event']");
    }

    get lblBenefitFan(){
        return $("//h4[normalize-space()='FAN Member Benefits']");
    }

    get sectionBBOB(){
        return $("//span[normalize-space()='Bring Back Our Bottle']");
    }

    get sectionDonation(){
        return $("//span[normalize-space()='Donation']");
    }

    get linkFAQ(){
        return $("//span[normalize-space()='FAQ']");
    }

    get linkTermCondition(){
        return $("//span[normalize-space()='Terms and Conditions']");
    }

    get linkHowToRedeem(){
        return $("//span[normalize-space()='How to Redeem Points']");
    }

    get titleMyQRCode(){
        return $("//h3[normalize-space()='My QR Code']");
    }

    get descMyQRCode(){
        // return $("(//p[@class='MuiTypography-root MuiTypography-body2 mui-style-1e3oiaj'])[1]");
        return $("//h3[text()='My QR Code']/following-sibling::p");
    }

    get textExpirationTimer(){
        return $("//p[normalize-space()='Expired In']");
        // return $("//h3[text()='My QR Code']/parent::div/following-sibling::div/div/div/p[1]");
    }

    get expirationTimer(){
        // return $("(//p[@class='MuiTypography-root MuiTypography-body1 mui-style-19qgnyg'])[1]");
        return $("//h3[text()='My QR Code']/parent::div/following-sibling::div/div/div/p[2]");
    }

    get qrCode(){
        return $("(//*[name()='svg'])[22]");
    }

    get cardnumber(){
        // return $("//a[normalize-space()='51697533784000265']");
        return $("//h3[text()='My QR Code']/parent::div/following-sibling::div/span/a");
    }

    get btnGenerateQR(){
        // return $("//p[normalize-space()='Regenerate QR Code']");
        return $("//p[text()='Regenerate QR Code']/parent::button");
    }

    get regenerateAgain(){
        return $("//p[normalize-space()='Regenerate again in']");
    }

    get breadcrumbPointHistory(){
        return $("//h5[normalize-space()='point activities']");
    }

    get titlePointHistory(){
        return $("//h1[normalize-space()='Point Activities']");
    }

    get breadcrumbFaq(){
        return $("//h5[normalize-space()='faq']");
    }

    get breadcrumbTermCondition(){
        return $("//h5[normalize-space()='terms and conditions']");
    }

    get titleHowToRedeemPoint(){
        return $("//p[normalize-space()='How to Redeem Points']");
    }


    get btnPointExpiration(){
        return $("//a[contains(@href,'/membership/point-activities?tab=will_expired')]");
    }

    get pointExpirationInfo(){
        return $("//a[contains(@href,'/membership/point-activities?tab=will_expired')]/div/div/p");
    }

    get titlePointActivities(){
        return $("//h1[text()='Point Activities']");
    }

    get tabActivities(){
        return $("//button[text()='Activities']");
    }

    get tabWillExipred(){
        return $("//button[text()='Will Expired']");
    }

    // get textExpiredIn(){
    //     return $("//h3[text()='My QR Code']/parent::div/following-sibling::div/div/div/p[1]")
    // }




    async clickMembership(){
        await this.menuMembership.click();
    }

    async clickStarter(){
        await this.btnStarter.click();
    }

    async clickClub(){
        await this.btnClub.click();
    }

    async clickFan(){
        await this.btnFan.click();
    }

    async clickMyQRCode(){
        await this.btnMyQRCode.click();
    }

    async clickTierCardnumber(){
        await this.lblTierCardnumber.click();
    }

    async clickGenerateQR(){
        await this.btnGenerateQR.click();
    }

    async clickpointInformation(){
        await this.pointInformation.click();
    }

    async clickFAQ(){
        await this.linkFAQ.click();
    }

    async clickTermCondition(){
        await this.linkTermCondition.click();
    }

    async clickHowToRedeem(){
        await this.linkHowToRedeem.click();
    }


    open () {
        return super.open();
    }

}

module.exports = new Membership();