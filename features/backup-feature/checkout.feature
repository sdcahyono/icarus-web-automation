Feature: Checkout - Payment

@test-6462
  Scenario: Checkout with VA
    Given User at home page
    When User click login button
    Then Login form should available
    When User input email <email>
    When User input otp code <otp>
    Then Username should available
    When User click Search button
    When User search product Argan Hand Balm 30ml
    When User click Add To Bag
    When User scroll up page 1
    Then Cart badge should available
    When User click shopping cart button
    Then Shopping cart page should available
    Then Qty should 1
    When User click Bayar
    When User select shipping method SAP Regular
    Then SAP Regular shipping method should available in price breakdown
    Then Shipping cost using SAP Regular should correct
    When User click Bayar
    When User select payment method VA BCA
    Then Total payment using VA BCA should correct
    When User click Bayar
    Then Payment popup should available
    When User click Back To Merchant
    Then Order page waiting for payment should available
    When User click Lakukan Pembayaran
    Then Payment popup should available
    When User click Copy
    When User pay in Midtrans BCA VA
    When User click Back To Merchant
    Then Success page should open
    When User click Cek Status Pesanan
    Then Transaction detail page should open


    Examples:
      | email | otp             |
      | testerauto1017@mailinator.com | 123321 |

@test-6464
  # Scenario: Checkout with Debit/Credit Card
  #   When User click Search button
  #   When User search product Hair Slides
  #   When User click Add To Bag
  #   Then Cart badge should available
  #   When User click shopping cart button
  #   Then Shopping cart page should available
  #   Then Qty should 1
  #   When User click Bayar
  #   When User select shipping method SAP Regular
  #   Then SAP Regular shipping method should available in price breakdown
  #   Then Shipping cost using SAP Regular should correct
  #   When User click Bayar
  #   When User click Kartu debit kredit
  #   When User select credit card
  #   When User input nomor kartu 4811111111111114
  #   When User input tanggal kadaluarsa 12 25
  #   When User input cvv 123
  #   When User click Bayar
    # BLOCKED error trx dengan cc


@test-6465
  Scenario: Checkout with Internet Banking 
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
    When User click Bayar
    Then Payment popup should available
    When User click Pay now
    When User input account id testuser00
    When User click button Bayar
    Then Transaction using Octo success
    When User click Kembali ke website merchant
    Then Transaction detail page should open with status paid

@test-6467
  Scenario: Checkout with Donasi
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
    When User select payment method VA BCA
    Then Total payment with donation should correct
    When User click Bayar
    Then Payment popup should available
    When User click Copy
    When User pay in Midtrans BCA VA
    When User click Back To Merchant
    Then Success page should open
    When User click Cek Status Pesanan
    Then Transaction detail page should open

@test-6470
  Scenario: Checkout with cat. Rule only discount
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
    When User click Bayar
    Then Payment popup should available
    When User click Copy
    When User pay in Midtrans BCA VA
    When User click Back To Merchant
    Then Success page should open
    When User click Cek Status Pesanan
    Then Transaction detail page should open

@test-6471
  Scenario: Checkout with cart rule only discount
    When User click Search button
    When User search product 145510039
    When User click Add To Bag
    When User click Add To Bag
    When User click shopping cart button
    Then Shopping cart page should available
    Then Qty should 2
    Then Promo tagging should available
    Then Promo should available and promo amount should correct
    When User click Bayar
    When User select shipping method SAP Regular
    Then SAP Regular shipping method should available in price breakdown
    Then Shipping cost using SAP Regular should correct
    When User click Bayar
    When User select payment method VA BCA
    Then Total payment with applied cart rule promo should correct
    When User click Bayar
    Then Payment popup should available
    When User click Copy
    When User pay in Midtrans BCA VA
    When User click Back To Merchant
    Then Success page should open
    When User click Cek Status Pesanan
    Then Transaction detail page should open



