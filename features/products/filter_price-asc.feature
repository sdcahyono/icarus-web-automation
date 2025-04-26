Feature: Products

  @test-6641 @notlogin
Scenario: Verify functional Filter Lowest-Highest
  Given User at home page
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User click cmb filter
    When User filter asc  Low-High
    Then Verify filter price by asc Low-High available
    When User retrieves SKU in price ascending order by web
    When User retrieves SKU in price ascending order by me
    Then User verifies the order from low to high
    
    Examples:
      | sku       | namesku1   | namesku2 |
      | 126490021 |bath | Moringa   |

# @test-6641 @login
Scenario: Verify functional Filter Lowest-Highest
Given User <email> has logged in
When User Click search field
When User type search by name <namesku2>
When User click icon search
Then Txt filter A-Z available
When User click cmb filter
When User filter asc  Low-High
Then Verify filter price by asc Low-High available
When User retrieves SKU in price ascending order by web
When User retrieves SKU in price ascending order by me
Then User verifies the order from low to high

    Examples:
      | sku       | namesku1   | namesku2 |email|
      | 126490021 | full | Moringa   |testerauto1919@mailinator.com|

