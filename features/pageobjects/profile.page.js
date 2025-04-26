const { $ } = require('@wdio/globals');
const Page = require('./page');
const { browser } = require('@wdio/globals');
const { faker } = require('@faker-js/faker');


// var lastName = faker.person.lastName("male");
// var firstName = faker.person.firstName("male");
// let dateDOB = faker.number.int({min: 1, max: 30});
// let monthDOB = faker.number.int({min: 1, max: 12});
// let yearDOB = faker.number.int({min: 1970, max: 2006});
let birthDOB = faker.date.between({ from: '1970-01-01T00:00:00.000Z', to: '2006-01-01T00:00:00.000Z' });


class ProfilePage extends Page {

    //get element user profile
    get btnChgProfile () {
        //return $('/html/body/div[1]/div[1]/div/div/div[2]/div/div[2]/div/div/div[3]/button[1]');
        return $("(//button[text()='Change Profile'])[2]"); //sandra
    }

    get myAccountPage () {
        return $('//h5[text()="my account"]');
    }

    get titleChgProfile () {
        return $('//h1[text()="Change Profile"]');
    }

    get fieldFirstName () {
        return $('#firstName');
    }

    get fieldLastName () {
        return $('#lastName');
    }

    //sandra new edit
    get radioBtnGender () {
        return $("//input[@value='"+tempGender+"']/parent::span");
    }

    get radioBtnFemale () {
        return $('//input[@value="F"]');
    }

    get radioBtnMale () {
        return $('//input[@value="M"]');
    }

    //sandra new edit
    get spanRadioChecked () {
        //return $('//*[@id="__next"]/div[1]/div/div[2]/form/div[1]/div[6]/div/div/label[1]/span[1]')
        return $("//input[@value='"+tempGender+"']/parent::span");
    }

    //sandra new edit
    get spanRadioUnchecked () {
        return $('//*[@id="__next"]/div[1]/div/div[2]/form/div[1]/div[6]/div/div/label[2]/span[1]');
    }

    get svgClassFemale () {
        return $('//*[@id="__next"]/div[1]/div/div[2]/form/div[1]/div[6]/div/div/label[1]/span[1]')
    }

    get svgClassMale () {
        return $('//*[@id="__next"]/div[1]/div/div[2]/form/div[1]/div[6]/div/div/label[2]/span[1]');
    }

    get radioChecked () {
        return $('svg[data-testid="RadioButtonCheckedIcon"]');
    }

    get radioUnchecked () {
        return $('svg[data-testid="RadioButtonUncheckedIcon"]');
    }

    get fieldDOB () {
        // return $('//input[@placeholder="Enter DOB"]');
        return $("//input[@id='dob']");
    }

    get helperTextFirstName () {
        return $('//p[@id="firstName-helper-text"]')
    }

    get helperTextLastName () {
        return $('//p[@id="lastName-helper-text"]')
    }

    get helperTextDOB () {
        return $('//p[@id="dob-helper-text"]')
    }

    get btnSaveProfile () {
        return $('//button[text()="Save"]');
    }

    get alertSuccessSaveProfile () {
        return $('//div[@id="notistack-snackbar"]');
    }

    get myAccountName () {
        //return $('//*[@id="__next"]/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/h2/span');
        return $("(//button[text()='Change Profile'])[2]/parent::div/preceding-sibling::div/h2");
    }

    get myAccountGender () {
        //return $('//*[@id="__next"]/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div[2]/div[2]/h4');
        return $("//span[normalize-space()='Jenis Kelamin']/following-sibling::h4");
    }

    get myAccountEmail () {
        //return $('//*[@id="__next"]/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div[2]/div[3]/h4')
        return $("//span[normalize-space()='Email']/following-sibling::h4");
    }

    //change phone number
    get bthChgPhoneNumber () {
        return $('//p[normalize-space()="CHANGE PHONE NUMBER"]');
    }

    get titleChgPhoneNumber () {
        return $('//h1[normalize-space()="Change Phone Number"]');
        
    }

