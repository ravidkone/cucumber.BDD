package com.qa.utility;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBase {

	public static WebDriver driver;
	public static Properties prop;

	public TestBase() {
		prop = new Properties();
		FileInputStream fis;
		try {
			fis = new FileInputStream("../cucumber_BDD/src/main/java/com/qa/config/config.properties");
			prop.load(fis);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void initializer() throws InterruptedException {
		String browserName=prop.getProperty("browser");
		WebDriverManager.chromedriver().setup();
		if(browserName.equals("chrome")) {
			driver=new ChromeDriver();
		}else if(browserName.equals("ff")) {
			driver=new FirefoxDriver();
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtils.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtils.IMPLICIT_WAIT, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
		Thread.sleep(3000);
	}
	public static void closebrowser() {
		driver.close();
		System.out.println("browser closed");
	}

	

}
