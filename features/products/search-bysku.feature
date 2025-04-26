Feature: Products

@tes-6637 @byskunotlogin
Scenario: Verify search by sku
    Given User at home page
    When User Click search field
    Then Txt search available
    When User type search by sku <sku>
    When User click icon search
    Then Result search by sku available
    When User click 1 product search by SKU
    Then Make sure the results match in PDP

    Examples:
      | sku       | namesku1   | namesku3 |
      | 126490021 | Bath lily | Moringa   |

@tes-6637 @byskulogin
Scenario: Verify search by sku
    Given User <email> has logged in
    When User Click search field
    Then Txt search available
    When User type search by sku <sku>
    When User click icon search
    Then Result search by sku available
    When User click 1 product search by SKU
    Then Make sure the results match in PDP


    Examples:
      | sku       | namesku1   | namesku3 |email|
      | 126490021 | Bath lily | Moringa   |testerauto1919@mailinator.com|
