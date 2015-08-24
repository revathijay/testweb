Feature: Create a page

@createPage
Scenario: Create a page 
Given I am in the login page
And I fill in my details as follows
| username    |     rekhasndr@gmail.com   | 
| password    |     Jan@2013              | 
And I click "login"
Then I should see "Dashboard"
And I click "space-menu-link"
And I select "QA home"
And I click "quick-create-page-button"
And I fill in my details as follows
| title       |     TestSamplePage        | 
And I press "Save"
Then I should see "TestSamplePage"