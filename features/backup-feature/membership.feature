Feature: Membership

  Scenario: Not logged in user unable to access membership page from mega menu
    Given User at home page
    When User click Membership menu
    Then Love Your Body Club page should available

  Scenario: Logged in user able to access membership page from mega menu
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then Username should available
    When User click Membership menu
    Then Membership page should available

    Examples:
      | email | otp             |
      | testerauto1017@mailinator.com | 123321 |

  Scenario: Verify component membership page
    When User click Membership menu
    Then Title Membership Benefits should available
    Then Member card image should available
    Then My QR Code button should available
    Then Member tier and card number should available
    Then Name should available
    Then Point information should available
    Then Progress tier should available
    When User click starter
    Then Starter Member Benefit should available
    When User click club
    Then Club Member Benefit should available
    When User click fan
    Then Fan Member Benefit should available
    When User scroll down page 1000
    Then BBOB section should available
    Then Donation section should available
    Then FAQ link should available
    Then Terms and conditions link should available
    Then How to redeem points link should available
    Then Refresh browser

  Scenario: User able to view QR code
    When User click my QR code button
    Then My QR Code page should open
    Then QR code should available
    When Back
    When User click card number
    Then My QR Code page should open
    Then QR code should available

  Scenario: Verify page qr code
    Then QR code title should available
    Then Description should available
    Then Expiration timer should available
    Then QR code should available
    Then Card number should available
    Then Button generate qr code should available

  Scenario: Verify button Generate QR Code is clickable
    When User click button Regenerate QR Code
    Then Button changed to regenerate again

  Scenario: User able to view point history
    When Back
    When User click Points
    Then Point History page should open

  Scenario: User able to access FAQ page
    When Back
    When User click FAQ
    Then FAQ page should open

  Scenario: User able to access Terms and Conditions page
    When Back
    When User click Terms and Conditions page
    Then Terms and Conditions page should open

  Scenario: User able to access How to Redeem Points page
    When Back
    When User click How to Redeem Points
    Then How to Redeem Points page should open