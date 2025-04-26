Feature: Login

  Scenario: User login with email
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then Username should available

    Examples:
      | email | otp             |
      | testerauto1017@mailinator.com | 123321 |


  Scenario: User logout from website
#    Given User at home page
    When User click username
    When User click logout
    When User click confirm
    Then Login button should available
    Then Refresh browser
#    Then Close browser


  Scenario: User login with phone number
#    Given User at home page
    When User click login button
    Then Login form should available
    When User clear phoneNumber field
    When User input phoneNumber <phoneNumber>
    When User select Whatsapp
    When User input otp code <otp>
    Then Username should available

    Examples:
      | phoneNumber | otp |
      | 6280000001017 | 333222 |


  Scenario: User logout from website
#    Given User at home page
    When User click username
    When User click logout
    When User click confirm
    Then Login button should available
    Then Refresh browser
#    Then Close browser


  Scenario: User login with invalid OTP
#    Given User at home page
    When User click login button
    Then Login form should available
    When User clear phoneNumber field
    When User input email <email>
    When User input otp code <otp>
    Then User get message OTP yang Kamu masukkan salah, mohon cek ulang

    Examples:
      | email | otp             |
      | testpush1@yopmail.com | 123321 |