package com.qa.pages;

import org.openqa.selenium.support.PageFactory;

import com.qa.utility.TestBase;

public class homePage extends TestBase{
	
	public homePage() {
	PageFactory.initElements(driver, this);
	}
	
	public static void homepageverify() {
		System.out.println("honme page title verifed");
	}

}
