package cucumber.BDD;

import com.qa.pages.LoginPage;
import com.qa.pages.homePage;
import com.qa.utility.TestBase;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepDefinition extends TestBase{
	

	//making changes in ravibdd branch
	// im on ravi TDD branch now
	// this is added to GIT
	// [-- 1) \"(.*)\"  OR 2) \"([^\"]*\"   --] to pass the arguments use Reg expression
	@Given("^user open browser and login to web using \"(.*)\" and \"(.*)\"$")
	public void user_open_browser_and_login_to_web_using_and(String username, String pwd) throws InterruptedException {
		TestBase.initializer();
		LoginPage.loginpageverify();
		LoginPage.login();
		System.out.println("UserName:"+username+" and Password:"+pwd+" ,browser opned");
	}

	@When("^user click on task tab$")
	public void user_click_on_task_tab() {
		homePage.homepageverify();
		//System.out.println("clicked on task tab");
	}

	@Then("^task tab will open$")
	public void task_tab_will_open() {
		System.out.println("task tab opened");
	}
	
	@Then("user enter task details")
	public void user_enter_task_details() {
		System.out.println("user entered task details");
	}

	@And("task is created")
	public void task_is_created() {
		System.out.println("task created successfully");
		TestBase.closebrowser(); 
	}
	
	// second scenario
	@Given("^user open form and enter \"(.*)\" and \"(.*)\"$")
	public void user_open_form_and_enter_and(String firstName, String lastName) {
		System.out.println("First Name: "+firstName+" and Last Name: "+lastName+" Entered");
	}

	@When("user click on submit button")
	public void user_click_on_submit_button() {
		System.out.println("Submitted the form by uer");
	}

	@Then("form will get submitted")
	public void form_will_get_submitted() {
		System.out.println("successfully submited");
	}


}