    get fieldPhoneNumber () {
        return $("//input[@id='phone']");
    }

    get btnSavePhoneNumber () {
        return $("(//button[normalize-space()='Save'])[1]");
    }

    //change email
    get btnChgEmail () {
        return $('//p[normalize-space()="CHANGE EMAIL"]');
    }

    get titleChgEmail () {
        return $('//h1[normalize-space()="Change Email"]');
    }

    get fieldEmail () {
        return $('//input[@placeholder="Enter E-mail"]');
    }

    get btnSaveEmail () {
        return $('//button[@type="submit"]');
//        return $("(//button[normalize-space()='Save'])[1]");
    }

    get helperTextChangePhone() {
        return $("(//p[@class='MuiFormHelperText-root Mui-error mui-style-1onyhlp'])[1]");
    }

    get helperTextChangeEmail() {
        return $("//p[@id='email-helper-text']");
    }

//SDC--
    get fieldEmailReg() {
        return $("//input[@id='email']");
    }

    get fieldDOBReg() {
        return $("//input[@id='dob']");
    }

    get checkboxAgreement() {
        return $("//input[@name='agreement']");
    }

    get btnSubmit() {
        return $("//button[text()='Submit']");
    }
//--SDC

    //action
    async clickChgProfile () {
        await this.btnChgProfile.click();
    }

    async clickBtnSaveProfile () {
        await this.btnSaveProfile.click();
    }

    async clearFirstName () {
        await this.fieldFirstName.clearValue();
    }

    // async typeFirstName () {
    //     await this.fieldFirstName.setValue(firstName);
    // }

    //sandra new edit
    async typeFirstName () {
        if(tmpGdrFirst == "M"){
            tmpGdrFirst = "male";
        } else {
            tmpGdrFirst = "female";
        }

        let firstName = faker.person.firstName(tmpGdrFirst);
        await this.fieldFirstName.setValue(firstName);
    }

    async typeInvalidFirstName () {
        await this.fieldFirstName.setValue(tempInvalidFirstName);
    }

    //sandra new edit
    async typeLastName () {
        if(tmpGdrLast == "M"){
            tmpGdrLast = "male";
        } else {
            tmpGdrLast = "female";
        }

        let lastName = faker.person.lastName(tmpGdrLast);
        const specialCharsRegex = /[^\w\s]/gi; 
        if (lastName.match(specialCharsRegex)) {
            lastName = lastName.replace(specialCharsRegex, ' ');
        }
        await this.fieldLastName.setValue(lastName);
    }

    async typeInvalidLastName () {
        await this.fieldLastName.setValue(tempInvalidLastName);
    }

    async clearLastName () {
        await this.fieldLastName.clearValue();
    }

    // async typeLastName () {
    //     await this.fieldLastName.setValue(lastName);
    // }

    async getFirstName () {
        return (await this.fieldFirstName.getValue());
    }

    async getLastName () {
        return (await this.fieldLastName.getValue());
    }

    //sandra new edit
    async selectGenderProfile () {
        await this.radioBtnGender.click();
    }

    async selectFemale () {
        await this.radioBtnFemale.click();
    }

    async selectMale () {
        await this.radioBtnMale.click();
    }
    async getRadioCheckedClass () {
        return ((await this.radioBtnGender).getAttribute('class')); 
    }

    async getSpanRadioChecked () {
        return ((await this.svgClassMale).getAttribute('class')); 
    }

    // async selectGender () {
    //     //if female radio button checked, click male
    //     //if male radio button checked, click female
    //     if (this.radioBtnFemale == this.radioChecked) {
    //         await this.radioBtnMale.click();
    //     } else {
    //         await this.radioBtnFemale.click();
    //     }
        
    // }

