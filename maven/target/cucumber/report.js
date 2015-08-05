$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/RequestaTestDrive.feature");
formatter.feature({
  "line": 1,
  "name": "Request for test drive",
  "description": "",
  "id": "request-for-test-drive",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8161336713,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "request for test drive",
  "description": "",
  "id": "request-for-test-drive;request-for-test-drive",
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
  "name": "I should see \"Request a Test Drive\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I follow link \"Request a Test Drive\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see \"CONTACT US\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select first model",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select your details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill in my details as follows",
  "rows": [
    {
      "cells": [
        "firstName",
        "Revathi"
      ],
      "line": 11
    },
    {
      "cells": [
        "surname",
        "test"
      ],
      "line": 12
    },
    {
      "cells": [
        "email",
        "test@lexus.com"
      ],
      "line": 13
    },
    {
      "cells": [
        "phone",
        "0456789765"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I fill in my preferred postcode as \"2134\" and select \"Sydney City Lexus\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#And I click on request my test drive"
    }
  ],
  "line": 17,
  "name": "I should see \"THANK YOU REVATHI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 5732406926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request a Test Drive",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 5326150624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request a Test Drive",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 3182720022,
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
  "duration": 4665981229,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_select_first_model()"
});
formatter.result({
  "duration": 76185641,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_select_your_details()"
});
formatter.result({
  "duration": 435493268,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 333858179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2134",
      "offset": 36
    },
    {
      "val": "Sydney City Lexus",
      "offset": 54
    }
  ],
  "location": "StepDefenition.i_fill_in_my_preferred_postcode_as_and_select(String,String)"
});
formatter.result({
  "duration": 852058306,
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
  "duration": 30601665277,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 30 seconds waiting for text (\u0027THANK YOU REVATHI\u0027) to be present in element found by By.tagName: body\nBuild info: version: \u00272.46.0\u0027, revision: \u002761506a4624b13675f24581e453592342b7485d71\u0027, time: \u00272015-06-04 10:22:50\u0027\nSystem info: host: \u0027SYDWSD4MFHZ1\u0027, ip: \u002710.65.2.58\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d35.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c6526e5d-c79e-4be7-a53e-d65d7c378b03\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat com.sample.CommonSteps.i_should_see(CommonSteps.java:32)\r\n\tat com.sample.StepDefenition.i_should_see(StepDefenition.java:48)\r\n\tat ✽.Then I should see \"THANK YOU REVATHI\"(src/test/java/feature/RequestaTestDrive.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 13255556,
  "status": "passed"
});
});