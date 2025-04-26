Feature: Products

@test-6642 @notlogin
Scenario: Verify search by namesku condition notlogin

Scenario: Verify search by sku
  Given User <email> has logged in
    When User Click search field
    Then Txt search available
    When User type search by sku <sku>
    When User click icon search
    Then Result search by sku available
    When User click 1 product search by SKU
    Then Make sure the results match in PDP
    When User click How to Use
    When User click Reviews
    When User click wishlist
    When User click button plus PDP
    When User click button min PDP
    When User click add to bag
    When User verify footer PDP
    When User click variant PDP


    Examples:
    | sku       |email|
    | 126490021 |testerauto1919@mailinator.com|
