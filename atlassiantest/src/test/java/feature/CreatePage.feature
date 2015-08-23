Feature: Create a page

Scenario: Create a page 
Given I am in the login page
And I fill in my details as follows
| username    |     Revathi           | 
| password        |     test@lexus.com    | 
And I follow link "Log in"
Then I should see ""
