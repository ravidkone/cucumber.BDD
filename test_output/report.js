$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFile/contact.feature");
formatter.feature({
  "name": "create contact list",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "create a contact list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DataTable"
    }
  ]
});
formatter.step({
  "name": "user already logged into web",
  "keyword": "Given "
});
formatter.match({
  "location": "cucumber.BDD.contactStepDefinition.user_already_logged_into_web()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter contact details as FirstName and LastName",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.contactStepDefinition.user_enter_contact_details_as_FirstName_and_LastName(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on contact submit tab",
  "keyword": "When "
});
formatter.match({
  "location": "cucumber.BDD.contactStepDefinition.user_click_on_contact_submit_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill cost details",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.contactStepDefinition.user_fill_cost_details(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "form contact list will be added",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.contactStepDefinition.form_contact_list_will_be_added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user contact is added",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumber.BDD.contactStepDefinition.user_contact_is_added()"
});
formatter.result({
  "status": "passed"
});
});