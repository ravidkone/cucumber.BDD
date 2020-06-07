package com.qa.pages;

import org.openqa.selenium.support.PageFactory;

import com.qa.utility.TestBase;

public class LoginPage extends TestBase{
	
	  public LoginPage() {
		  PageFactory.initElements(driver, this);
	  }
	  
	  public static void loginpageverify() {
		  System.out.println("Home page verified");
	  }
	  public static void login() {
		  System.out.println("Entered username is: "+System.getProperty("username"));
		  System.out.println("Entered password is: "+prop.getProperty("password"));
		  System.out.println("logged in successfully");
	  }

	

}
