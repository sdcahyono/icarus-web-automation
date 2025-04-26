Feature: Checkout - Payment

@test-6470
  Scenario: Checkout with cat. Rule only discount
    Given User testerautostag21@mailinator.com has logged in
    Then User cart should empty
    When User click Search button
    When User search product 155060108
    When User click Add To Bag
    Then Cart badge should available
    When User click shopping cart button
    Then Shopping cart page should available
    Then Qty should 1
    Then Catalog rule price should correct
    When User click Bayar
    When User select shipping method SAP Regular
    Then SAP Regular shipping method should available in price breakdown
    Then Shipping cost using SAP Regular should correct
    When User click Bayar
    When User select payment method VA BCA
    Then Total payment using VA BCA should correct
    Then Catalog promo tag should available
    # When User click Bayar
    # Then Payment popup should available
    # When User click Copy
    # When User pay in Midtrans BCA VA
    # When User click Back To Merchant
    # Then Success page should open
    When User pay with BCA VA
    When User click Cek Status Pesanan
    Then Transaction detail page should open