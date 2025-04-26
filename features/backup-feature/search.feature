Feature: Search

  Scenario: Verify search by namesku
    Given User at home page
#    When User click closepopup
    When User Click search field
    Then Txt search available
    When User type search by name <namesku1>
    When User click icon search
    Then Result search available
#    When User click 1 product search
#    Then User close browser


      Examples:
    | sku       | namesku1   | namesku2 |
    | 126490021 | Bath lily | Moringa   |

  Scenario: Verify search by sku
#    Given User at home page
    When User Click search field
    Then Txt search available
    When User type search by sku <sku>
    When User click icon search
    Then Result search by sku available
    When User click 1 product search by SKU
    Then Make sure the results match
#    Then Refresh browser

    Examples:
      | sku       | namesku1   | namesku3 |
      | 126490021 | Bath lily | Moringa   |


  Scenario: Verify search by invalidskuname
    When User Click search field
    Then Txt search available
    When User type search by invalid sku <namesku3>
    When User click icon search
    Then Result search by invalid sku available


    Examples:
      | sku       | namesku1   | namesku2 | namesku3|
      | 126490021 | Bath lily | Moringa   | ngasal  |