package com.qa.pages;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.support.PageFactory;

import com.qa.utility.TestBase;

public class LoginPage extends TestBase{
	public static Logger log=LogManager.getLogger(homePage.class);

	  public LoginPage() {
		  PageFactory.initElements(driver, this);
	  }
	  
	  public static void loginpageverify() {
			log.info("this is login page method");

		  System.out.println("Home page verified");
	  }
	  public static void login() {
			log.info("test case started");

		  System.out.println("Entered username is: "+System.getProperty("username"));
		  System.out.println("Entered password is: "+prop.getProperty("password"));
		  System.out.println("logged in successfully");
	  }

	

}
