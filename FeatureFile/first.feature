@testnew
Feature: login to website

@Login @test
Scenario: open browser and login

Given user open browser and login to web using "ravik" and "kone"
When user click on task tab
Then task tab will open
Then user enter task details
And task is created
 
@Fillform @test
Scenario Outline: open browser and fill form

Given user open form and enter "<FirstName>" and "<LastName>"
When user click on submit button
Then form will get submitted

Examples:
	|FirstName	|LastName	|
	|ravi		|kone		|
	|kiran		|kkk		|


