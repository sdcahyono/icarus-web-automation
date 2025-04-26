Feature: Login

@test-6645
  Scenario: Login with valid email and otp
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then Username should available

    Examples:
      | email | otp             |
      | testerautostag17@mailinator.com | 123321 |
