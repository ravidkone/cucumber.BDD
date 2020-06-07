Feature: login to website hooks example

@hooks
Scenario: open browser and login for hooks

Given user open browser and login to web hook
When user click on task tab to check hook
Then task tab will open for hook
Then user enter task details for hook
And task is created for hook

@hooks1
Scenario: open browser and login for deals

Given user open browser and login to web deals
When user click on task tab to check deals
Then task tab will open for deals
Then user enter task details for deals
And task is created for deals

@hooks2
Scenario Outline: open browser and fill form for car

Given user open car form and enter "<FirstName>" and "<LastName>"
When user click on submit button for car
Then form will get submitted for car

Examples:
	|FirstName	|LastName	|
	|ravi		|kone		|
	|kiran		|kkk		|