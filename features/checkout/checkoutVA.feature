Feature: Checkout - Payment

@test-6462
  Scenario: Checkout with VA
    Given User testerautostag25@mailinator.com has logged in
    Then User cart should empty
    # When User click Search button
    # When User search product Argan Hand Balm 30ml
    # When User click Add To Bag
    # When User scroll up page 1
    # Then Cart badge should available
    # When User click shopping cart button
    # Then Shopping cart page should available
    # Then Qty should 1
    Given Product has been added to the cart
    When User click Bayar
    When User select shipping method SAP Regular
    Then SAP Regular shipping method should available in price breakdown
    Then Shipping cost using SAP Regular should correct
    When User click Bayar
    When User select payment method VA BCA
    Then Total payment using VA BCA should correct
    When User click Bayar
    Then Payment popup should available
    When User click close icon
    Then Order page waiting for payment should available
    When User click Lakukan Pembayaran
    Then Payment popup should available
    When User click Copy
    When User pay in Midtrans BCA VA
    When User click Check Status
    Then Success page should open
    When User click Cek Status Pesanan
    Then Transaction detail page should open