Feature: create contact list

# this is the example for scenario using Data Table
@DataTable
Scenario: create a contact list

Given user already logged into web
Then user enter contact details as FirstName and LastName
|ravikk	|konekk	|
When user click on contact submit tab
Then user fill cost details 
|test deal	|1000	|20	|30	|
Then form contact list will be added
Then user contact is added