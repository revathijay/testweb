Feature:Build and Price a model

Scenario: Build and Price a model
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
Then I should see "LUXURY"
Then I should see "ADD/CHANGE MODELS"
And I follow link "BUILD & PRICE"
And I change grade to F Sport
And I change colour to "Vermillion"
And I click on review 
Then I should see "READY TO PROCEED?"