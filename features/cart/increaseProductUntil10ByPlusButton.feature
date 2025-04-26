Feature: Cart

@test-6625
    Scenario: Increase product qty until > 10 by + button
        Given User testerautostag6@mailinator.com has logged in
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
        When User click plus button
        Then Qty should 4
        When User click plus button
        Then Qty should 5
        When User click plus button
        Then Qty should 6
        When User click plus button
        Then Qty should 7
        When User click plus button
        Then Qty should 8
        When User click plus button
        Then Qty should 9
        When User click plus button
        Then Qty should 10
        Then Plus button should disabled
        When User click plus button
        Then Qty should 10