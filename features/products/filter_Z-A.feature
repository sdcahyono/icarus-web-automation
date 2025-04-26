Feature: Products

@test-6639 @notlogin
Scenario: Verify functional Filter Z-A
    Given User at home page
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User click cmb filter
    When User filter desc Z-A
    Then Verify filter name by desc Z-A available
    When User retrieves SKU in name descending order by web
    When User retrieves SKU in name descending order by me 
    Then User verifies the order from by name desc

    Examples:
    | sku       | namesku1   | namesku2 |
    | 126490021 | Bath lily | Moringa   |

@test-6639 @login
Scenario: Verify functional Filter Z-A
    Given User <email> has logged in
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User click cmb filter
    When User filter desc Z-A
    Then Verify filter name by desc Z-A available
    When User retrieves SKU in name descending order by web
    When User retrieves SKU in name descending order by me 
    Then User verifies the order from by name desc
    
    Examples:
    | sku       | namesku1   | namesku2 |email|
    | 126490021 | Bath lily | Moringa   | testerauto1919@mailinator.com|