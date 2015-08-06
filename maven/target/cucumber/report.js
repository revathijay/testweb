$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuildPrice.feature");
formatter.feature({
  "line": 1,
  "name": "Build and Price a model",
  "description": "",
  "id": "build-and-price-a-model",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4069501715,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Build and Price CT model",
  "description": "",
  "id": "build-and-price-a-model;build-and-price-ct-model",
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
  "name": "I should see \"COMPARE MODELS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I follow link \"COMPARE MODELS\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter postcode as \"2134\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill in my details as follows",
  "rows": [
    {
      "cells": [
        "firstName",
        "Revathi"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "test@lexus.com"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I follow link \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"ct200h/luxury\",\"ct200h/f-sport\" of \"ct200h\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I follow link \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I follow link \"COMPARE VEHICLES\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"LUXURY\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see \"ADD/CHANGE MODELS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I follow link \"BUILD \u0026 PRICE\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I change grade to F Sport",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I change colour to \"Vermillion\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on review",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see \"READY TO PROCEED?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 16186454411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPARE MODELS",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 4117540127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPARE MODELS",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 1340988564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2134",
      "offset": 21
    }
  ],
  "location": "StepDefenition.i_enter_postcode_as(String)"
});
formatter.result({
  "duration": 3105570823,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 111289380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 820497572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ct200h/luxury",
      "offset": 10
    },
    {
      "val": "ct200h/f-sport",
      "offset": 26
    },
    {
      "val": "ct200h",
      "offset": 46
    }
  ],
  "location": "StepDefenition.i_select_of(String,String,String)"
});
formatter.result({
  "duration": 637141519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 782237518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPARE VEHICLES",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 687506716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LUXURY",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 6846713762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD/CHANGE MODELS",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 3665596651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BUILD \u0026 PRICE",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 4615037956,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_change_grade_to_F_Sport()"
});
formatter.result({
  "duration": 9011412964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vermillion",
      "offset": 20
    }
  ],
  "location": "StepDefenition.i_change_colour_to(String)"
});
formatter.result({
  "duration": 5242338934,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_click_on_review()"
});
formatter.result({
  "duration": 4868694162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "READY TO PROCEED?",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 5023694700,
  "status": "passed"
});
formatter.after({
  "duration": 13148092,
  "status": "passed"
});
formatter.uri("CompareModels.feature");
formatter.feature({
  "line": 1,
  "name": "Compare Models",
  "description": "",
  "id": "compare-models",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2122109479,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Compare Models CT luxury and f sport",
  "description": "",
  "id": "compare-models;compare-models-ct-luxury-and-f-sport",
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
  "name": "I should see \"COMPARE MODELS\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I follow link \"COMPARE MODELS\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter postcode as \"2134\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill in my details as follows",
  "rows": [
    {
      "cells": [
        "firstName",
        "Revathi"
      ],
      "line": 9
    },
    {
      "cells": [
        "email",
        "test@lexus.com"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I follow link \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"ct200h/luxury\",\"ct200h/f-sport\" of \"ct200h\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I follow link \"OK\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I follow link \"COMPARE VEHICLES\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I wait for \"driveawayprice\" class",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see \"LUXURY\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see \"$42,787\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should see \"F SPORT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see \"$52,147\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 9858759136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPARE MODELS",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 3947844433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPARE MODELS",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 3651475644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2134",
      "offset": 21
    }
  ],
  "location": "StepDefenition.i_enter_postcode_as(String)"
});
formatter.result({
  "duration": 869835821,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 98152457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 822328995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ct200h/luxury",
      "offset": 10
    },
    {
      "val": "ct200h/f-sport",
      "offset": 26
    },
    {
      "val": "ct200h",
      "offset": 46
    }
  ],
  "location": "StepDefenition.i_select_of(String,String,String)"
});
formatter.result({
  "duration": 432248807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 676553193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPARE VEHICLES",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 697608675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "driveawayprice",
      "offset": 12
    }
  ],
  "location": "StepDefenition.i_wait_for_class(String)"
});
formatter.result({
  "duration": 4525875986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LUXURY",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 3761888706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$42,787",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 3687440909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "F SPORT",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 3788816092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$52,147",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 3600265219,
  "status": "passed"
});
formatter.after({
  "duration": 12547680,
  "status": "passed"
});
formatter.uri("Contactus.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Lexus for cusomter enquiries",
  "description": "",
  "id": "contact-lexus-for-cusomter-enquiries",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2127548507,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Contact Lexus for cusomter enquiries",
  "description": "",
  "id": "contact-lexus-for-cusomter-enquiries;contact-lexus-for-cusomter-enquiries",
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
  "name": "I should see \"Contact Us\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I follow link \"Contact Us\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select \"General Enquiry\" from \"enquiryType\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill in my details as follows",
  "rows": [
    {
      "cells": [
        "message",
        "test message"
      ],
      "line": 9
    },
    {
      "cells": [
        "firstName",
        "Revathi"
      ],
      "line": 10
    },
    {
      "cells": [
        "surname",
        "test"
      ],
      "line": 11
    },
    {
      "cells": [
        "email",
        "test@lexus.com"
      ],
      "line": 12
    },
    {
      "cells": [
        "phone",
        "0456789765"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \"Submit my enquiry\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"THANK YOU REVATHI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 7026258752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Us",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 8098730833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Us",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 2099554929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General Enquiry",
      "offset": 10
    },
    {
      "val": "enquiryType",
      "offset": 33
    }
  ],
  "location": "StepDefenition.i_select_from(String,String)"
});
formatter.result({
  "duration": 1076347441,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 361795308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit my enquiry",
      "offset": 12
    }
  ],
  "location": "StepDefenition.i_click_on(String)"
});
formatter.result({
  "duration": 6758312796,
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
  "duration": 2783074594,
  "status": "passed"
});
formatter.after({
  "duration": 13948038,
  "status": "passed"
});
formatter.uri("HomePageDesktop.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page Desktop",
  "description": "",
  "id": "home-page-desktop",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2103505756,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify home page desktop",
  "description": "",
  "id": "home-page-desktop;verify-home-page-desktop",
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
  "name": "I should see \"FIND A DEALER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 11932746887,
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
  "duration": 4242908555,
  "status": "passed"
});
formatter.after({
  "duration": 14321145,
  "status": "passed"
});
formatter.uri("HomePageMobile.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page Mobile",
  "description": "",
  "id": "home-page-mobile",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2111252552,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify home page for mobile",
  "description": "",
  "id": "home-page-mobile;verify-home-page-for-mobile",
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
  "duration": 2174950585,
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
  "duration": 230223828,
  "status": "passed"
});
formatter.after({
  "duration": 12487306,
  "status": "passed"
});
formatter.uri("RequestBrochure.feature");
formatter.feature({
  "line": 1,
  "name": "Request for brochure",
  "description": "",
  "id": "request-for-brochure",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2593774187,
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
  "name": "I select \"CT\" model",
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
  "name": "I click on \"REQUEST MY BROCHURE\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I wait for \"test-drive\" class",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#And I click on request my brochure"
    }
  ],
  "line": 15,
  "name": "I should see \"THANK YOU REVATHI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 11973358782,
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
  "duration": 3910684983,
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
  "duration": 1314417984,
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
  "duration": 6808841304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CT",
      "offset": 10
    }
  ],
  "location": "StepDefenition.i_select_model(String)"
});
formatter.result({
  "duration": 73973563,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 94662881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "REQUEST MY BROCHURE",
      "offset": 12
    }
  ],
  "location": "StepDefenition.i_click_on(String)"
});
formatter.result({
  "duration": 6887165668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test-drive",
      "offset": 12
    }
  ],
  "location": "StepDefenition.i_wait_for_class(String)"
});
formatter.result({
  "duration": 1040541862,
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
  "duration": 1974260759,
  "status": "passed"
});
formatter.after({
  "duration": 13341891,
  "status": "passed"
});
formatter.uri("RequestaTestDrive.feature");
formatter.feature({
  "line": 1,
  "name": "Request for test drive",
  "description": "",
  "id": "request-for-test-drive",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2087424729,
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
  "name": "I select \"CT\" model",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And I select your details"
    }
  ],
  "line": 10,
  "name": "I select \"Your details\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill in my details as follows",
  "rows": [
    {
      "cells": [
        "firstName",
        "Revathi"
      ],
      "line": 12
    },
    {
      "cells": [
        "surname",
        "test"
      ],
      "line": 13
    },
    {
      "cells": [
        "email",
        "test@lexus.com"
      ],
      "line": 14
    },
    {
      "cells": [
        "phone",
        "0456789765"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I fill in my preferred postcode as \"2134\" and select \"Sydney City Lexus\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 5751166714,
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
  "duration": 6587637545,
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
  "duration": 4486752594,
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
  "duration": 4778322613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CT",
      "offset": 10
    }
  ],
  "location": "StepDefenition.i_select_model(String)"
});
formatter.result({
  "duration": 77183309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your details",
      "offset": 10
    }
  ],
  "location": "StepDefenition.i_select(String)"
});
formatter.result({
  "duration": 539007475,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 305429611,
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
  "duration": 829957763,
  "status": "passed"
});
formatter.after({
  "duration": 119553878,
  "status": "passed"
});
formatter.uri("selectDealerPostcode.feature");
formatter.feature({
  "line": 1,
  "name": "Find a dealer",
  "description": "",
  "id": "find-a-dealer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2094245703,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "find chatswood dealer",
  "description": "",
  "id": "find-a-dealer;find-chatswood-dealer",
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
  "name": "I should see \"FIND A DEALER\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I follow link \"FIND A DEALER\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see \"CONTACT US\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I fill in my details as follows",
  "rows": [
    {
      "cells": [
        "postcode",
        "2067"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"CHATSWOOD NSW 2067\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see \"Contact Lexus of Chatswood\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I follow link \"VISIT DEALER WEBSITE\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see \"LEXUS OF CHATSWOOD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.i_am_in_the_home_page()"
});
formatter.result({
  "duration": 5435492362,
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
  "duration": 12809915042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIND A DEALER",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 3197587544,
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
  "duration": 4190338525,
  "status": "passed"
});
formatter.match({
  "location": "StepDefenition.i_fill_in_my_details_as_follows(String\u003e)"
});
formatter.result({
  "duration": 472889682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHATSWOOD NSW 2067",
      "offset": 10
    }
  ],
  "location": "StepDefenition.i_select(String)"
});
formatter.result({
  "duration": 627506850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Lexus of Chatswood",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 6258403658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISIT DEALER WEBSITE",
      "offset": 15
    }
  ],
  "location": "StepDefenition.i_follow_link(String)"
});
formatter.result({
  "duration": 1275846403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LEXUS OF CHATSWOOD",
      "offset": 14
    }
  ],
  "location": "StepDefenition.i_should_see(String)"
});
formatter.result({
  "duration": 4627629407,
  "status": "passed"
});
formatter.after({
  "duration": 12109671,
  "status": "passed"
});
});