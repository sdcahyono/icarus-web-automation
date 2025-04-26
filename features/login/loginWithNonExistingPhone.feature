Feature: Login

@test-6651
    Scenario: Login with non existing phone
        Given User at home page
        When User click login button
        Then Login form should available
        When User input phoneNumber 6280000010000
        When User select Whatsapp
        When User input otp code 222333
        Then User should redirected to register form
        Then Phone number field should disabled