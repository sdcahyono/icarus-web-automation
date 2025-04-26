Feature: Checkout-shipping


    @TEST-6476 @POSITIVE
    Scenario: Edit existing address
        Given User <email> has logged in and in homepage
        Then User cart should empty
        When User search and add product Almond to cart
        When User go to cart and continue to shipping page
        When User click Ubah and form edit address should open
        When User clear nama lengkap
        When User input nama lengkap <namaLengkap>
        When User clear nomor ponsel
        When User input nomor ponsel <nomorPonsel>
        When User clear kecamatan field
        When User input kecamatan <kecamatan>
        When User click Pilih Kode Pos and select postal code <kodePos>
        When User clear alamat lengkap
        When User input alamat lengkap <alamatLengkap>
        When User click Ubah Titik Lokasi and Titik Lokasi should open
        When User clear Titik Lokasi
        When User input Titik Lokasi <titikLokasi>
        When User click save Titik Lokasi
        When User clear pesan pengiriman
        When User input pesan pengiriman <pesanPengiriman>
        When User clear nama alamat
        When User input nama alamat <namaAlamat>
        When User click button Save
        Then Popup message Alamat berhasil diubah should open
        Then Selected shipping address is <namaAlamat>
        Then Nama lengkap is <namaLengkap>
        Then Nomor ponsel is 62<nomorPonsel>
        Then Alamat lengkap is <alamatLengkap>
        Then Pesan pengiriman is <pesanPengiriman>
        Then Titik Lokasi GO-SEND is correct
        Then Pesan pengiriman GO-SEND is <pesanPengiriman>

        Examples:
        | email | namaLengkap | nomorPonsel | kecamatan | kodePos | alamatLengkap                                                                            | pesanPengiriman                 | namaAlamat |    titikLokasi |
        | testerauto114044@test.com | Automation Edit | 80000000444 | Kebayoran Lama | 12240 | Jl. Arteri Pd. Indah, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan | Gandaria City cav 21 | Automation Edit | Gandaria City |