Feature: Create Contract

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
