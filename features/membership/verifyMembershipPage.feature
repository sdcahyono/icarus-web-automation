Feature: Membership

@test-6658
  Scenario: Verify membership page
    Given User testerauto1017@mailinator.com has logged in
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