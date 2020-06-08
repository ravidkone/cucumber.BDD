package cucumber.BDD;

import java.util.List;
import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class dealMapsStepDefinition {

	@Given("user already logged into deals web")
	public void user_already_logged_into_deals_web() {
	    System.out.println("add code for login to Web");
	}

	@Then("user enter deals details")
	public void user_enter_deals_details(DataTable data) {
		for (Map<Object, Object> userdata : data.asMaps(String.class, String.class)) {
	//	Map<String,String> userdata=(Map<String, String>) data.asMaps(String.class, String.class);
		System.out.println("Entered firstname is: "+userdata.get("FirstName"));
		System.out.println("Entered lastname is: "+userdata.get("LastName"));
		}
	}

	@When("user click on deals submit tab")
	public void user_click_on_deals_submit_tab() {
	   System.out.println("user submited the deal");
	}

	@Then("user fills deals cost details")
	public void user_fills_deals_cost_details(DataTable details) {
		for (Map<Object, Object> userdetails : details.asMaps(String.class, String.class)) {
	//	Map<String,String> userdetails=(Map<String, String>) details.asMaps(String.class, String.class);
		System.out.println("entered data is: Amount:"+userdetails.get("deal name"));
		System.out.println("entered data is: Amount:"+userdetails.get("amount"));
		System.out.println("entered data is: Amount:"+userdetails.get("tax"));
		System.out.println("entered data is: Amount:"+userdetails.get("rate"));
		}
	}

	@Then("deals list will be added")
	public void deals_list_will_be_added() {
	   System.out.println("deals details added");
	}

	@Then("user deal is added")
	public void user_deal_is_added() {
	  System.out.println("user deal added");
	}

}
