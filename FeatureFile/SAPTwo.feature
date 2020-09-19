@SAP-3
Feature: Test Execution SAP

	#Login to Website and fill form
	@TEST_SAP-2
	Scenario: Login to Website
		Given user open browser and login to web using "ravik" and "kone"
		When user click on task tab
		Then task tab will open
		Then user enter task details
		And task is created
		
		
		
	#This is to creating a contract
	@TEST_SAP-1
	Scenario Outline: Create Contract
		Given user open form and enter "<FirstName>" and "<LastName>"
		When user click on submit button
		Then form will get submitted
		
		Examples:
			|FirstName	|LastName	|
			|ravi		|kone		|
			|kiran		|kkk		|
