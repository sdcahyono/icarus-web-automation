Feature: Cart

@test-6621
    Scenario: Increase product qty by + button
        Given User testerautostag4@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User click Add To Bag in product Advance Set
        Then Add product to cart successful and user get message Advance Set berhasil ditambahkan ke tas
        When User click shopping cart button
        Then Cart should contain 1 product
        Then Product ADVANCE SET should available in cart
        When User click plus button
        Then Qty should 2
        When User click plus button
        Then Qty should 3