Feature: View-edit-profile


    @TEST-6657 @POSITIVE
    Scenario: User view My Vouchers

        Given User <email> has logged in and in homepage
        When User click profile
        Then My account page open
        Then Menu My Vouchers should available
        When User click My Vouchers
        Then My Vouchers page open
        Then Tab Active and Past Voucher available
        Then Active Voucher tab open
        When User click on Past Voucher and Past Voucher open



        Examples:
        | email | 
        | testerauto10010@test.com | 