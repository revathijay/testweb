Feature: Permission restrictions on a page

@testpermissions
Scenario: Permission restrictions on a page

Given I am in the login page
And I fill in my details as follows
| username    |     rekhasndr@gmail.com   | 
| password    |     Jan@2013              | 
And I click "login"
Then I should see "Dashboard"
And I create a page with title "sample test page for permissions"
Then I should see "sample test page for permissions"