$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/resources/feature/testcase.feature");
formatter.feature({
  "line": 2,
  "name": "ProductStore  Website",
  "description": "",
  "id": "productstore--website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Signup in the ProductStore",
  "description": "",
  "id": "productstore--website;signup-in-the-productstore",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_ProductStore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "when the user launch the chrome and application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on signup link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user clicks signup button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "productstore--website;signup-in-the-productstore;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 12,
      "id": "productstore--website;signup-in-the-productstore;;1"
    },
    {
      "cells": [
        "sudhakar01234",
        "",
        "sudhakar321"
      ],
      "line": 13,
      "id": "productstore--website;signup-in-the-productstore;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Signup in the ProductStore",
  "description": "",
  "id": "productstore--website;signup-in-the-productstore;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "when the user launch the chrome and application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user clicks on signup link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user enters sudhakar01234 and sudhakar321",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user clicks signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start()"
});
formatter.result({
  "duration": 13987286200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp()"
});
formatter.result({
  "duration": 4156918500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudhakar01234",
      "offset": 16
    },
    {
      "val": "sudhakar321",
      "offset": 34
    }
  ],
  "location": "SignUp_TestCase.enter_Details(String,String)"
});
formatter.result({
  "duration": 2310374700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit()"
});
formatter.result({
  "duration": 8408129400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Signup in with duplicate details in the ProductStore",
  "description": "",
  "id": "productstore--website;signup-in-with-duplicate-details-in-the-productstore",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC02_ProductStore"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "if the user launch the chrome and application ,duplicate",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on signup link ,duplicate",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user enters \u003cusername\u003e,\u003cpassword\u003e ,duplicate",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the user clicks signup button ,duplicate",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "productstore--website;signup-in-with-duplicate-details-in-the-productstore;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 23,
      "id": "productstore--website;signup-in-with-duplicate-details-in-the-productstore;;1"
    },
    {
      "cells": [
        "venkateswara reddy",
        "",
        "venkateswara reddy"
      ],
      "line": 24,
      "id": "productstore--website;signup-in-with-duplicate-details-in-the-productstore;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Signup in with duplicate details in the ProductStore",
  "description": "",
  "id": "productstore--website;signup-in-with-duplicate-details-in-the-productstore;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@TC02_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "if the user launch the chrome and application ,duplicate",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user clicks on signup link ,duplicate",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the user enters venkateswara reddy,venkateswara reddy ,duplicate",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the user clicks signup button ,duplicate",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start1()"
});
formatter.result({
  "duration": 14142894900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp1()"
});
formatter.result({
  "duration": 4071967100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "venkateswara reddy",
      "offset": 16
    },
    {
      "val": "venkateswara reddy",
      "offset": 35
    }
  ],
  "location": "SignUp_TestCase.enter_Details1(String,String)"
});
formatter.result({
  "duration": 413024000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit1()"
});
formatter.result({
  "duration": 8281488000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Signup without entering any details",
  "description": "",
  "id": "productstore--website;signup-without-entering-any-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@TC03_ProductStore"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "by launching the chrome and website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "by clicking on signup link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "without entering username,password,click signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_TestCase.start2()"
});
formatter.result({
  "duration": 14325232500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.click_SingUp2()"
});
formatter.result({
  "duration": 4229700700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_TestCase.submit2()"
});
formatter.result({
  "duration": 8305585700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Login in the ProductStore",
  "description": "",
  "id": "productstore--website;login-in-the-productstore",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC04_ProductStore"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the user open the ProductStore Home page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the user login using \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on the login button user nagivate to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "productstore--website;login-in-the-productstore;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 40,
      "id": "productstore--website;login-in-the-productstore;;1"
    },
    {
      "cells": [
        "naveen",
        "",
        "naveen"
      ],
      "line": 41,
      "id": "productstore--website;login-in-the-productstore;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Login in the ProductStore",
  "description": "",
  "id": "productstore--website;login-in-the-productstore;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@TC04_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the user open the ProductStore Home page",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the user login using naveen and naveen",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on the login button user nagivate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_TestCase.beforeEach()"
});
formatter.result({
  "duration": 13879767600,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.login()"
});
formatter.result({
  "duration": 196774800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveen",
      "offset": 21
    },
    {
      "val": "naveen",
      "offset": 32
    }
  ],
  "location": "Login_TestCase.enter_Details(String,String)"
});
formatter.result({
  "duration": 3595087600,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.click_LogIn()"
});
formatter.result({
  "duration": 12327341400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Login in the ProductStore using Invalid details",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-using-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@TC05_ProductStore"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "if user launch the chrome application and",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "if user open the ProductStore Home page and",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "if user login using  Invalid \u003cusername\u003e and \u003cpassword\u003e and",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on the login button, user  should not nagivate to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-using-invalid-details;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 51,
      "id": "productstore--website;login-in-the-productstore-using-invalid-details;;1"
    },
    {
      "cells": [
        "venky7",
        "",
        "venky1234"
      ],
      "line": 52,
      "id": "productstore--website;login-in-the-productstore-using-invalid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Login in the ProductStore using Invalid details",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-using-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 43,
      "name": "@TC05_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "if user launch the chrome application and",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "if user open the ProductStore Home page and",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "if user login using  Invalid venky7 and venky1234 and",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click on the login button, user  should not nagivate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_TestCase.beforeEach1()"
});
formatter.result({
  "duration": 12691491500,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.login1()"
});
formatter.result({
  "duration": 273169800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "venky7",
      "offset": 29
    },
    {
      "val": "venky1234",
      "offset": 40
    }
  ],
  "location": "Login_TestCase.enter_Details1(String,String)"
});
formatter.result({
  "duration": 3521090300,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.click_LogIn1()"
});
formatter.result({
  "duration": 10475464600,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Login in the ProductStore without details",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-without-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@TC06_ProductStore"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "when user launches the chrome application and",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "when user opens the ProductStore Home page and",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "by clicking on the login button user  should not nagivate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_TestCase.beforeEach2()"
});
formatter.result({
  "duration": 12858379700,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.login2()"
});
formatter.result({
  "duration": 4315482000,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.click_LogIn2()"
});
formatter.result({
  "duration": 8237132600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 61,
  "name": "Login in the ProductStore with username only",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-with-username-only",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@TC07_ProductStore"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "when user launches the chrome application then",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "when user opens the ProductStore Home page then",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "by entering only \u003cusername\u003e and clicking login button",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user  should not nagivate to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
  "name": "",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-with-username-only;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 68,
      "id": "productstore--website;login-in-the-productstore-with-username-only;;1"
    },
    {
      "cells": [
        "naveen"
      ],
      "line": 69,
      "id": "productstore--website;login-in-the-productstore-with-username-only;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "Login in the ProductStore with username only",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-with-username-only;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 60,
      "name": "@TC07_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "when user launches the chrome application then",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "when user opens the ProductStore Home page then",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "by entering only naveen and clicking login button",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user  should not nagivate to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_TestCase.beforeEach3()"
});
formatter.result({
  "duration": 10549346600,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.login3()"
});
formatter.result({
  "duration": 151225700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveen",
      "offset": 17
    }
  ],
  "location": "Login_TestCase.enter_Details3(String)"
});
formatter.result({
  "duration": 4499488900,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.click_LogIn3()"
});
formatter.result({
  "duration": 2255396000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Login in the ProductStore with password only",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-with-password-only",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 71,
      "name": "@TC08_ProductStore"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "if user launches the chrome application then",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "if user opens the ProductStore Home page then",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "by entering only \u003cpassword\u003e and clicking login button,",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "user  should not nagivate to the next page,should remain in same page",
  "keyword": "Then "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-with-password-only;",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 79,
      "id": "productstore--website;login-in-the-productstore-with-password-only;;1"
    },
    {
      "cells": [
        "naveen"
      ],
      "line": 80,
      "id": "productstore--website;login-in-the-productstore-with-password-only;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 80,
  "name": "Login in the ProductStore with password only",
  "description": "",
  "id": "productstore--website;login-in-the-productstore-with-password-only;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ProductStore"
    },
    {
      "line": 71,
      "name": "@TC08_ProductStore"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "if user launches the chrome application then",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "if user opens the ProductStore Home page then",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "by entering only naveen and clicking login button,",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "user  should not nagivate to the next page,should remain in same page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_TestCase.beforeEach4()"
});
formatter.result({
  "duration": 13002357100,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.login4()"
});
formatter.result({
  "duration": 93352800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveen",
      "offset": 17
    }
  ],
  "location": "Login_TestCase.enter_Details4(String)"
});
formatter.result({
  "duration": 4579915400,
  "status": "passed"
});
formatter.match({
  "location": "Login_TestCase.click_LogIn4()"
});
formatter.result({
  "duration": 6481388100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 83,
  "name": "Add each item to the cart",
  "description": "",
  "id": "productstore--website;add-each-item-to-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@TC09_ProductStore"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "if the user launch the website and login \u003cusername\u003e and \u003cpassword\u003e and",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "the user adds the items",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "click on cart and check if the items ared added or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "productstore--website;add-each-item-to-the-cart;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 89,
      "id": "productstore--website;add-each-item-to-the-cart;;1"
    },
    {
      "cells": [
        "naveen",
        "",
        "naveen"
      ],
      "line": 90,
      "id": "productstore--website;add-each-item-to-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 90,
  "name": "Add each item to the cart",
  "description": "",
  "id": "productstore--website;add-each-item-to-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 82,
      "name": "@TC09_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "if the user launch the website and login naveen and naveen and",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "the user adds the items",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "click on cart and check if the items ared added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "naveen",
      "offset": 41
    },
    {
      "val": "naveen",
      "offset": 52
    }
  ],
  "location": "Cart_TestCase.cart_Test(String,String)"
});
formatter.result({
  "duration": 19787628000,
  "status": "passed"
});
formatter.match({
  "location": "Cart_TestCase.add()"
});
formatter.result({
  "duration": 6259889500,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-G2J1RLB\u0027, ip: \u0027192.168.43.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58498}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fea3a4d33ae04a21895247c5a43254a0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.pages.Cart_Page.select_Phone(Cart_Page.java:79)\r\n\tat com.testCases.Cart_TestCase.add(Cart_TestCase.java:30)\r\n\tat ✽.When the user adds the items(./src/main/resources/feature/testcase.feature:85)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Cart_TestCase.check()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 93,
  "name": "Add all phones  to the cart",
  "description": "",
  "id": "productstore--website;add-all-phones--to-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@TC10_ProductStore"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "if the website is launched  and  login \u003cusername\u003e and \u003cpassword\u003e and",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "the user adds all phones",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "click on cart and check all the phones are added or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 98,
  "name": "",
  "description": "",
  "id": "productstore--website;add-all-phones--to-the-cart;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 99,
      "id": "productstore--website;add-all-phones--to-the-cart;;1"
    },
    {
      "cells": [
        "15121036",
        "",
        "15121036"
      ],
      "line": 100,
      "id": "productstore--website;add-all-phones--to-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 100,
  "name": "Add all phones  to the cart",
  "description": "",
  "id": "productstore--website;add-all-phones--to-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 92,
      "name": "@TC10_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "if the website is launched  and  login 15121036 and 15121036 and",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "the user adds all phones",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "click on cart and check all the phones are added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15121036",
      "offset": 39
    },
    {
      "val": "15121036",
      "offset": 52
    }
  ],
  "location": "Cart_TestCase.cart_Test1(String,String)"
});
formatter.result({
  "duration": 21527854800,
  "status": "passed"
});
formatter.match({
  "location": "Cart_TestCase.add1()"
});
formatter.result({
  "duration": 5067278800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please fill out Username and Password.}\n  (Session info: chrome\u003d80.0.3987.149): Please fill out Username and Password.\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-G2J1RLB\u0027, ip: \u0027192.168.43.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58522}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6bc00e631fad1398b9d396dc1338e181\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Phones\u0027)]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat com.pages.Cart_Page.all_Phones(Cart_Page.java:109)\r\n\tat com.testCases.Cart_TestCase.add1(Cart_TestCase.java:68)\r\n\tat ✽.When the user adds all phones(./src/main/resources/feature/testcase.feature:95)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Cart_TestCase.check1()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 103,
  "name": "Add all laptops to the cart",
  "description": "",
  "id": "productstore--website;add-all-laptops-to-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@TC11_ProductStore"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "if the website is launched , login \u003cusername\u003e and \u003cpassword\u003e and",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "the user adds all laptops",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "click on cart and check all the laptops are added or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "productstore--website;add-all-laptops-to-the-cart;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 109,
      "id": "productstore--website;add-all-laptops-to-the-cart;;1"
    },
    {
      "cells": [
        "844872",
        "",
        "844872"
      ],
      "line": 110,
      "id": "productstore--website;add-all-laptops-to-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "Add all laptops to the cart",
  "description": "",
  "id": "productstore--website;add-all-laptops-to-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 102,
      "name": "@TC11_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "if the website is launched , login 844872 and 844872 and",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "the user adds all laptops",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "click on cart and check all the laptops are added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "844872",
      "offset": 35
    },
    {
      "val": "844872",
      "offset": 46
    }
  ],
  "location": "Cart_TestCase.cart_Test2(String,String)"
});
formatter.result({
  "duration": 5999405200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-G2J1RLB\u0027, ip: \u0027192.168.43.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:58544}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3fcaf6d2d5c1374c12e46092dc81be03\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:324)\r\n\tat com.utilities.WrapperClass.launchBrowser(WrapperClass.java:21)\r\n\tat com.testCases.Cart_TestCase.cart_Test2(Cart_TestCase.java:83)\r\n\tat ✽.Given if the website is launched , login 844872 and 844872 and(./src/main/resources/feature/testcase.feature:104)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Cart_TestCase.add2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Cart_TestCase.check2()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "Add all monitors to the cart",
  "description": "",
  "id": "productstore--website;add-all-monitors-to-the-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@TC12_ProductStore"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "if the website is launched , login \u003cusername\u003e and \u003cpassword\u003e and then",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "the user adds all monitors",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "click on cart and check all the monitors are added or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 118,
  "name": "",
  "description": "",
  "id": "productstore--website;add-all-monitors-to-the-cart;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 119,
      "id": "productstore--website;add-all-monitors-to-the-cart;;1"
    },
    {
      "cells": [
        "venkatesh.reddy679",
        "",
        "venkatesh.reddy679"
      ],
      "line": 120,
      "id": "productstore--website;add-all-monitors-to-the-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 120,
  "name": "Add all monitors to the cart",
  "description": "",
  "id": "productstore--website;add-all-monitors-to-the-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@TC12_ProductStore"
    },
    {
      "line": 1,
      "name": "@ProductStore"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "if the website is launched , login venkatesh.reddy679 and venkatesh.reddy679 and then",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "the user adds all monitors",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "click on cart and check all the monitors are added or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "venkatesh.reddy679",
      "offset": 35
    },
    {
      "val": "venkatesh.reddy679",
      "offset": 58
    }
  ],
  "location": "Cart_TestCase.cart_Test3(String,String)"
});
