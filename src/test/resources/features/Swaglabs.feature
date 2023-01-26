Feature: Swaglabs Main Suite

  Background:

    #Given I open browser
    #Given I open SwaglabsLogin page

    @ignore
  Scenario: Login Process

      When I see username text area element in 10 seconds
      And I click username text area
      And I type "standard_user"
      And I fill:
        | password text area | secret_sauce |
      Then I click login button

      When I see SwaglabsMain page
      And I see swaglabs main page verify text element in 15 seconds
      And I see product list for backpack element
      Then I click product list for backpack

#      When I see shopping cart button element
#      Then I click shopping cart button

      When I want to click
      Then I wait for 4 seconds

  @ignore
  Scenario: Login Process

    When I call SingleUserNotFound rest service