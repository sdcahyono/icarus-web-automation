Feature: My Account

  Scenario: Verify my account page
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then Username should available
    When User click username
    Then Profile picture should available
    Then Account name should available
    Then Member Sejak field should available
    Then Jenis Kelamin field should available
    Then Jenis Kelamin value should available
    Then Email field should available
    Then Email value should available
    Then Button change profile should available
    Then Button Keluar should available
    Then Menu My Transactions should available
    Then Menu Wishlist should available
    Then Menu Membership should available
    Then Menu My Vouchers should available
    Then Menu Saved Cards should available
    Then Menu Saved Address should available
    Then Menu Beauty Profile should available
    Then Menu Change Email should available
    Then Menu Change Phone Number should available

    Examples:
      | email | otp             |
      | testerauto1017@mailinator.com | 123321 |