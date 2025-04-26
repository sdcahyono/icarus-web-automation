Feature: Cart

@test-6627
    Scenario: Verify price breakdown with promo
        Given User testerautostag9@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product 145510039
        When User click Add To Bag
        When User click Add To Bag
        When User click shopping cart button
        Then Cart should contain 2 product
        Then Qty should 2
        Then Label subtotal should available
        Then Subtotal amount should available
        Then Promo tagging should available
        Then Promo should available and promo amount should correct
        Then Label Total should available
        Then Total amount with promo should available
