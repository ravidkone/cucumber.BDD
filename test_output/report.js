$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFile/dealMaps.feature");
formatter.feature({
  "name": "create deals list",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "create a contact list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Maps"
    }
  ]
});
formatter.step({
  "name": "user already logged into deals web",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber.BDD.dealMapsStepDefinition.user_already_logged_into_deals_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter deals details",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.dealMapsStepDefinition.user_enter_deals_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on deals submit tab",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber.BDD.dealMapsStepDefinition.user_click_on_deals_submit_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills deals cost details",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.dealMapsStepDefinition.user_fills_deals_cost_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deals list will be added",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.dealMapsStepDefinition.deals_list_will_be_added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deal is added",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.dealMapsStepDefinition.user_deal_is_added()"
});
formatter.result({
  "status": "passed"
});
});