$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFile/hooks.feature");
formatter.feature({
  "name": "login to website hooks example",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "open browser and login for hooks",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open browser and login to web hook",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_open_browser_and_login_to_web_hook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on task tab to check hook",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_click_on_task_tab_to_check_hook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "task tab will open for hook",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.task_tab_will_open_for_hook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter task details for hook",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_enter_task_details_for_hook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "task is created for hook",
  "keyword": "And "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.task_is_created_for_hook()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "open browser and login for deals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open browser and login to web deals",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_open_browser_and_login_to_web_deals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on task tab to check deals",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_click_on_task_tab_to_check_deals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "task tab will open for deals",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.task_tab_will_open_for_deals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter task details for deals",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_enter_task_details_for_deals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "task is created for deals",
  "keyword": "And "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.task_is_created_for_deals()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "open browser and fill form for car",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@hooks2"
    }
  ]
});
formatter.step({
  "name": "user open car form and enter \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on submit button for car",
  "keyword": "When "
});
formatter.step({
  "name": "form will get submitted for car",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ]
    },
    {
      "cells": [
        "ravi",
        "kone"
      ]
    },
    {
      "cells": [
        "kiran",
        "kkk"
      ]
    }
  ]
});
formatter.scenario({
  "name": "open browser and fill form for car",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@hooks2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open car form and enter \"ravi\" and \"kone\"",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_open_car_form_and_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button for car",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_click_on_submit_button_for_car()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "form will get submitted for car",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.form_will_get_submitted_for_car()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "open browser and fill form for car",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@hooks2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open car form and enter \"kiran\" and \"kkk\"",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_open_car_form_and_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button for car",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.user_click_on_submit_button_for_car()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "form will get submitted for car",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.hookStepDefinition.form_will_get_submitted_for_car()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});