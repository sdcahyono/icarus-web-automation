Feature: CLP

  Scenario: Verify CLP from menu
    Given User at home page
    When User click menu NEW
    Then CLP NEW should available
    When User click menu BODY
    Then CLP BODY should available
    When User click menu FACE
    Then CLP FACE should available
    When User click menu HAIR
    Then CLP HAIR should available
    When User click menu FRAGRANCE
    Then CLP FRAGRANCE should available
    When User click menu MAKEUP
    Then CLP MAKEUP should available
    When User click menu GIFTS
    Then CLP GIFTS should available