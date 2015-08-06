Feature: Request for brochure

Scenario: request for brochure
Given I am in the home page
Then I should see "Brochure Request"
And I follow link "Brochure Request"
Then I should see "CONTACT US"
And I select "CT" model
And I fill in my details as follows
| firstName    |     Revathi           | 
| email        |     test@lexus.com    | 
And I click on "REQUEST MY BROCHURE"
And I wait for "test-drive" class
#And I click on request my brochure
Then I should see "THANK YOU REVATHI"