#  Scenario: Verify Send As Gift section
#    When User click Search button
#    When User search product Argan Hand Balm 30ml
#    When User click Add To Bag
#    When User scroll up page 1
#    Then Cart badge should available
#    When User click shopping cart button
#    Then Shopping cart page should available
#    Then Qty should 1
#    When User click Bayar
#    Then Send As Gift section should available
#    When User click send as gift info
#    Then Informasi send as gift should available
#    Then Refresh browser
#
#  Scenario: User able to add greeting card
#    When User click Tambahkan Kartu Ucapan
#    Then Kartu ucapan form should open
#    When User select greeting card image
#    When User input field Dari Saya
#    When User input field Untuk Kamu
#    When User input field Pesan Kita
#    When User click Save
#    Then Add greeting card successful and available in checkout page
#    Then Greeting card should available in price breakdown
#    When User click Ubah Kartu Ucapan
#    Then Field Dari should be filled Saya
#    Then Field Untuk should be filled Kamu
#    Then Field Pesan should be filled Kita
#
#  Scenario: User able to edit greeting card
#    When User input field Dari Saya edit
#    When User input field Untuk Kamu edit
#    When User input field Pesan Kita edit
#    When User click Save
#    When User click Ubah Kartu Ucapan
#    Then Field Dari should be filled Saya edit
#    Then Field Untuk should be filled Kamu edit
#    Then Field Pesan should be filled Kita edit
#
#  Scenario: User able to cancel edit greeting card
#    When User input field Dari Saya
#    When User input field Untuk Kamu
#    When User input field Pesan Kita
#    When User click Discard
#    When User click Discard in confirmation page
#    When User click Ubah Kartu Ucapan
#    Then Field Dari should be filled Saya edit
#    Then Field Untuk should be filled Kamu edit
#    Then Field Pesan should be filled Kita edit
#    When User click Close form
#    When User click Discard in confirmation page
#
#  Scenario: User able to cancel delete greeting card
#    When User click trash
#    When User click Tidak
#    Then Greeting card should still available in checkout page
#
#  Scenario: User able to delete greeting card
#    When User click trash
#    When User click Yakin
#    Then Delete successful, User get message Send as Gift berhasil dihapus
#    Then Greeting card should not available in checkout page
#
#  Scenario: User able to cancel add greeting card
#    When User click Tambahkan Kartu Ucapan
#    Then Kartu ucapan form should open
#    When User click Discard
#    When User click Discard in confirmation page
#    Then Button Tambahkan Kartu Ucapan should available
#
#  Scenario: Verify add greeting card if not input dari, untuk, pesan
#    When User click Tambahkan Kartu Ucapan
#    Then Kartu ucapan form should open
#    When User click Save
#    Then Error message in field Dari should appear Nama pengirim harus diisi
#    Then Error message in field Untuk should appear Nama penerima harus diisi
#    Then Error message in field Pesan should appear Pesan harus diisi
#
#  Scenario: Verify if input dari, untuk, pesan less than 3 characters
#    When User input field Dari Qq
#    Then Error message in field Dari should appear Nama harus lebih dari 3 karakter
#    When User input field Untuk Aa
#    Then Error message in field Untuk should appear Nama harus lebih dari 3 karakter
#    When User input field Pesan Bb
#    Then Error message in field Pesan should appear Pesan harus lebih dari 3 karakter
#
#  Scenario: Verify Shipping Address section
#    When User at checkout page
#    Then Shipping address section should available
#
#  Scenario: Verify User able to cancel add shipping address
#    When User click address list box
#    When User click Tambah Alamat
#    Then Form Tambah Alamat Baru should open
#    When User click Cancel in form Tambah Alamat
#    When User click Yes, Im Sure in Confirm Cancel
#    Then Form Tambah Alamat should close
#
#  Scenario: Verify Form Tambah Alamat
#    When User click address list box
#    When User click Tambah Alamat
#    Then Form Tambah Alamat Baru should open
#    Then Form title should Tambah Alamat Baru
#    Then Penerima section should available
#    Then Alamat section should available
#    Then Checkbox Simpan Alamat should available
#    Then Button Save should available
#    Then Button Cancel should available
#    Then Button close should available
#
#  Scenario: User able to add shipping address
#    When User input nama lengkap Tester Auto
#    When User input nomor ponsel 80000001017
#    When User input kecamatan Ayah
#    When User click Pilih kode pos
#    When User select postal code
#    When User input alamat lengkap Jl. Pantai Ayah 212, RT 3 RW 25
#    When User input pesan pengiriman Hati-hati banyak ranjau
#    When User input nama alamat Rumah (Ayah)
#    When User click button Save
#    Then Selected shipping address is Rumah (Ayah)
#    Then Nama lengkap is Tester Auto
#    Then Nomor ponsel is 6280000001017
#    Then Alamat lengkap is Jl. Pantai Ayah 212, RT 3 RW 25
#    Then Pesan pengiriman is Hati-hati banyak ranjau
#
#  Scenario: User able to edit shipping address
#    When User click Ubah
#    Then Form Ubah Alamat should open
#    When User input nama lengkap Tester Auto edit
#    When User input nomor ponsel 80000001018
#    When User input alamat lengkap Jl. Pantai Ayah 212, RT 3 RW 25 edit
#    When User input pesan pengiriman Hati-hati banyak ranjau edit
#    When User input nama alamat Rumah edit
#    When User click button Save
#    Then Popup message Alamat berhasil diubah should open
#    Then Selected shipping address is Rumah edit
#    Then Nama lengkap is Tester Auto edit
#    Then Nomor ponsel is 6280000001018
#    Then Alamat lengkap is Jl. Pantai Ayah 212, RT 3 RW 25 edit
#    Then Pesan pengiriman is Hati-hati banyak ranjau edit
#
#  Scenario: Verify user able to cancel update shipping address
#    When User click Ubah
#    When User input nama lengkap Tester Auto
#    When User click Cancel in form Ubah Alamat
#    When User click Yes, Im Sure in Confirm Cancel
#    Then Selected shipping address is Rumah edit
#
#  Scenario: Verify add shipping address if required field is empty
#    When User refresh browser
#    When User click address list box
#    When User click Tambah Alamat
#    When User click button Save
#    Then Error message in field Nama Lengkap should appear Nama lengkap harus diisi
#    Then Error message in field Nomor Ponsel should appear Nomor ponsel harus diisi
#    Then Error message in field Kecamatan should appear Kecamatan harus diisi
#    Then Error message in field Kode Pos should appear Kode pos harus diisi
#    Then Error message in field Alamat Lengkap should appear Alamat lengkap harus diisi
#    Then Error message in field Nama Alamat should appear Nama alamat harus diisi
#
#  Scenario: Verify if Nama Lengkap less than 3 characters
#    When User input nama lengkap Qa
#    Then Error message in field Nama Lengkap should appear Nama harus lebih dari 3 karakter
#
#  Scenario: Verify if Nama Lengkap more than 50 characters
#    When User input nama lengkap Lorem ipsum dolor sit amet, consectetuer adipiscing
#    Then Error message in field Nama Lengkap should appear Nama harus kurang dari 50 karakter
#
#  Scenario: Verify if input Nomor Ponsel with invalid format
#    When User input nomor ponsel 275
#    Then Error message in field Nomor Ponsel should appear Format nomor ponsel salah
#
#  Scenario: Verify if input Nomor Ponsel less than 9 digits
#    When User input nomor ponsel 800000
#    Then Error message in field Nomor Ponsel should appear Nomor ponsel harus lebih dari 9 digit
#
#  Scenario: Verify if input Nomor Ponsel more than 15 digits
#    When User input nomor ponsel 80000000123456
#    Then Error message in field Nomor Ponsel should appear Nomor ponsel harus kurang dari 15 digit
#
#  Scenario: Verify if Alamat Lengkap less than 10 characters
#    When User input alamat lengkap Jl. Lurah
#    Then Error message in field Alamat Lengkap should appear Alamat lengkap harus lebih dari 10 karakter
#
#  Scenario: Verify if Alamat Lengkap more than 200 characters
#    When User input alamat lengkap Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua
#    Then Error message in field Alamat Lengkap should appear Alamat lengkap harus kurang dari 200 karakter
#
#  Scenario: Verify if Nama Alamat less than 3 characters
#    When User input nama alamat Qa
#    Then Error message in field Nama Alamat should appear Nama alamat harus lebih dari 3 karakter
#
#  Scenario: Verify if Nama Alamat more than 15 characters
#    When User input nama alamat Contoh Nama Alamat
#    Then Error message in field Nama Alamat should appear Nama alamat harus kurang dari 15 karakter
#    When User click Cancel in form Tambah Alamat
#    When User click Yes, Im Sure in Confirm Cancel
#    Then Form Tambah Alamat should close
#
#  Scenario: Verify shipping method
#    When User at checkout page
#    Then Shipping method section should available
#    Then Pengiriman regular should available
#    Then Pengiriman express should available
#
#  Scenario: Verify component shipping method
#    When User at checkout page
#    Then Pengiriman regular should available
#    Then SAP Regular shipping method should available
#    Then SAP Regular image should available
#    Then SAP Regular title should available
#    Then SAP Regular estimation day should available
#    Then SAP Regular shipping cost should available
#    Then Pengiriman express should available
#    Then SAP Express shipping method should available
#    Then SAP Express image should available
#    Then SAP Express title should available
#    Then SAP Express estimation day should available
#    Then SAP Express shipping cost should available
#
#  Scenario: Verify able to select shipping method
#    When User at checkout page
#    When User select shipping method SAP Regular
#    Then SAP Regular shipping method should applied
#    When User select shipping method JNE Regular
#    Then JNE Regular shipping method should applied
#    When User select shipping method SiCepat Regular
#    Then SiCepat Regular shipping method should applied
#    When User select shipping method SAP Express
#    Then SAP Express shipping method should applied
#
#  Scenario: Verify voucher section
#    When User click Bayar
#    Then Voucher section should available
#    When User click Use Voucher button
#    Then Popup voucher should open
#
#  Scenario: Verify able to close popup voucher
#    When User click button close in popup voucher
#    Then Popup voucher should close
#
#  Scenario: Verify poin section
#    Then Poin section should available

