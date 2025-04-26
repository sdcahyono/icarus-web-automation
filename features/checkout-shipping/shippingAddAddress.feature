Feature: Checkout-shipping

    @TEST-6469 @POSITIVE
    Scenario: User able to add shipping address
        Given User <email> has logged in and in homepage
        Then User cart should empty
        When User search and add product Aloe to cart
        When User go to cart and continue to shipping page
        When User click address list box
        When User click Tambah Alamat and form new address should open
        When User input nama lengkap <namaLengkap>
        When User input nomor ponsel <nomorPonsel>
        When User input kecamatan <kecamatan>
        When User click Pilih Kode Pos and select postal code <kodePos>
        When User input alamat lengkap <alamatLengkap>
        When User click Atur Titik Lokasi and Titik Lokasi should open
        When User input Titik Lokasi <titikLokasi>
        When User click save Titik Lokasi
        When User input pesan pengiriman <pesanPengiriman>
        When User input nama alamat <namaAlamat>
        When User tick checkbox Simpan Alamat
        When User click button Save
        Then Selected shipping address is <namaAlamat>
        Then Nama lengkap is <namaLengkap>
        Then Nomor ponsel is 62<nomorPonsel>
        Then Alamat lengkap is <alamatLengkap>
        Then Pesan pengiriman is <pesanPengiriman>
        Then Titik Lokasi GO-SEND is correct
        Then Pesan pengiriman GO-SEND is <pesanPengiriman>


        Examples:
        | email | namaLengkap | nomorPonsel | kecamatan | kodePos | alamatLengkap                                                                            | pesanPengiriman                 | namaAlamat |    titikLokasi |
        | testerauto3050@test.com | Automation Sans | 80000000475 | Cilandak | 12410 | Jl. Raya Cilandak No.20 Blok A | Cilandak town square cav 15 | Work Place | Cilandak town square |