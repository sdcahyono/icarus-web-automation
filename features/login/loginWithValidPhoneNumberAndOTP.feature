Feature: Login

@test-6649
    Scenario: Login with valid phone number and otp
        Given User at home page
        When User click login button
        Then Login form should available
        When User input phoneNumber 6280000001017
        When User select Whatsapp
        When User input otp code 222333
        Then Username should available