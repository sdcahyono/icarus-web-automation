Feature: Cart

@test-6624
    Scenario: Decrease product qty by input field
        Given User testerautostag5@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product 145510039
        When User click Add To Bag
        When User click Add To Bag
        When User click shopping cart button
        Then Cart should contain 2 product
        When User input value 1
        Then Qty should 1