Feature: Find a dealer

Scenario: find chatswood dealer
Given I am in the home page
Then I should see "FIND A DEALER"
And I follow link "FIND A DEALER"
Then I should see "CONTACT US"
And I fill in my details as follows
| postcode    |     2067           | 
And I select "CHATSWOOD NSW 2067"
Then I should see "Contact Lexus of Chatswood"
And I follow link "VISIT DEALER WEBSITE"
Then I should see "LEXUS OF CHATSWOOD"