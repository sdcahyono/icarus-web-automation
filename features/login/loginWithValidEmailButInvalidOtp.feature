Feature: Login

@test-6646
  Scenario: Login with valid email but invalid otp
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then User get message OTP yang Kamu masukkan salah, mohon cek ulang

    Examples:
      | email | otp             |
      | testpush1@yopmail.com | 123321 |
