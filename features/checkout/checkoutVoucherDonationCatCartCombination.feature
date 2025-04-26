Feature: Checkout - Payment

@test-6474
  Scenario: Checkout with voucher + Donation + catalog rule + cart rule combination
    Given User testerauto1017@mailinator.com has logged in
    Then User cart should empty
    When User click Search button
    When User search product 101060431
    When User click Add To Bag
    When User click Add To Bag
    # When User type search by sku 145510039
    # When User click icon search
    # When User click Add To Bag
    When User type search by sku 155100068
    When User click icon search
    When User click Add To Bag
    # When User type search by sku 180150353
    When User type search by sku 126290171
    When User click icon search
    When User click Add To Bag
    When User click shopping cart button
    Then Shopping cart page should available
    Then Cart rule tag should available
    Then Catalog rule tag should available
    Then Catalog rule Banana price should correct
    Then Subtotal and Promo amount should correct
    When User click Bayar
    When User select shipping method SAP Regular
    Then SAP Regular shipping method should available in price breakdown
    Then Shipping cost using SAP Regular should correct
    When User click Bayar
    When User click Use Vouchers
    # When User click Voucher 30K
    When User click QA voucher 100K
    When User click button Simpan
    # Then Applied voucher 30K should available in voucher section and breakdown price
    Then Applied QA voucher 100K should available in voucher section and breakdown price
    When User click button Ayo Beri Donasi
    Then Donation popup should open
    When User select donation value 5000
    When User click button Beri Donasi
    Then Donation 5.000 should available in donation section and breakdown price
    When User select payment method Internet Banking
    Then Total payment checkout voucher donation cart catalog should correct
    When User click Bayar
    When User skip GWP option
    # When User click Bayar
    # Then Payment popup should available
    # When User click Pay now
    # When User input account id testuser00
    # When User click button Bayar
    # Then Transaction using Octo success
    # When User click Kembali ke website merchant
    When User pay with Octo
    Then Transaction detail page should open with status paid