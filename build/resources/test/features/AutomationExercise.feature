Feature: Automation Exercise Main Suite

  Background:

    Given I open browser
    When I open AutomationExerciseMain page
    Then I see AutomationExerciseMain page

    When I see main control text element

    When I see product button element
    Then I click product button

    When I see all product verify text element


    Scenario: Test Case 9: Search Product

      When I see search product element
      And I click search product
      And I fill:
        | search product | Dress |
      Then I click search button

      When I see searched products verify text element

    Scenario: Test Case 12: Add Products in Cart

    When I see search product element
    And I click search product
    And I fill:
      | search product | Dress |
    Then I click search button

    When I see searched products verify text element
    Then I execute rest service