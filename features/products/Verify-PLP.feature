Feature: Products

  @test-6643
  Scenario: Verify PLP in search SKU
    Given User <email> has logged in
    When User Click search field
    Then Txt search available
    When User type search by name <namesku1>
    When User click icon search
    Then Txt filter A-Z available
    Then Verify total PLP is show
    Then Verify Img PLP is show
    Then Verify List SKU name PLP is show
    Then Verify List SKU price PLP is show
    When User click Add To Bag
    When User scroll down page "800 pixels"
    When User scroll up page "800 pixels"
    When User click product image


    Examples:
      | sku       | namesku1   | namesku2 |email|
      | 126490021 | Bath lily | Moringa   | testerauto1919@mailinator.com|
