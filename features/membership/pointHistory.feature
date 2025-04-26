Feature: Membership

@test-6659
  Scenario: Point history
    Given User testerauto1017@mailinator.com has logged in
    When User click Membership menu
    When User click Points
    Then Point History page should open
    Then Title Point Activities should available
    Then Tab Activities should available
    Then Tab Will Expired should available