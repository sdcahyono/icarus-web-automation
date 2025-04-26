Feature: Register

@test-6663
  Scenario: Register as phone existing customer (new email)
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email testerautostag18@mailinator.com
    When User input otp code 222333
    Then User should redirected to register form
    When User input first name M
    When User input last name M
    When User input field phone 80000001109
    When User input DOB
    When User select gender M
    When User click checkbox agreement
    When User click Submit
    Then Snackbar message should appear Nomor Telepon sudah terdaftar