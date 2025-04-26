Feature: Cart

@test-6635
    Scenario: Add discounted cart rule product to cart
        Given User testerautostag16@mailinator.com has logged in
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