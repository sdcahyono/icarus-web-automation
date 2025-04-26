Feature: Cart

@test-6631
    Scenario: Verify total product qty field on cart
        Given User testerautostag12@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product 145510039
        When User click Add To Bag
        When User click Add To Bag
        When User type search by sku 113800016
        When User click icon search
        When User click Add To Bag
        When User click shopping cart button
        Then Cart should contain 3 product
