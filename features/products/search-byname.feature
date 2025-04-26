Feature: Products

@test-6636 @notlogin
Scenario: Verify search by namesku condition notlogin
    Given User at home page
#    When User click closepopup
    When User Click search field
    Then Txt search available
    When User type search by name <namesku1>
    When User click icon search
    Then Result search available
    When User click 1 product search
    Then Refresh browser
#    Then User close browser

    Examples:
    | sku       | namesku1   | namesku2 |
    | 126490021 | Bath lily | Moringa   |

@test-6636 @notlogin
 Scenario: Verify search by invalidskuname
    When User Click search field
    Then Txt search available
    When User type search by invalid sku <namesku3>
    When User click icon search
    Then Result search by invalid sku available


    Examples:
      | sku       | namesku1   | namesku2 | namesku3|
      | 126490021 | Bath lily | Moringa   | ngasal  |


@test-6636 @login
Scenario: Verify search by namesku condition login
    # Given User at home page
    Given User <email> has logged in
    When User Click search field
    Then Txt search available
    When User type search by name <namesku1>
    When User click icon search
    Then Result search available
    When User click 1 product search
    Then Refresh browser
#    Then User close browser

    Examples:
    | sku       | namesku1   | namesku2 |email|
    | 126490021 | Bath lily | Moringa   |testerauto1919@mailinator.com|