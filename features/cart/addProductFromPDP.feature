Feature: Cart

@test-6565
    Scenario: Add product to cart from PDP
        Given User testerautostag1@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product 145510039
        When User click on produk
        When User click Add to Bag in PDP Arber
        Then Add product to cart successful and user get message Arber Eau De Toilette 100ml berhasil ditambahkan ke tas
        When User click shopping cart button
        Then Cart should contain 1 product
        Then Product ARBER EAU DE TOILETTE 100ML should available in cart
