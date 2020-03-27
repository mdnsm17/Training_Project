package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import junit.framework.Assert;

//login Amazon website
public class Login_Page {
	WebDriver driver;
	@FindBy(xpath = "//a[@id='login2']")
	WebElement clickLogIn;

	@FindBy(xpath = "//input[@id='loginusername']")
	WebElement username;
	@FindBy(xpath = "//input[@id='loginpassword']")
	WebElement password;
	@FindBy(xpath = "//button[contains(text(),'Log in')]")
	WebElement login1;
	@FindBy(xpath = "//*[@id=\"nameofuser\"]")
	WebElement verify;

	public Login_Page(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}

//click the signin option
	public void click_LogIn() {
		clickLogIn.click();
	}

// enter username
	public void userid(String userName) throws InterruptedException {
		username.clear();
		username.sendKeys(userName);
		Thread.sleep(1000);
	}

	public void pass(String passWord) throws InterruptedException {
		password.clear();
		password.sendKeys(passWord);
		Thread.sleep(1000);
	}

//click the login button
	public void log_in() throws InterruptedException {
		login1.click();
		Thread.sleep(2000);
	}

	public void verify_Account(String text) throws InterruptedException {
		Thread.sleep(2000);
		 String name = verify.getText();
		Assert.assertEquals(name, text);
		System.out.println(name);

	}

	public void invalid_verify(String text) throws InterruptedException {
		Thread.sleep(2000);
		String visible_Text = driver.switchTo().alert().getText();
		Assert.assertEquals(visible_Text, text);
		driver.switchTo().alert().accept();

	}
}