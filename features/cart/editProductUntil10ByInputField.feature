Feature: Cart

@test-6626
    Scenario: Edit product qty until > 10 by input field
        Given User testerautostag7@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User click Add To Bag in product Advance Set
        Then Add product to cart successful and user get message Advance Set berhasil ditambahkan ke tas
        When User click shopping cart button
        Then Cart should contain 1 product
        Then Product ADVANCE SET should available in cart
        When User input value 11
        Then Qty should 10
        Then Plus button should disabled
