Feature: Products

@test-6644
    Scenario: Add discounted cart rule product to cart
        Given User testerautostag25@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product 155060108
        Then Catalog rule price should available
        Then Original price should available
        Then Catalog rule percentage should available
        Then Catalog rule name should available
        When User click product image
        Then Catalog rule price in PDP should available
        Then Original price in PDP should available
        Then Catalog rule percentage in PDP should available
        Then Catalog rule name in PDP should available
        Then Catalog rule price in footer PDP should available
        Then Original price in footer PDP should available