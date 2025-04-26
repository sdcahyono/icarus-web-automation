Feature: Products
@test-6640 @notlogin
Scenario: Verify functional Filter Highest-Lowest
  Given User at home page
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User click cmb filter
    When User filter desc High-Lowest
    Then Verify filter price by desc High-Low available
    When User retrieves SKU in price descending order by web
    When User retrieves SKU in price descending order by me
    Then User verifies the order from high to low
    
    # When User retrieves SKU in price descending order
    # Then User verifies the order from high to low

    Examples:
      | sku       | namesku1   | namesku2 |
      | 126490021 | Bath lily | Moringa   |

@test-6640 @login
  Scenario: Verify functional Filter Highest-Lowest
  Given User <email> has logged in
  When User Click search field
  When User type search by name <namesku2>
  When User click icon search
  Then Txt filter A-Z available
  When User click cmb filter
  When User filter desc High-Lowest
  Then Verify filter price by desc High-Low available
  When User retrieves SKU in price descending order by web
  When User retrieves SKU in price descending order by me
  Then User verifies the order from high to low
    


    Examples:
      | sku       | namesku1   | namesku2 |email|
      | 126490021 | Bath lily | Moringa   |testerauto1919@mailinator.com|
