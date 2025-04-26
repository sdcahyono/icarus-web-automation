Feature: View-edit-profile


    @TEST-6655 @POSITIVE
    Scenario: User view and filter My Transactions

        Given User <email> has logged in and in homepage
        When User click profile
        Then My account page open
        Then Menu My Transactions should available
        When User click My Transaction
        Then My Transaction page open
        Then Filter for transaction available
        When User choose filter type <orderType> and filter result appeared
        When User choose filter status <orderStatus> and filter result appeared
        When User choose filter time <orderTime> and filter result appeared



        Examples:
        | email | orderType | orderStatus | orderTime |
        | testerauto114044@test.com | Order | Paid | Last 30 Days |