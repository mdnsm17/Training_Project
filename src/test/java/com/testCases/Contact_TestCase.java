package com.testCases;

import com.pages.Contact_Page;
import com.pages.Login_Page;
import com.pages.OrderItem_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Contact_TestCase  extends WrapperClass{
	
	Contact_Page contact_Page;
	//// entering all details and clicking submit button
	@Given("^the user launch the application and login (.+) and (.+) into the application$")
	public void beforeEach(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		contact_Page = new Contact_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		Thread.sleep(1000);
		login_Page.pass(password);
		login_Page.log_in();
		Thread.sleep(2000);
	}
	
	@When("the user clicks the contact link")
	public void contact() throws InterruptedException {
		click_Contact();	
	}
	@Then("^the user enters contact email$")
	public void enter_email() {
		contact_Page.contact_Email("venkatesh.reddy679@gmail.com");
		
	}
	@Then("^the user enters contact name$")
	public void enter_Name() {
		contact_Page.contact_Name("venkateswara reddy");
		
	}
	
	@Then("^user enters message and click submit button$")
	public void message() throws InterruptedException {
		contact_Page.message("the product quality is very good");
		contact_Page.send("Thanks for the message!!");
		click_logOut();
		quit();
		
	}
	
	///// entering all details and clicking cancel button

	@Given("^if user launch the application and login (.+) and (.+) into the application and$")
	public void beforeEach1(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		contact_Page = new Contact_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		Thread.sleep(2000);
		login_Page.pass(password);
		login_Page.log_in();
		Thread.sleep(2000);
	}
	
	@When("if user clicks the contact link and")
	public void contact1() throws InterruptedException {
		click_Contact();	
	}
	@Then("^if user enters contact email and$")
	public void enter_email1() {
		contact_Page.contact_Email("venkatesh.reddy679@gmail.com");
		
	}
	@Then("^if user enters contact name and$")
	public void enter_Name1() {
		contact_Page.contact_Name("venkateswara reddy");
		
	}
	
	@Then("^user enters message then click cancel button$")
	public void message1() throws InterruptedException {
		contact_Page.message("the product quality is very good");
		contact_Page.cancel();
		click_logOut();
		quit();
		
	}
}
