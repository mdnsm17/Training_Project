package com.testCases;

import com.pages.Login_Page;
import com.pages.Title_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
 
public class Title_TestCase extends WrapperClass{
	Title_Page title;
	
	@Given("^launching the application and login (.+) and (.+) into the application and$")
	public void beforeAll(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com/");
		title=title = new Title_Page(driver);
		Login_Page login = new Login_Page(driver);
		login.click_LogIn();
		login.userid(username);
		Thread.sleep(1000);
		login.pass(password);
		login.log_in();
	}
	
	@When("^the user is on home page,take out the title and compare$")
	public void after() throws InterruptedException {
		
		title.verify("PRODUCT STORE");
		Thread.sleep(1000);
		click_logOut();
		quit();
		
	}

}