#______________________________________________________________
# scenario use point masih error
#  Scenario: Verify user able to use point
#    When User click Gunakan poin
#    Then Field input point should open
#    When User input point 10
#    Then Redeem point should available in price breakdown
#    Then Redeem point value is 10.000
#______________________________________________________________

#  Scenario: Verify donation section
#    Then Donation should available
#    When User click button Ayo Beri Donasi
#    Then Donation popup should open
#    When User click button close in donation popup
#    Then Donation popup should close
#
#  Scenario: Verify user able to set donation amount
#    When User click button Ayo Beri Donasi
#    When User select donation value 5000
#    When User click button Beri Donasi
#    Then Donation 5.000 should available in donation section and breakdown price
#
#  Scenario: Verify user able to change donation amount
#    When User click Ganti
#    When User select donation value 10000
#    When User click button Beri Donasi
#    Then Donation 10.000 should available in donation section and breakdown price
#
#  Scenario: Verify user able to input donation amount
#    When User click Ganti
#    When User select Nominal lain
#    When User input nominal donasi 1500
#    When User click button Beri Donasi
#    Then Donation 1.500 should available in donation section and breakdown price
#
#  Scenario: Verify user able to cancel delete donation
#    When User click Ganti
#    When User click Hapus Donasi
#    When User click Cancel in popup confirmation
#    When User click button close in donation popup
#    Then Donation 1.500 should available in donation section and breakdown price
#
#  Scenario: Verify user able to delete donation
#    When User click Ganti
#    When User click Hapus Donasi
#    When User click Confirm in popup confirmation
#    Then Donation amount should not available in donation section and breakdown price
#
#  Scenario: Verify payment method section
#    Then Metode Pembayaran should available
#    Then Virtual Account should available
#    Then Pembayaran Instan should available
#    Then Kartu debit kredit should available
#    Then Internet Banking should available
#
#  Scenario: Verify virtual account options
#    When User click Virtual account
#    Then Virtual account BCA option should available
#    Then Image virtual account BCA should available
#    Then Text virtual account BCA should available
#    Then Virtual account BNI option should available
#    Then Image virtual account BNI should available
#    Then Text virtual account BNI should available
#    Then Virtual account Permata option should available
#    Then Image virtual account Permata should available
#    Then Text virtual account Permata should available
#    Then Virtual account Mandiri option should available
#    Then Image virtual account Mandiri should available
#    Then Text virtual account Mandiri should available
#    Then Virtual account BRI option should available
#    Then Image virtual account BRI should available
#    Then Text virtual account BRI should available
#
#  Scenario: Verify pembayaran instan options
#    When User click Pembayaran instan
#    Then Gopay option should available
#    Then Image gopay should available
#    Then Text gopay should available
#    Then Shopeepay option should available
#    Then Image shopeepay should available
#    Then Text shopeepay should available
#
#  Scenario: Verify kartu debit/kredit options
#    When User click Kartu debit kredit
#    Then Credit card option should available
#    Then Image credit card should available
#    Then Text credit card should available
#
#  Scenario: Verify internet banking options
#    When User click Internet Banking
#    Then Klik BCA option should available
#    Then Image Klik BCA should available
#    Then Text Klik BCA should available
#    Then Octo Clicks option should available
#    Then Image Octo Clicks should available
#    Then Text Octo Clicks should available