    async typeDateDOB () {
        console.log("Isi dari variable dateDOB = "+dateDOB);
        await this.fieldDOB.click();
        if (dateDOB > 1 && dateDOB < 10) {
            let strDate = dateDOB.toString();
            let strDateDOB = "0" + strDate;
            await this.fieldDOB.setValue(strDateDOB);
        } else {
            await this.fieldDOB.setValue(dateDOB);
        }
        await browser.pause(1000);
    }

    async typeMonthDOB () {
        console.log("Isi dari variable monthDOB = "+monthDOB);
        await this.fieldDOB.click();
        if (monthDOB > 0 && monthDOB < 10) {
            let strMonth = monthDOB.toString();
            let strMonthDOB = "0" + strMonth;
            await this.fieldDOB.setValue(strMonthDOB);
        } else {
            await this.fieldDOB.setValue(monthDOB);
        }
        await browser.pause(1000);
    }

    async typeYearDOB () {
        console.log("Isi dari variable yearDOB: "+yearDOB);
        await this.fieldDOB.setValue(yearDOB);
    }

    async typeDatebirth () {
        console.log("Isi dari variable datebirth = "+birthDOB);
        const timestampDOB = birthDOB.toISOString();
        console.log("Isi dari variable timestampDOB = "+timestampDOB);
        // Memisahkan string berdasarkan tanda hubung (-) dan T
        const parts = timestampDOB.split(/[-T]/);
        const year = parts[0];
        const month = parts[1];
        const day = parts[2].substr(0, 2); // substr(0, 2) digunakan untuk mendapatkan dua karakter pertama (tanggal)
        const strDatebirth = month+day+year;
        console.log("Isi dari strDatebirth = "+strDatebirth);
        await this.fieldDOB.setValue(strDatebirth);
    }

    async getDOB () {
        return (await this.fieldDOB.getValue());
    }

    async clearDOB () {
        await this.fieldDOB.clearValue();
    }

    //change phone number
    async clickChgPhoneNumber () {
        await this.bthChgPhoneNumber.click();
    }

    async clearFieldPhoneNumber() {
        await this.fieldPhoneNumber.clearValue();
//        await this.fieldPhoneNumber.doubleClick();
//        await browser.keys(['Backspace']);
    }

    async typeChgPhoneNumber (newPhoneNumber) {
        await this.fieldPhoneNumber.setValue(newPhoneNumber);
    }

    async clickSavePhoneNumber () {
        await this.btnSavePhoneNumber.click();
    }

    async getPhoneNumber () {
        return (await this.fieldPhoneNumber.getValue());
    }

    //change email
    async clickChgEmail () {
        await this.btnChgEmail.click();
    }

    async clearFieldEmail () {
//        await this.fieldEmail.clearValue();
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldEmail.doubleClick();
        await browser.keys(['Backspace']);
    }

    async typeChgEmail (newEmail) {
        await this.fieldEmail.setValue(newEmail);
    }

    async clickSaveEmail () {
        await this.btnSaveEmail.click();
    }

    async getEmail () {
        return (await this.fieldEmail.getValue());
    }

//SDC--    
    async typePhoneNumber(number) {
        return this.fieldPhoneNumber.setValue(number);
    }

    async clickAgreement() {
        return this.checkboxAgreement.click();
    }

    async clickSubmit() {
        return this.btnSubmit.click();
    }

    async typeEmailReg(email_acc) {
        return this.fieldEmailReg.setValue(email_acc)
    }

    async emptyFirstName() {
        // const selectorValue = this.fieldFirstName.getValue();
        // const backSpaces = new Array(selectorValue.length).fill('Backspace');
        await this.fieldFirstName.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldFirstName.doubleClick();
        await browser.keys(['Backspace']);
    }

    async emptyLastName() {
        await this.fieldLastName.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldLastName.doubleClick();
        await browser.keys(['Backspace']);
    }

    async emptyDOB() {
        await this.fieldDOB.doubleClick();
        await browser.keys(['Backspace']);
        await this.fieldDOB.doubleClick();
        await browser.keys(['Backspace']);
    }
//--SDC

    open () {
        return super.open();
    }
}

module.exports = new ProfilePage();