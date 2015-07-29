$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/sample/RequestBrochure.feature");
formatter.feature({
  "line": 1,
  "name": "Request for brochure",
  "description": "",
  "id": "request-for-brochure",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6833665679,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "request for brochure",
  "description": "",
  "id": "request-for-brochure;request-for-brochure",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see \"Brochure Request\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I follow link \"Brochure Request\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see \"CONTACT US\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select the first model",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill in my details as follows",
  "rows": [
    {
      "cells": [
        "firstName",
        "Revathi"
      ],
      "line": 10
    },
    {
      "cells": [
        "email",
        "test@lexus.com"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on request my brochure",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see \"THANK YOU REVATHI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 4835680577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brochure Request",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 5353643811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brochure Request",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 1899497467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTACT US",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 2978629700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_select_the_first_model()"
});
formatter.result({
  "duration": 70298676,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 113880855,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_click_on_request_my_brochure()"
});
formatter.result({
  "duration": 11055450912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU REVATHI",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 2014583337,
  "status": "passed"
});
formatter.after({
  "duration": 12486032,
  "status": "passed"
});
});