const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

//object page yg dibutuhkan
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const ProfilePage = require('../pageobjects/profile.page');
//const profilePage = require('../pageobjects/profile.page');




const pages = {
    home: HomePage
}


//========positive==========
//change profile (postive)
When(/^User click change profile button$/, async () => {
    await ProfilePage.clickChgProfile();
    await browser.pause(2000)
});


When(/^User click save changed profile$/, async () => {
    await ProfilePage.clickBtnSaveProfile();
});


Then(/^My account page open$/, async () => {
    await expect(ProfilePage.myAccountPage).toBeDisplayed();
    await browser.pause(2000)
});


Then(/^Change profile page open$/, async () => {
    await expect(ProfilePage.titleChgProfile).toBeDisplayed();
    await browser.pause(2000)
});

//sandra new edit
When(/^User edit first name (.+)$/, async (userGender) => {
    tmpGdrFirst = userGender;
    await ProfilePage.clearFirstName();
    await ProfilePage.typeFirstName();
    tempFirstName = await ProfilePage.getFirstName();
    console.log(tempFirstName);
});


When(/^User edit last name (.+)$/, async (userGender) => {
    tmpGdrLast = userGender;
    await ProfilePage.clearLastName();
    await ProfilePage.typeLastName();
    tempLastName = await ProfilePage.getLastName();
    console.log(tempLastName);
});



//sandra new edit
When(/^User edit gender to (.+)$/, async (userGender) => {
    tempGender = userGender;
    await ProfilePage.selectGenderProfile();
    await browser.pause(2000);
    //tempClassRadioChecked = await ProfilePage.getRadioCheckedClass();
    tempClassRadioChecked = await ProfilePage.radioBtnGender.getAttribute('class');
    console.log("Isi dari tempClassRadioChecked = "+tempClassRadioChecked);
});


// When(/^User edit gender to male$/, async () => {
//     tempSvgChecked = await ProfilePage.getSvgChecked();
//     tempSvgNotChecked = await ProfilePage.getSvgNotChecked();
//     await ProfilePage.selectMale();
// });

// When(/^User edit gender to female$/, async () => {
//     tempSvgChecked = await ProfilePage.getSvgChecked();
//     tempSvgNotChecked = await ProfilePage.getSvgNotChecked();
//     await ProfilePage.selectFemale();
// });



When(/^User edit DOB$/, async () => {
    // await ProfilePage.typeDateDOB();
    // await browser.pause(1000);
    // await ProfilePage.typeMonthDOB();
    // await browser.pause(1000);
    // await ProfilePage.typeYearDOB();
    await ProfilePage.typeDatebirth();
    tempDOB = await ProfilePage.getDOB();
});


Then(/^Alert success change profile appear$/, async () => {
    await expect(ProfilePage.alertSuccessSaveProfile).toBeDisplayed();
    await expect(ProfilePage.alertSuccessSaveProfile).toHaveText('Profil berhasil diubah');
});


Then(/^User first and last name changed$/, async () => {
    await expect(ProfilePage.myAccountName).toHaveText(tempFirstName + " " + tempLastName); 
});

Then(/^User name on greeting change$/, async () => {
    await expect(LoginPage.userName).toHaveText("Hi, " + tempFirstName);
});


Then(/^User gender changed to (.+) on My Account$/, async (gender) => {
    if (gender == "F") {
        await expect(ProfilePage.myAccountGender).toHaveText("Perempuan");
    } else {
        await expect(ProfilePage.myAccountGender).toHaveText("Laki-Laki");
    }
 });


Then(/^User first name changed on profile$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldFirstName).toHaveValue(tempFirstName);
});


Then(/^User last name changed on profile$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldLastName).toHaveValue(tempLastName);
});

Then(/^User DOB has changed$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldDOB).toHaveValue(tempDOB);
});

