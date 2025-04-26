Feature: Checkout - Payment

@test-6472
  Scenario: Checkout with cat. Rule only discount
    Given User testerautostag22@mailinator.com has logged in
    Then User cart should empty
    When User click Search button
    When User search product 155100068
    When User click Add To Bag
    When User type search by sku 145510039
    When User click icon search
    When User click Add To Bag
    When User click Add To Bag
    When User click shopping cart button
    Then Shopping cart page should available
    Then Catalog rule and cart rule subtotal should correct
    Then Promo catalog and cart rule should available and promo amount should correct
    When User click Bayar
    When User select shipping method SAP Regular
    Then SAP Regular shipping method should available in price breakdown
    Then Shipping cost using SAP Regular should correct
    When User click Bayar
    # When User select payment method VA BCA
    When User select payment method Internet Banking
    Then Total payment with applied catalog rule and cart rule promo should correct
    When User click Bayar
    When User skip GWP option
    # When User click Bayar
    # Then Payment popup should available
    # When User click Copy
    # When User pay in Midtrans BCA VA
    # When User click Back To Merchant
    # Then Success page should open
    # When User pay with BCA VA
    # When User click Cek Status Pesanan
    # Then Transaction detail page should open
    When User pay with Octo
    Then Transaction detail page should open with status paid