Feature: Create a page

Scenario: Create a page 
Given I am in the login page
And I login with userName as "rekhasndr@gmail.com" and password as "Jan@2013"
Then I should see "Dashboard"
And I create a page "sampleoneoftestpage" in space "QA home"
Then I should see "TestSamplePage"


