Feature: Main Feature

  Background:
    Given I open browser
    Given I open TryTestingThisHome page
    Then I see try testing this home verify text element

  Scenario: Main Page Work Flow 1

    When I see firstname text area element
    And I click firstname text area
    And I type "Ayşe"
    Then I fill:
      | lastname text area | Yılmaz |

    When I see gender type for female element
    Then I click gender type for female

    When I see select option dropdown list element
    Then I click dropdown list option one

    When I see multiple option two element
    And I click multiple option two
    Then I click multiple option three