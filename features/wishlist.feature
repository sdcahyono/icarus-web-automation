Feature: Wishlist

  Scenario: Not logged in user add product to wishlist
    Given User at home page
    When User click Search button
    When User search product Gift Mini Mango
    When User click product image
    When User click wishlist
    Then Login form should available
    Then Refresh browser

  Scenario: Logged in user able to add product to wishlist
#    Given User at home page
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then Username should available
    When User click Search button
    When User search product Gift Mini Mango
    When User click product image
    When User click wishlist
    Then Add to wishlist successful with message Berhasil ditambahkan ke wishlist
    When User click wishlist icon
    Then Product Gift Mini Mango should available in wishlist

    Examples:
      | email | otp             |
      | testerauto1017@mailinator.com | 123321 |

  Scenario: User remove product from wishlist PLP
    When User click icon wishlist in wishlist page
    Then Remove from wishlist successful with message Berhasil dikeluarkan dari wishlist

  Scenario: User remove wishlist from PDP
    When User click Search button
#    When User search product Gift Mini Mango
    When User click product image
    When User click wishlist
    Then Add to wishlist successful with message Berhasil ditambahkan ke wishlist
    When User click wishlist icon
    Then Product Gift Mini Mango should available in wishlist
    When User click product image
    When User click wishlist
    Then Remove from wishlist successful with message Berhasil dikeluarkan dari wishlist