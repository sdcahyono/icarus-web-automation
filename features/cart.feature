Feature: Cart

  Scenario: Not logged in user add product to cart
    Given User at home page
    When User click Search button
    When User scroll down page 200
    When User click Add To Bag button
    Then Login form should available
    Then Refresh browser

  Scenario: Logged in user add product to cart
#    Given User at home page
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then Username should available
    When User click Search button
#    When User scroll down page 200
    When User click Add To Bag button
    When User scroll up page 1
    Then Cart badge should available

    Examples:
      | email | otp             |
      | testerauto1017@mailinator.com | 123321 |

  Scenario: User able to edit product qty in cart by click + and - button
    When User click shopping cart button
    Then Shopping cart page should available
    Then Qty should 1
    When User click plus button
    Then Qty should 2
    When User click min button
    Then Qty should 1

  Scenario: User able to edit product qty in cart by type value
    When User input value 2
    Then Qty should 2
    When User input value 1
    Then Qty should 1

  Scenario: Verify if input quantity more than 10
    When User input value 11
    Then Qty should 10

  Scenario: User able to cancel delete product in cart
    When User click trash icon
    When User click close
    Then Qty should 10

  Scenario: User able to delete product in cart
    When User click trash icon
    When User click Confirm
    Then Delete successful and user get message Produk berhasil dihapus

  Scenario: User able to move product from cart to wishlist
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
#    Then Product Gift Mini Mango should not available in wishlist

  Scenario: User able to add product to cart from wishlist
    When User click Search button
#    When User search product Gift Mini Mango
    When User click product image
    When User click wishlist
    Then Add to wishlist successful with message Berhasil ditambahkan ke wishlist
    When User click wishlist icon
    Then Product Aloe Toner 250ml should available in wishlist
    When User click Add To Bag
    Then Cart badge should available
    When User click icon wishlist in wishlist page
    Then Remove from wishlist successful with message Berhasil dikeluarkan dari wishlist
    When User click shopping cart button
    Then Shopping cart page should available
    When User click trash icon
    When User click Confirm
    Then Delete successful and user get message Produk berhasil dihapus