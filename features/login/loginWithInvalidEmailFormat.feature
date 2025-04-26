Feature: Login

@test-6648
  Scenario: Login with non existing email
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email testerautostag00@mailinator
    Then Login form error message should appear E-mail is invalid
