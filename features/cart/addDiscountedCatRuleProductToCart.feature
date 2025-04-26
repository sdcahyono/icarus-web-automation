Feature: Cart

@test-6634
    Scenario: Add discounted catalog rule product to cart
        Given User testerautostag15@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product 155060108
        When User click Add To Bag
        Then Cart badge should available
        When User click shopping cart button
        Then Shopping cart page should available
        Then Qty should 1
        Then Catalog rule tag product GINGER CONDITIONER 250ML should (Test QA) Diskon exclude Mobile Apps 20RB
        Then Catalog rule price product GINGER CONDITIONER 250ML should correct
