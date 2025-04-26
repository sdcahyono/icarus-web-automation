Feature: Login

@test-6647
  Scenario: Login with non existing email
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email testerautostag00@mailinator.com
    When User input otp code 434567
    Then User should redirected to register form
    Then Email field should disabled
