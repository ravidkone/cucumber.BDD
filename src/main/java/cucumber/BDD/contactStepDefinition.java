package cucumber.BDD;


import java.util.List;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class contactStepDefinition {
	
	@Given("user already logged into web")
	public void user_already_logged_into_web() {
	   System.out.println("user logged into web");
	}

	@Then("user enter contact details as FirstName and LastName")
	public void user_enter_contact_details_as_FirstName_and_LastName(DataTable fullname) {
	   List<String> data=fullname.asList();
		System.out.println("User entered firstname: "+data.get(0)+"and last name is: "+data.get(1));
	}

	@When("user click on contact submit tab")
	public void user_click_on_contact_submit_tab() {
	   System.out.println("User clicked on contact submit");
	}

	@Then("user fill cost details")
	public void user_fill_cost_details(DataTable userdetails) {
		List<String> details=userdetails.asList();
		System.out.println("Entered contact details are: "+details.get(0)+" and "+details.get(1)+" and "+details.get(2));
	}

	@Then("form contact list will be added")
	public void form_contact_list_will_be_added() {
	 System.out.println("contact list is added");
	}

	@Then("user contact is added")
	public void user_contact_is_added() {
	    System.out.println("contact added successfully");
	}

}
