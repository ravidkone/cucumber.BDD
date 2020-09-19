
Feature: login to SAP website

Scenario: open browser and login to website

Given user open SAP browser and login to web using "ravik" and "kone"
When user click on SAP task tab
Then task tab will open
Then user enter task details
And tasks is created