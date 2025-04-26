Feature: Checkout-shipping


    @TEST-6479 @POSITIVE
    Scenario: Choose Instant Shipping Method
        Given User <email> has logged in and in homepage
        Then User cart should empty
        When User search and add product <produk> to cart
        When User go to cart and continue to shipping page
        When User click address list box
        When User select address name <namaAlamat>
        Then Section with Instant label should available
        Then <shippingMethod> should available on shipping method section
        When User select <shippingMethod> shipping method
        Then <shippingMethod> shipping method should appeared on breakdown price
        Then Shipping cost <shippingMethod> on breakdown price should correct
        Then Total payment on breakdown price should correct
        When User click Bayar
        When User select payment method VA BCA
        Then Total payment on breakdown price should correct
        When User pay with BCA VA
        When User click Cek Status Pesanan
        Then Transaction detail page should open
        Then Shipping name <shippingMethod> and shipping detail in transaction detail should be correct
        # Then Shipping method in detail transaction is <shippingMethod>
        # Then Shipping address name is <namaLengkap> in detail transaction
        # Then Shipping address phone number is <nomorPonsel> in detail transaction
        # Then Shipping address full address is <alamatLengkap> in detail transaction


        Examples:
        | email | produk | namaAlamat | shippingMethod | namaLengkap | nomorPonsel | alamatLengkap                                                                            | 
        | testerauto0707@test.com | Aloe Caring Roll On | Rumah pinpoint | GO-SEND Instant | Sandra | 6280000000474 | Jl. Raya Viktor Bsd No.15 Blok D, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310 Serpong, Banten, Tangerang Selatan | 