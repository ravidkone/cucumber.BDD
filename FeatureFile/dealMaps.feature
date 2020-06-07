Feature: create deals list

# this is the example for scenario using Maps
@Maps
Scenario: create a contact list

Given user already logged into deals web
Then user enter deals details
|FirstName	| LastName|
|ravikk	|konekk	|
When user click on deals submit tab
Then user fills deals cost details
|deal name	|amount	|tax|rate|
|test deal	|1000	|20	|30	|
|test deal1	|2000	|30	|50	|
|test deal2	|3000	|40	|70	|

Then deals list will be added
Then user deal is added