Feature: Request for test drive

Scenario: request for test drive
Given I am in the home page
Then I should see "Request a Test Drive"
And I follow link "Request a Test Drive"
Then I should see "CONTACT US"
And I select "CT" model
#And I select your details
And I select "Your details"
And I fill in my details as follows
| firstName    |     Revathi           | 
| surname      |     test              | 
| email        |     test@lexus.com    | 
| phone        |     0456789765        | 
And I fill in my preferred postcode as "2134" and select "Sydney City Lexus"
#And I click on "REQUEST MY TEST DRIVE"
#And I wait for "printWindow" class
#Then I should see "THANK YOU REVATHI"