Feature: Login

@test-6650
    Scenario: Login with valid phone number but invalid otp
        Given User at home page
        When User click login button
        Then Login form should available
        When User input phoneNumber 080000001017
        When User select Whatsapp
        When User input otp code 222333
        Then User get message OTP yang Kamu masukkan salah, mohon cek ulang