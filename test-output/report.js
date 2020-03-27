$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/demoblaze.feature");
formatter.feature({
  "line": 2,
  "name": "DemoBlaze Website",
  "description": "",
  "id": "demoblaze-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DemoBlaze_Feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login in to demo blaze steps",
  "description": "",
  "id": "demoblaze-website;login-in-to-demo-blaze-steps",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_demoblazelogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the Demoblaze website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" clicks on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "demoblaze-website;login-in-to-demo-blaze-steps;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "demoblaze-website;login-in-to-demo-blaze-steps;;1"
    },
    {
      "cells": [
        "SRINIVAS",
        "s123654@"
      ],
      "line": 13,
      "id": "demoblaze-website;login-in-to-demo-blaze-steps;;2"
    },
    {
      "cells": [
        "DAGGUMATISRIKANTH",
        "Product77@"
      ],
      "line": 14,
      "id": "demoblaze-website;login-in-to-demo-blaze-steps;;3"
    },
    {
      "cells": [
        "RAM",
        "SS02154@"
      ],
      "line": 15,
      "id": "demoblaze-website;login-in-to-demo-blaze-steps;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login in to demo blaze steps",
  "description": "",
  "id": "demoblaze-website;login-in-to-demo-blaze-steps;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DemoBlaze_Feature"
    },
    {
      "line": 4,
      "name": "@tc01_demoblazelogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the Demoblaze website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user enters the \"SRINIVAS\" and \"s123654@\" clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "demo_stepdef.the_user_launched_the_chromebrowser()"
});
formatter.result({
  "duration": 10676160990,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_open_the_Demoblaze_website()"
});
formatter.result({
  "duration": 35947202931,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 459641024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SRINIVAS",
      "offset": 21
    },
    {
      "val": "s123654@",
      "offset": 36
    }
  ],
  "location": "demo_stepdef.the_user_enters_the_username_and_password_clicks_on_login_button(String,String)"
});
formatter.result({
  "duration": 617797375,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login in to demo blaze steps",
  "description": "",
  "id": "demoblaze-website;login-in-to-demo-blaze-steps;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DemoBlaze_Feature"
    },
    {
      "line": 4,
      "name": "@tc01_demoblazelogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the Demoblaze website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user enters the \"DAGGUMATISRIKANTH\" and \"Product77@\" clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "demo_stepdef.the_user_launched_the_chromebrowser()"
});
formatter.result({
  "duration": 8144739885,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_open_the_Demoblaze_website()"
});
formatter.result({
  "duration": 42463198905,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 548877846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DAGGUMATISRIKANTH",
      "offset": 21
    },
    {
      "val": "Product77@",
      "offset": 45
    }
  ],
  "location": "demo_stepdef.the_user_enters_the_username_and_password_clicks_on_login_button(String,String)"
});
formatter.result({
  "duration": 901991338,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login in to demo blaze steps",
  "description": "",
  "id": "demoblaze-website;login-in-to-demo-blaze-steps;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DemoBlaze_Feature"
    },
    {
      "line": 4,
      "name": "@tc01_demoblazelogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the Demoblaze website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user enters the \"RAM\" and \"SS02154@\" clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "demo_stepdef.the_user_launched_the_chromebrowser()"
});
formatter.result({
  "duration": 4988103770,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_open_the_Demoblaze_website()"
});
formatter.result({
  "duration": 87885193287,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 119762269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RAM",
      "offset": 21
    },
    {
      "val": "SS02154@",
      "offset": 31
    }
  ],
  "location": "demo_stepdef.the_user_enters_the_username_and_password_clicks_on_login_button(String,String)"
});
formatter.result({
  "duration": 595772081,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "AddtoCart",
  "description": "",
  "id": "demoblaze-website;addtocart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc02_demoblazeAddtoCart"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the user launched chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the user open Demoblaze",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user selects the Product",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the product is added to cart",
  "keyword": "And "
});
formatter.match({
  "location": "demo_stepdef.the_user_launched_chromebrowser1()"
});
formatter.result({
  "duration": 6192555438,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_open_Demoblaze()"
});
formatter.result({
  "duration": 42666085660,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_selects_the_Product()"
});
formatter.result({
  "duration": 490295673,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_product_is_added_to_cart()"
});
formatter.result({
  "duration": 79663118848,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Contact Details",
  "description": "",
  "id": "demoblaze-website;contact-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@tc03_ContactDetails"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user launches chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the DemoBlaze application is opened",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the user clicks on Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the user enters the details",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user clicks the send button.",
  "keyword": "And "
});
formatter.match({
  "location": "demo_stepdef.user_launches_chromebrowser2()"
});
formatter.result({
  "duration": 6595825814,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_DemoBlaze_application_is_opened()"
});
formatter.result({
  "duration": 28849641042,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_clicks_on_Contact()"
});
formatter.result({
  "duration": 439251282,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_enters_the_details()"
});
formatter.result({
  "duration": 721358696,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_clicks_the_send_button()"
});
formatter.result({
  "duration": 103978511,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Go to nextpage and select the product",
  "description": "",
  "id": "demoblaze-website;go-to-nextpage-and-select-the-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tc04_nextpage"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "the user Launces the ChromeBrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "the user have open the demoBlazeApplication",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user will click the nextpage",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "the user selects the product",
  "keyword": "And "
});
formatter.match({
  "location": "demo_stepdef.the_user_Launces_the_ChromeBrowser()"
});
formatter.result({
  "duration": 10350755257,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_have_open_the_demoBlazeApplication()"
});
formatter.result({
  "duration": 27533243214,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.user_will_click_the_nextpage()"
});
formatter.result({
  "duration": 209209798,
  "status": "passed"
});
formatter.match({
  "location": "demo_stepdef.the_user_selects_the_product()"
});
formatter.result({
  "duration": 55243691599,
  "status": "passed"
});
});