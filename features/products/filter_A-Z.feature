Feature: Products

  @test-6638 @notlogin
  Scenario: Verify functional Filter A-Z
    Given User at home page
    When User Click search field
    When User type search by name <namesku1>
    When User click icon search
    Then Txt filter A-Z available
    When User retrieves SKU in name ascending order by web
    When User retrieves SKU in name ascending order by me 
    Then User verifies the order from by name asc

    Examples:
      | sku       | namesku1   | namesku2 |
      | 126490021 | Bath lily | Moringa   | 

@test-6638 @login
  Scenario: Verify functional Filter A-Z
    Given User <email> has logged in
    When User Click search field
    When User type search by name <namesku2>
    When User click icon search
    Then Txt filter A-Z available
    When User retrieves SKU in name ascending order by web
    When User retrieves SKU in name ascending order by me 
    Then User verifies the order from by name asc

    Examples:
      | sku       | namesku1   | namesku2 |email|
      | 126490021 | Bath lily | Moringa   | testerauto1919@mailinator.com|