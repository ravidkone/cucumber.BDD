$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFile/first.feature");
formatter.feature({
  "name": "login to website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testnew"
    }
  ]
});
formatter.scenario({
  "name": "open browser and login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testnew"
    },
    {
      "name": "@Login"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open browser and login to web using \"ravik\" and \"kone\"",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber.BDD.stepDefinition.user_open_browser_and_login_to_web_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on task tab",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber.BDD.stepDefinition.user_click_on_task_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "task tab will open",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.stepDefinition.task_tab_will_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter task details",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.stepDefinition.user_enter_task_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "task is created",
  "keyword": "And "
});
formatter.match({
  "location": "cucumber.BDD.stepDefinition.task_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});