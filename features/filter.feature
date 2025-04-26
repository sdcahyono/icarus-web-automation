Feature: Filter

  Scenario: Verify functional Filter Z-A
    Given User at home page
#    When User click closepopup
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User click cmb filter
    When User filter desc Z-A
    Then Verify filter name by desc Z-A available
    Then User get 4 SKU by desc Z - A available
    Then Refresh browser

    Examples:
      | sku       | namesku1   | namesku2 |
      | 126490021 | Bath lily | Moringa   |

  Scenario: Verify functional Filter Lowest-Highest
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User click cmb filter
    When User filter asc  Low-High
    Then Verify filter price by asc Low-High available
    Then User get 4 SKU by asc Low-High available
    Then Refresh browser

    Examples:
      | sku       | namesku1   | namesku2 |
      | 126490021 | Bath lily | Moringa   |


  Scenario: Verify functional Filter Highest-Lowest
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User click cmb filter
    When User filter desc High-Lowest
    Then Verify filter price by desc High-Low available
    Then User get 4 SKU by desc High-Low available
    Then Refresh browser


    Examples:
      | sku       | namesku1   | namesku2 |
      | 126490021 | Bath lily | Moringa   |