//sandra new edit
Then(/^User gender changed to (.+) on profile$/, async (userGender) => {
    tempGender = userGender;
    await browser.pause(1000);
    await expect(ProfilePage.radioBtnGender).toHaveAttribute('class', tempClassRadioChecked);
    console.log("Isi dari tempClassRadioChecked = "+tempClassRadioChecked);
});

Then(/^User gender changed to male$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.svgClassMale).toHaveAttribute('class', tempSvgChecked);
    await expect(ProfilePage.svgClassFemale).toHaveAttribute('class', tempSvgNotChecked);
});

Then(/^User gender changed to female$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.svgClassMale).toHaveAttribute('class', tempSvgNotCheckedBefore);
    await expect(ProfilePage.svgClassFemale).toHaveAttribute('class', tempSvgCheckedBefore);
});


When(/^User click back on browser$/, async () => {
    await browser.back()
});


//change phone number
When(/^User click change phone number$/, async () => {
    await ProfilePage.clickChgPhoneNumber();
});


Then(/^Change Phone Number page open$/, async () => {
    await browser.pause(2000);
    await expect(ProfilePage.titleChgPhoneNumber).toBeDisplayed();
});


When(/^User edit phone number (.+)$/, async (newPhoneNumber) => {
    await browser.pause(2000);
    await ProfilePage.clearFieldPhoneNumber();
    await ProfilePage.typeChgPhoneNumber(newPhoneNumber);
    tempPhoneNumber = await ProfilePage.getPhoneNumber();
});


When(/^User click save change phone number$/, async () => {
    await ProfilePage.clickSavePhoneNumber();
    await browser.pause(1000);
});


Then(/^Alert success change phone number appear$/, async () => {
    await expect(ProfilePage.alertSuccessSaveProfile).toBeDisplayed();
    await expect(ProfilePage.alertSuccessSaveProfile).toHaveText('Your Phone Number has been changed successfully');
});

Then(/^User phone number has changed$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldPhoneNumber).toHaveValue(tempPhoneNumber);
});


//change email
When(/^User click change email$/, async () => {
    await ProfilePage.clickChgEmail();
});

Then(/^Change Email page open$/, async () => {
    await browser.pause(2000);
    await expect(ProfilePage.titleChgEmail).toBeDisplayed();
});

When(/^User edit email (.+)$/, async (newEmail) => {
    await browser.pause(2000);
    await ProfilePage.clearFieldEmail();
    await ProfilePage.typeChgEmail(newEmail);
    tempEmail = await ProfilePage.getEmail();
});

When(/^User click save change email$/, async () => {
    await ProfilePage.clickSaveEmail();
    await browser.pause(1000);
});

Then(/^Alert success change email appear$/, async () => {
    await expect(ProfilePage.alertSuccessSaveProfile).toBeDisplayed();
    await expect(ProfilePage.alertSuccessSaveProfile).toHaveText('Your Email has been changed successfully');
});

Then(/^User email has changed$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldEmail).toHaveValue(tempEmail);
});

Then(/^User email has changed on My Account (.+)$/, async (newEmail) => {
    await browser.pause(2000);
    await expect(ProfilePage.myAccountEmail).toHaveText(newEmail);
});


//========negative==========
When(/^User edit invalid first name (.+)$/, async (invalidFirstName) => {
    tempInvalidFirstName = invalidFirstName;
    await ProfilePage.typeInvalidFirstName();
    await browser.pause(1000);
});

When(/^User edit invalid last name (.+)$/, async (invalidLastName) => {
    tempInvalidLastName = invalidLastName;
    await ProfilePage.typeInvalidLastName();
    await browser.pause(1000);
});

When(/^User empty first name$/, async () => {
    await ProfilePage.clearFirstName();
});

When(/^User empty last name$/, async () => {
    await ProfilePage.clearLastName();
});

When(/^User empty DOB$/, async () => {
    await ProfilePage.clearDOB();
});

