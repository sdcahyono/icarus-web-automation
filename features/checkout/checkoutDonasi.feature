Feature: Checkout - Payment

@test-6467
  Scenario: Checkout with Donasi
    Given User testerautostag23@mailinator.com has logged in
    Then User cart should empty
    When User click Search button
    When User search product Hair Slides
    When User click Add To Bag
    Then Cart badge should available
    When User click shopping cart button
    Then Shopping cart page should available
    Then Qty should 1
    When User click Bayar
    When User select shipping method SAP Regular
    Then SAP Regular shipping method should available in price breakdown
    Then Shipping cost using SAP Regular should correct
    When User click Bayar
    Then Donation should available
    When User click button Ayo Beri Donasi
    Then Donation popup should open
    When User select donation value 5000
    When User click button Beri Donasi
    Then Donation 5.000 should available in donation section and breakdown price
    # When User select payment method VA BCA
    When User select payment method Internet Banking
    Then Total payment with donation should correct
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