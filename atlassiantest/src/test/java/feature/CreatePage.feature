Feature: Create a page
@all
Scenario: Create a page 
Given I am in the login page
And I login with userName as "test@gmail.com" and password as "test"
Then I should see "Dashboard"
And I create a page "sampletestPage" in space "QA home"
Then I should see "sampletestPage"


