Feature: Register

@test-6662
  Scenario: Register as email existing customer (new phone)
    Given User at home page
    When User click login button
    Then Login form should available
    When User input phoneNumber 6280000000017
    When User select Whatsapp
    When User input otp code 222333
    Then User should redirected to register form
    When User input first name M
    When User input last name M
    When User input field email testerautostag17@mailinator.com
    When User input DOB
    When User select gender M
    When User click checkbox agreement
    When User click Submit
    Then Snackbar message should appear Email sudah terdaftar