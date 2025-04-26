Feature: View-edit-profile


    @TEST-6656 @POSITIVE
    Scenario: User view Order Detail Transaction

        Given User <email> has logged in and in homepage
        When User click profile
        Then My account page open
        Then Menu My Transactions should available
        When User click My Transaction
        Then My Transaction page open
        Then Filter for transaction available
        When User choose filter type <orderType> and filter result appeared
        When User choose filter status <orderStatus> and filter result appeared
        When User click Order and Order Detail page open
        Then Order Status should be <orderStatus> and text status should appeared on page
        Then Online order status should available
        Then Order Detail should available
        Then Transaction Detail should be available and correct
        Then Payment Detail should available
        Then Shipping Detail should available



        Examples:
        | email | orderType | orderStatus |
        | testerauto114044@test.com | Order | Paid |