Feature: Cart

@test-6627
    Scenario: Verify price breakdown without promo
        Given User testerautostag8@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User click Add To Bag in product Advance Set
        Then Add product to cart successful and user get message Advance Set berhasil ditambahkan ke tas
        When User click shopping cart button
        Then Cart should contain 1 product
        Then Label subtotal should available
        Then Subtotal amount should available
        Then Label Total should available
        Then Total amount without promo should available
