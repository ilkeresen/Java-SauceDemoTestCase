Feature: Main Feature

  Background:
    Given I open browser
    Given I open SauceDemoHome page

  Scenario: Fail Login Scenario

    When I see user name textbox area element
    And I click user name textbox area
    And I type "locked_out_user"

    When I see password textbox area element
    Then I fill:
      | password textbox area | secret_sauce |

    When I see login button area element
    Then I click login button area

    When I see login error message area element
    When I wait for 5 seconds

  @ilker
  Scenario: True Login Scenario

    When I see user name textbox area element
    And I click user name textbox area
    And I type "standard_user"

    When I see password textbox area element
    Then I fill:
      | password textbox area | secret_sauce |

    When I see login button area element
    Then I click login button area

    When I see add to cart button area element
    Then I click add to cart button area

    When I see click basket button area element
    Then I click click basket button area

    When I see click remove button area element
    Then I click click remove button area

    When I see click all items button area element
    Then I click click all items button area

    When I see add to cart button area element
    Then I click add to cart button area

    When I see click basket button area element
    Then I click click basket button area

    When I see click checkout button area element
    Then I click click checkout button area

    And I click first name textbox area
    And I save first name textbox area single value element

    When I wait for 3 seconds

    And I click last name textbox area
    And I want to write randomLastName Api

    When I wait for 3 seconds

    And I click postal code name textbox area
    And I want to write randomIntegerCode

    When I wait for 3 seconds

    When I see click continue button area element
    Then I click click continue button area

    When I see click finish button area element
    Then I click click finish button area

    When I see finish complate message area element
    When I wait for 5 seconds