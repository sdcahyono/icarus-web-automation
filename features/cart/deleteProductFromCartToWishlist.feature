Feature: Cart

@test-6630
    Scenario: Delete product from cart to wishlist
        Given User testerautostag11@mailinator.com has logged in
        Then User cart should empty
        When User click Search button
        When User search product Aloe Toner 250ml
        When User click Add To Bag
        When User scroll up page 1
        Then Cart badge should available
        When User click shopping cart button
        Then Shopping cart page should available
        Then Qty should 1
        When User click trash icon
        When User click Pindahkan Ke Wishlist
        Then Add to wishlist successful with message Berhasil ditambahkan ke wishlist
        When User click wishlist icon
        Then Product Aloe Toner 250ml should available in wishlist
        When User click icon wishlist in wishlist page
        Then Remove from wishlist successful with message Berhasil dikeluarkan dari wishlist