//change profile (negative)
Then(/^Change profile page open and get data$/, async () => {
    await expect(ProfilePage.titleChgProfile).toBeDisplayed();
    await browser.pause(2000);
    tempFirstNameBefore = await ProfilePage.getFirstName();
    tempLastNameBefore = await ProfilePage.getLastName();
    tempDOBBefore = await ProfilePage.getDOB();
    tempSvgCheckedBefore = await ProfilePage.getSvgChecked();
    tempSvgNotCheckedBefore = await ProfilePage.getSvgNotChecked();
});

Then(/^User first and last name not changed$/, async () => {
    await expect(ProfilePage.myAccountName).toHaveText(tempFirstNameBefore + " " + tempLastNameBefore); 
});

Then(/^User name on greeting not changed$/, async () => {
    await expect(LoginPage.userName).toHaveText("Hi, " + tempFirstNameBefore);
});

Then(/^User gender not changed on My Account$/, async () => {
    await expect(ProfilePage.myAccountGender).toHaveText('Perempuan');     
});

Then(/^User first name not changed on profile$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldFirstName).toHaveValue(tempFirstNameBefore);
});

Then(/^User last name not changed on profile$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldLastName).toHaveValue(tempLastNameBefore);
});

Then(/^User gender not changed to male$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.svgClassMale).toHaveAttribute('class', tempSvgNotCheckedBefore);
    await expect(ProfilePage.svgClassFemale).toHaveAttribute('class', tempSvgCheckedBefore);
});

Then(/^User DOB not changed$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldDOB).toHaveValue(tempDOBBefore);
});

Then(/^Error message field required appeared$/, async() => {
    await expect(ProfilePage.helperTextFirstName).toHaveText("First Name is required");
    await expect(ProfilePage.helperTextLastName).toHaveText("Last Name is required");
    await expect(ProfilePage.helperTextDOB).toHaveText("Date of Birth is required");
    await browser.pause(2000);
})

Then(/^Error message characters length appeared$/, async() => {
    await expect(ProfilePage.helperTextFirstName).toHaveText("First Name can not be less than 3 characters");
    await expect(ProfilePage.helperTextLastName).toHaveText("Last Name can not be less than 3 characters");
    await browser.pause(2000);
})

Then(/^Error message field cannot have special characters appeared$/, async() => {
    await expect(ProfilePage.helperTextFirstName).toHaveText("First Name can not have special character(s)");
    await expect(ProfilePage.helperTextLastName).toHaveText("Last Name can not have special character(s)");
    await browser.pause(2000);
})


//change phone number (negative)
Then(/^Change Phone Number page open and get data$/, async () => {
    await browser.pause(2000);
    await expect(ProfilePage.titleChgPhoneNumber).toBeDisplayed();
    tempPhoneNumberBefore = await ProfilePage.getPhoneNumber();
});

Then(/^User phone number not changed$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldPhoneNumber).toHaveValue(tempPhoneNumberBefore);
});

When(/^User set phone number empty$/, async () => {
    await browser.pause(2000);
    await ProfilePage.clearFieldPhoneNumber();
//    await ProfilePage.typeChgPhoneNumber(newPhoneNumber);
//    tempPhoneNumber = await ProfilePage.getPhoneNumber();
});

Then(/^Error message in field Change Phone should appear (.+)$/, async(pesanPhoneField) => {
    await expect(ProfilePage.helperTextChangePhone).toHaveText(pesanPhoneField);
})



//change email (negative)
Then(/^Change Email page open and get data$/, async () => {
    await browser.pause(2000);
    await expect(ProfilePage.titleChgEmail).toBeDisplayed();
    tempEmailBefore = await ProfilePage.getEmail();
});

Then(/^User email not changed$/, async () => {
    await browser.pause(1000);
    await expect(ProfilePage.fieldEmail).toHaveValue(tempEmailBefore);
});

When(/^User set email to empty$/, async () => {
    await browser.pause(1000);
    await ProfilePage.clearFieldEmail();
    await browser.pause(2000);
});

Then(/^Error message in field Change Email should appear (.+)$/, async(pesanEmail) => {
    await expect(ProfilePage.helperTextChangeEmail).toHaveText(pesanEmail);
})