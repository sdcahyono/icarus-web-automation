const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const ProfilePage = require('../pageobjects/profile.page');
const profilePage = require('../pageobjects/profile.page');

// const pages = {
//     register: RegisterPage
// }
//
//Given(/^User at home page$/, async () => {
//    // await HomePage.open()
//    await browser.url('https://web.staging-v1.tbsgroup.co.id/')
//    await browser.maximizeWindow()
//});
//

// Import modul node-localstorage
const LocalStorage = require('node-localstorage').LocalStorage;
// Lokasi penyimpanan lokal (bisa diatur sesuai kebutuhan Anda)
const localStorage = new LocalStorage('./scratch');

When(/^User type email account$/, async () => {
    //testerautostagnew0001
    let lastUsedEmail = localStorage.getItem('lastUsedEmail'); // Mengambil kode voucher terakhir dari penyimpanan lokal
    
    if (!lastUsedEmail) {
        nextNumber = 1;
    } else {
        var match = lastUsedEmail.match(/\d+/); // Mencari satu atau lebih angka dalam string
        var number = match ? match[0] : null; // Mengambil angka pertama yang ditemukan
        const lastNumber = number;
        const currentNumber = parseInt(lastNumber, 10);
        nextNumber = currentNumber+1;
    }
    const numberEmail = String(nextNumber).padStart(4, '0');
    const emailAccount = 'testerautostagnew'+numberEmail+'@mailinator.com';

    // Simpan kode voucher yang digunakan ke dalam penyimpanan lokal
    localStorage.setItem('lastUsedEmail', emailAccount);
    await LoginPage.typeEmail(emailAccount);    
})

When(/^User input first name (.+)$/, async (gender) => {
    tmpGdrFirst = gender;
    await ProfilePage.clearFirstName();
    await ProfilePage.typeFirstName();
    tempFirstNameReg = await ProfilePage.getFirstName();
});

When(/^User input last name (.+)$/, async(gender) => {
    tmpGdrLast = gender;
    await ProfilePage.clearLastName();
    await ProfilePage.typeLastName();
    tempLastNameReg = await ProfilePage.getLastName();
})



When(/^User input phone number$/, async() => {
    let lastUsedNumber = localStorage.getItem('lastUsedNumber'); // Mengambil kode voucher terakhir dari penyimpanan lokal
    console.log(lastUsedNumber);
    if (!lastUsedNumber) {
        // Jika ini pertama kali penggunaan atau localStorage kosong, mulai dari 1
        nextNumber = 1;
    } else {
        // const lastNumber = lastUsedNumber[lastUsedNumber.length - 4]; // Ambil karakter terakhir dari kode voucher terakhir yang digunakan
        const startIndex = lastUsedNumber.indexOf('8000010') + '8000010'.length;
        const angkaSetelah = lastUsedNumber.substring(startIndex);
        const currentNumber = parseInt(angkaSetelah, 10);
        nextNumber = currentNumber+1;
    }
    const backPhoneNumber = String(nextNumber).padStart(4, '0');
    const phoneNumber = '8000010' + backPhoneNumber;

    // Simpan kode voucher yang digunakan ke dalam penyimpanan lokal
    localStorage.setItem('lastUsedNumber', phoneNumber);
    await ProfilePage.typePhoneNumber(phoneNumber);
})

When(/^User input DOB$/, async () => {
    // await ProfilePage.typeDateDOB();
    // await ProfilePage.typeMonthDOB();
    // await ProfilePage.typeYearDOB();
    // tempDOBreg = await ProfilePage.getDOB();
    await ProfilePage.typeDatebirth();
    tempDOBreg = await ProfilePage.getDOB();
});

When(/^User select gender (.+)$/, async (Gender) => {
    tempGender = Gender;
    await ProfilePage.selectGenderProfile();
});

When(/^User click checkbox agreement$/, async() => {
    await ProfilePage.clickAgreement();   
})

When(/^User click Submit$/, async() => {
    await ProfilePage.clickSubmit();
})

Then(/^Snackbar register should appear$/, async() => {
    let text = "Selamat datang kembali, "+tempFirstNameReg;
    await expect(HomePage.snackbarNotif).toHaveText(text);
})

Then(/^Username should correct$/, async() => {
    await expect(HomePage.username).toHaveText("Hi, "+tempFirstNameReg);
})

When(/^User input field email (.+)$/, async(email) => {
    await ProfilePage.typeEmailReg(email);
})

Then(/^Snackbar message should appear (.+)$/, async(message) => {
    await expect(HomePage.snackbarNotif).toHaveText(message);
})

When(/^User input field phone (.+)$/, async(nomor) => {
    await ProfilePage.typePhoneNumber(nomor);
})

Then(/^Button submit should disabled$/, async() => {
    await expect(ProfilePage.btnSubmit).toBeDisabled();
})

When(/^User delete first name$/, async() => {
    await ProfilePage.emptyFirstName();   
})

Then(/^Error message in field first name should appear (.+)$/, async(message) => {
    await expect(ProfilePage.helperTextFirstName).toHaveText(message);
})

When(/^User delete last name$/, async() => {
    await ProfilePage.emptyLastName();
})

Then(/^Error message in field last name should appear (.+)$/, async(message) => {
    await expect(ProfilePage.helperTextLastName).toHaveText(message);
})

When(/^User clear DOB$/, async() => {
    await ProfilePage.emptyDOB();
})

Then(/^Error message in field DOB should appear (.+)$/, async(message) => {
    await expect(ProfilePage.helperTextDOB).toHaveText(message);
})