Feature: Checkout - Payment

@test-6465
  Scenario: Checkout with Internet Banking 
    Given User testerautostag24@mailinator.com has logged in
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
    When User select payment method Internet Banking
    Then Total payment using Internet Banking should correct
    # When User click Bayar
    # Then Payment popup should available
    # When User click Pay now
    # When User input account id testuser00
    # When User click button Bayar
    # Then Transaction using Octo success
    # When User click Kembali ke website merchant
    When User pay with Octo
    Then Transaction detail page should open with status paid