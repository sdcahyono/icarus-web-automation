Feature: Register

@test-6661
  Scenario: Register as new customer
    Given User at home page
    When User click login button
    Then Login form should available
    When User type email account
    When User input otp code 434567
    Then User should redirected to register form
    Then Email field should disabled
    When User input first name M
    When User input last name M
    When User input phone number 
    When User input DOB
    When User select gender M
    When User click checkbox agreement
    When User click Submit
    # Then Snackbar register should appear
    Then Username should correct