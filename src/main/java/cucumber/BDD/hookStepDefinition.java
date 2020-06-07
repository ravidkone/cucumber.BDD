package cucumber.BDD;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class hookStepDefinition {
	
	@Before // global- for all the scenario and we also we can provide order "@before(order=1)"
	public void setup() {
		System.out.println("browwe STARTED");
	}
	
	@After
	public void teardown() {
		System.out.println("browser STOPED");
	}
	
	@Before("@hooks")  //local- only for that scenario for which tag is added as "@hooks"
	public void firstScenario() {
		System.out.println("before first scenario");
	}
	
	@Given("user open browser and login to web hook")
	public void user_open_browser_and_login_to_web_hook() {
	   System.out.println("browser open");
	}

	@When("user click on task tab to check hook")
	public void user_click_on_task_tab_to_check_hook() {
	System.out.println("clicked on task hook");
	}

	@Then("task tab will open for hook")
	public void task_tab_will_open_for_hook() {
	 System.out.println("task hook opened");
	}

	@Then("user enter task details for hook")
	public void user_enter_task_details_for_hook() {
	 System.out.println("hook details ented");
	}

	@Then("task is created for hook")
	public void task_is_created_for_hook() {
		System.out.println("hook created");
	}

	
	// another scenario
	@Given("user open browser and login to web deals")
	public void user_open_browser_and_login_to_web_deals() {
	   System.out.println("deals page opned");
	}

	@When("user click on task tab to check deals")
	public void user_click_on_task_tab_to_check_deals() {
	    System.out.println("deals form opened");
	}

	@Then("task tab will open for deals")
	public void task_tab_will_open_for_deals() {
	   System.out.println("deals tab opned");
	}

	@Then("user enter task details for deals")
	public void user_enter_task_details_for_deals() {
	  System.out.println("deals details filled");
	}

	@Then("task is created for deals")
	public void task_is_created_for_deals() {
	 System.out.println("deals created");
	}
	
	// third screnario
	@Given("^user open car form and enter \"(.*)\" and \"(.*)\"$")
	public void user_open_car_form_and_enter_and(String firstName, String latName) {
	    System.out.println("entered username: "+firstName+" and password: "+latName);
	}

	@When("user click on submit button for car")
	public void user_click_on_submit_button_for_car() {
	    System.out.println("car form submitted");
	}

	@Then("form will get submitted for car")
	public void form_will_get_submitted_for_car() {
		System.out.println("submitted successfully");
	}



}
