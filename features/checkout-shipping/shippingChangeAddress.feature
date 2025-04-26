Feature: Checkout-shipping


    @TEST-6475 @POSITIVE
    Scenario: Change selected address
        Given User <email> has logged in and in homepage
        Then User cart should empty
        When User search and add product Aloe to cart
        When User go to cart and continue to shipping page
        When User click address list box
        When User select address name Rumah Sendiri
        Then Selected shipping address is Rumah Sendiri
        Then Nama lengkap is Automation Test
        Then Nomor ponsel is 6280000000474
        Then Alamat lengkap is Jl. Raya Viktor Bsd No.15 Blok D, Ciater, Kec. Serpong, Kota Tangerang Selatan, Banten 15310
        Then Pesan pengiriman is Hati-hati banyak ranjau


        Examples:
        | email |
        | testerauto0707@test.com |