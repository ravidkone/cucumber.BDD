package com.qa.pages;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.support.PageFactory;

import com.qa.utility.TestBase;

public class homePage extends TestBase{
	
	public static Logger log=LogManager.getLogger(homePage.class);

	public homePage() {
		log.info("this is constructor");
	PageFactory.initElements(driver, this);
	}
	
	public static void homepageverify() {
		log.info("this is method");

		System.out.println("honme page title verifed");
	}

}
