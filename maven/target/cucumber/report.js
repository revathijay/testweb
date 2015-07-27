$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/sample/HomePageMobile.feature");
formatter.feature({
  "line": 1,
  "name": "Test find a dealer link",
  "description": "",
  "id": "test-find-a-dealer-link",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5644057180,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "find a dealer link",
  "description": "",
  "id": "test-find-a-dealer-link;find-a-dealer-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am in the mobile home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see \"FIND A DEALER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_mobile_home_page()"
});
formatter.result({
  "duration": 2136382010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIND A DEALER",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 120232620,
  "status": "passed"
});
formatter.after({
  "duration": 266798181,
  "status": "passed"
});
});