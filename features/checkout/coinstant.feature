Feature: Checkout Payment - Jamil

@test-6463
Scenario: Checkout Instant Payment
    Given User <email> has logged in
    Then User cart should empty
    Given Product has been succes added <sku> to cart
    # Given User at home page
    # When User click login button
    # Then Login form should available
    # When User clear phoneNumber field
    # When User input phoneNumber <phoneNumber>
    # When User select Whatsapp
    # When User input otp code <otp>
    # Then User name should appear
    # When User Click search field
    # Then Txt search available
    # When User type search by sku <sku>
    # When User click icon search
    # When User add to bag
    # When User click shopping cart button
    # Then Shopping cart page should available
    # Then Validate shopping cart
    When User click Bayar
#   Scenario: Verify user direct to shipment mehode Page
    Then user direct shipment methode page should available
    When User select <shippingMethod> shipping method
    Then SAP Express shipping cost should available
    Then Validate SAP Express shipping cost
    Then Grand total should correct on shipment methode page
    When User click Bayar
#   Scenario: Verify user direct to payment mehode Page
    Then user direct payment methode page should available
    Then Metode Pembayaran should available
#   Scenario: Verify pembayaran instan options
    When User click Pembayaran instan
    Then Gopay option should available
    Then Image gopay should available
    Then Text gopay should available
    Then Shopeepay option should available
    Then Image shopeepay should available
    Then Text shopeepay should available
#   Scenario: Verify user checkout instantpayment (Shopee-pay)
    When User select shopeepay
    Then Grand total should correct on payment methode page
    When User click Bayar
    When User click Copyqr
    When User pay Midtrans instantpayment
#  When User back to merchant landing page
    When User click Cek Status Pesanan
    Then Verify order

Examples:
    | phoneNumber | otp   | sku |shippingMethod |email|
    | 62800001905 | 123321 |126001103 |SAP Express| testerauto1919@mailinator.com|

