Feature: Compare Models

Scenario: Compare Models CT luxury and f sport
Given I am in the home page
Then I should see "COMPARE MODELS"
And I follow link "COMPARE MODELS"
And I enter postcode as "2134"
And I fill in my details as follows
| firstName    |     Revathi           | 
| email        |     test@lexus.com    | 
And I follow link "OK"
Then I select "ct200h/luxury","ct200h/f-sport" of "ct200h"
And I follow link "OK"
And I follow link "COMPARE VEHICLES"
And I wait for "driveawayprice" class
Then I should see "LUXURY"
Then I should see "$42,787"
Then I should see "F SPORT"
Then I should see "$52,147"