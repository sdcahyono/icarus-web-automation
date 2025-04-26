Feature: Cart

@test-6633
    Scenario: Click on product name
        Given User testerautostag14@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User click Add To Bag in product Advance Set
        Then Add product to cart successful and user get message Advance Set berhasil ditambahkan ke tas
        When User click shopping cart button
        Then Cart should contain 1 product
        Then Product ADVANCE SET should available in cart
        When User click on product name in cart
        Then User should redirected to PDP Advance Set

