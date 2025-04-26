Feature: Login

@test-6652
    Scenario: Login with invalid phone number
        Given User at home page
        When User click login button
        Then Login form should available
        When User input phoneNumber 012000001017
        Then Login form error message should appear Phone Number is invalid