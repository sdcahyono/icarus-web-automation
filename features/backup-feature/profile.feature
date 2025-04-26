Feature: Profile

  Scenario: Edit user profile not save edited data
    Given User at home page
    When User click login button
    Then Login form should available
    When User input phoneNumber <phoneNumber>
    When User select Whatsapp
    When User input otp code <otp>
    Then User name should appear
    When User click profile
    Then My account page open
    When User click change profile button
    Then Change profile page open and get data
    When User edit first name
    When User edit last name
    When User edit gender to male
    When User edit DOB
    When User click back on browser
    Then User first and last name not changed
    Then User name on greeting not changed
    Then User gender not changed on My Account
    When User click change profile button
    Then Change profile page open
    Then User first name not changed on profile
    Then User last name not changed on profile
    Then User gender not changed to male
    Then User DOB not changed
    When User click back on browser

    Examples:
      | phoneNumber | otp | 
      | 6280000000472 | 223354 |


  Scenario: Edit phone number not save edited data
    When User click change phone number
    Then Change Phone Number page open and get data
    When User edit phone number <newPhoneNumber>
    When User click back on browser
    When User click change phone number
    Then Change Phone Number page open
    Then User phone number not changed
    When User click back on browser

    Examples:
      | newPhoneNumber |
      | 8123456474 |


  Scenario: Edit email not save edited data
    When User click change email
    Then Change Email page open and get data
    When User edit email <newEmail>
    When User click back on browser
    When User click change email
    Then User email not changed
    When User click back on browser

    Examples:
      | newEmail |
      | tester1234@test.com |



  Scenario: Edit phone number then empty phone number
    When User click change phone number
    Then Change Phone Number page open and get data
    When User set phone number empty
    When User click save change phone number
    Then Error message in field Change Phone should appear Phone Number is invalid
    When User click back on browser


  Scenario: Edit email not save edited data
    When User click change email
    Then Change Email page open and get data
    When User set email to empty
    When User click save change email
    Then Error message in field Change Email should appear E-mail is required


  # Scenario: Edit user profile (positive)
  #   When User click profile
  #   Then My account page open
  #   When User click change profile button
  #   Then Change profile page open
  #   When User edit first name
  #   When User edit last name
  #   When User edit gender to male
  #   When User edit DOB
  #   When User click save changed profile
  #   Then Alert success change profile appear
  #   Then User first and last name changed
  #   Then User name on greeting change
  #   Then User gender changed on My Account Laki-Laki
  #   When User click change profile button
  #   Then User first name changed on profile
  #   Then User last name changed on profile
  #   Then User gender changed to male
  #   Then User DOB has changed
  #   When User edit gender to female
  #   When User click save changed profile
  #   Then User gender changed on My Account Perempuan
  #   When User click change profile button
  #   Then User gender changed to female
  #   When User click back on browser



  Scenario: Edit phone number (positive)
    When User click change phone number
    Then Change Phone Number page open
    When User edit phone number <newPhoneNumber>
    When User click save change phone number
    When User select Whatsapp
    When User input otp code <otp>
    Then Alert success change phone number appear
    When User click change phone number
    Then User phone number has changed
    When User click back on browser

    Examples:
      | newPhoneNumber | otp |
      | 80000000474 | 223354 |
      | 80000000472 | 453322 |



  Scenario: Edit email (positive)
    When User click change email
    Then Change Email page open
    When User edit email <newEmail>
    When User click save change email
    When User input otp code <otp>
    Then Alert success change email appear
    Then User email has changed on My Account <newEmail>
    When User click change email
    Then User email has changed
    When User click back on browser

    Examples:
      | newEmail | otp |
      | testerauto1010@test.com | 012983 |
      | testerauto0707@test.com | 543678 |
