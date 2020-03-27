
package com.testCases;

import com.pages.Cart_Page;
import com.pages.Login_Page;
import com.utilities.WrapperClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Cart_TestCase extends com.utilities.WrapperClass {
	Cart_Page cart_Page;

	@Given("^if the user launch the website and login (.+) and (.+) and$")
	public void cart_Test(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		cart_Page = new Cart_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		login_Page.pass(password);
		login_Page.log_in();

	}

	@When("^the user adds the items$")
	public void add() throws InterruptedException {
		Thread.sleep(2000);
		cart_Page.select_Phone("Samsung galaxy s6");
		Thread.sleep(2000);
		click_Home();
		Thread.sleep(2000);
		cart_Page.select_Laptop("MacBook air");
		Thread.sleep(2000);
		click_Home();
		Thread.sleep(2000);
		cart_Page.select_Monitors("Apple monitor 24");
		Thread.sleep(2000);
	}

	@Then("^click on cart and check if the items ared added or not$")
	public void check() throws InterruptedException {
		click_Cart();
		Thread.sleep(2000);
		cart_Page.count_Item();
		click_logOut();
		quit();
	}

	/// add all the phones to cart..................................................

	@Given("^if the website is launched  and  login (.+) and (.+) and$")
	public void cart_Test1(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		cart_Page = new Cart_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		login_Page.pass(password);
		login_Page.log_in();

	}

	@When("^the user adds all phones$")
	public void add1() throws InterruptedException {
		Thread.sleep(2000);
		cart_Page.all_Phones();
	}

	@Then("^click on cart and check all the phones are added or not$")
	public void check1() throws InterruptedException {
		click_Cart();
		Thread.sleep(2000);
		cart_Page.count_Item();
		click_logOut();
		quit();
	}
	//// add all laptops to cart..........................................................
	
	@Given("^if the website is launched , login (.+) and (.+) and$")
	public void cart_Test2(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		cart_Page = new Cart_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		login_Page.pass(password);
		login_Page.log_in();

	}

	@When("^the user adds all laptops$")
	public void add2() throws InterruptedException {
		Thread.sleep(2000);
		cart_Page.all_Laptop();
	}

	@Then("^click on cart and check all the laptops are added or not$")
	public void check2() throws InterruptedException {
		click_Cart();
		Thread.sleep(2000);
		cart_Page.count_Item();
		click_logOut();
		quit();
}
	/////addign all monitors to cart
	
	@Given("^if the website is launched , login (.+) and (.+) and then$")
	public void cart_Test3(String username,String password) throws InterruptedException {
		launchBrowser("chrome", "https://www.demoblaze.com");
		cart_Page = new Cart_Page(driver);
		Login_Page login_Page = new Login_Page(driver);
		login_Page.click_LogIn();
		login_Page.userid(username);
		login_Page.pass(password);
		login_Page.log_in();

	}

	@When("^the user adds all monitors$")
	public void add3() throws InterruptedException {
		Thread.sleep(2000);
		cart_Page.all_Monitor();
	}

	@Then("^click on cart and check all the monitors are added or not$")
	public void check3() throws InterruptedException {
		click_Cart();
		Thread.sleep(2000);
		cart_Page.count_Item();
		click_logOut();
		quit();
}
}
