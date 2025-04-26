Feature: View-edit-profile


    @TEST-6653 @POSITIVE
    Scenario: Edit user profile with valid data
        Given User <email> has logged in and in homepage
        When User click profile
        Then My account page open
        When User click change profile button
        Then Change profile page open
        When User edit first name <gender>
        When User edit last name <gender>
        When User edit gender to <gender>
        When User edit DOB
        When User click save changed profile
        Then Alert success change profile appear
        Then User first and last name changed
        Then User name on greeting change
        Then User gender changed to <gender> on My Account
        When User click change profile button
        Then User first name changed on profile
        Then User last name changed on profile
        Then User gender changed to <gender> on profile
        Then User DOB has changed


        Examples:
        | email | gender |
        | testerauto0707@test.com | M |