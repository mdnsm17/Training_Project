package com.testCases;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;


import com.pages.Login_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_TestCase extends WrapperClass {
	Login_Page login_Page;
	
	@Given("^the user launch the chrome application$")
	public void beforeEach() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}
	/////////valid login.......................................................................

	@When("^the user open the ProductStore Home page$")
	public void login() {
		login_Page.click_LogIn();
	}

	@Then("^the user login using (.+) and (.+)$")
	public void enter_Details(String username,String password) throws IOException, InterruptedException {
		
		login_Page.userid(username);
		Thread.sleep(1000);
		login_Page.pass(password);
		

	}

	@Then("^click on the login button user nagivate to the next page$")
	public void click_LogIn() throws InterruptedException {
		login_Page.log_in();
		Thread.sleep(2000);
		login_Page.verify_Account("Welcome naveen");
		Thread.sleep(1000);
		click_logOut();
		quit();
		
	}

//////// Invalid login.....................................................................

	@Given("^if user launch the chrome application and$")
	public void beforeEach1() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^if user open the ProductStore Home page and$")
	public void login1() {
		login_Page.click_LogIn();
	}

	@Then("^if user login using  Invalid (.+) and (.+) and$")
	public void enter_Details1(String username,String password) throws IOException, InterruptedException {

		

		login_Page.userid(username);
		Thread.sleep(1000);
		login_Page.pass(password);
		
	}

	@Then("^click on the login button, user  should not nagivate to the next page$")
	public void click_LogIn1() throws InterruptedException {
		login_Page.log_in();
		Thread.sleep(2000);
		login_Page.invalid_verify("User does not exist.");
		quit();

	}
	
	
	///////////////////////login without details..................................

	@Given("^when user launches the chrome application and$")
	public void beforeEach2() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	} 
	@When("^when user opens the ProductStore Home page and$")
	public void login2() throws InterruptedException{
		login_Page.click_LogIn();
		Thread.sleep(1000);
		login_Page.log_in();
		Thread.sleep(1000);
	}

	
	@Then("^by clicking on the login button user  should not nagivate to the next page$")
	public void click_LogIn2() throws InterruptedException {
		
		Thread.sleep(2000);
		login_Page.invalid_verify("Please fill out Username and Password.");
		quit();
		
	}
	//////////////////////login with username.........................................

	@Given("^when user launches the chrome application then$")
	public void beforeEach3() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^when user opens the ProductStore Home page then$")
	public void login3() {
		login_Page.click_LogIn();
	}

	@Then("^by entering only (.+) and clicking login button$")
	public void enter_Details3(String username) throws IOException, InterruptedException {

		

		login_Page.userid(username);
		
		login_Page.pass("");
		
		login_Page.log_in();
	}

	@Then("^user  should not nagivate to the next page$")
	public void click_LogIn3() throws InterruptedException {
		
		login_Page.invalid_verify("Please fill out Username and Password.");
		quit();

	}
	/////// login with password .....................................................
	
	@Given("^if user launches the chrome application then$")
	public void beforeEach4() {
		launchBrowser("chrome", "https://www.demoblaze.com");
		login_Page = new Login_Page(driver);
	}

	@When("^if user opens the ProductStore Home page then$")
	public void login4() {
		login_Page.click_LogIn();
	}

	@Then("^by entering only (.+) and clicking login button,$")
	public void enter_Details4(String password) throws IOException, InterruptedException {

		
		login_Page.userid("");
		
		login_Page.pass(password);
		
		login_Page.log_in();
	}

	@Then("^user  should not nagivate to the next page,should remain in same page$")
	public void click_LogIn4() throws InterruptedException {
		
		login_Page.invalid_verify("Please fill out Username and Password.");
		quit();
	}
}
