Feature: Register

@test-6664
  Scenario: Register with missing mandatory data
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email testerautostag18@mailinator.com
    When User input otp code 222333
    Then User should redirected to register form
    Then Button submit should disabled
    When User input first name M
    When User delete first name
    Then Error message in field first name should appear First Name is required
    When User input last name M
    When User delete last name
    Then Error message in field last name should appear Last Name is required
    When User input DOB
    When User clear DOB
    Then Error message in field DOB should appear Date of Birth is required
    When User input first name M
    When User input last name M
    When User input DOB
    When User click checkbox agreement
    Then Button submit should disabled