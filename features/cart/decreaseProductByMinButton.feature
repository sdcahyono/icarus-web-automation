Feature: Cart

@test-6623
    Scenario: Decrease product qty by - button
        Given User testerauto1019@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product 145510039
        When User click Add To Bag
        When User click Add To Bag
        When User click shopping cart button
        Then Cart should contain 2 product
        When User click min button
        Then Qty should 1