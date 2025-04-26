Feature: Membership

@test-6660
  Scenario: QR Code Page
    Given User testerauto1017@mailinator.com has logged in
    When User click Membership menu
    When User click my QR code button
    Then My QR Code page should open
    Then QR code title should available
    Then Description should available
    Then Expiration timer should available
    Then QR code should available
    Then Card number should available
    Then Button generate qr code should available