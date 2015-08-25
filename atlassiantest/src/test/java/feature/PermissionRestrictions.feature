Feature: Permission restrictions on a page
Background:
Given I am in the login page
And I login with userName as "rekhasndr@gmail.com" and password as "Jan@2013"
Then I should see "Dashboard"
And I create a user with username as "testpermissions" and email as "testuser@gmail.com"
Then I should see "1 user has been created."
@all
Scenario: Permission restrictions on a page

When I navigate to page "sampletestPage"
Then I should see "sampletestPage"
And I associate the restriction of "Can view" to the user "testpermissions"