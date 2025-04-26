Feature: View-edit-profile


    @TEST-6654 @NEGATIVE
    Scenario: Edit user profile with valid data
        Given User <email> has logged in and in homepage
        When User click profile
        Then My account page open
        When User click change profile button
        Then Change profile page open
        When User empty first name
        When User empty last name
        When User empty DOB
        When User click save changed profile
        Then Error message field required appeared
        When User edit invalid first name <firstNameLength>
        When User edit invalid last name <lastNameLength>
        Then Error message characters length appeared
        When User edit invalid first name <firstNameSp>
        When User edit invalid last name <lastNameSp>
        Then Error message field cannot have special characters appeared


        Examples:
        | email | firstNameLength | lastNameLength | firstNameSp | lastNameSp |
        | testerauto114044@test.com | S | A | s@ns#$ | l%al*~^ |