package com.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.testCases.Cart_TestCase;
import com.utilities.WrapperClass;

public class Cart_Page extends 	WrapperClass {
	

	@FindBy(xpath = "//a[contains(text(),'Phones')]")
	WebElement click_Phone;
	@FindBy(xpath = "//a[@class='btn btn-success btn-lg']")
	WebElement add_Cart1;

	@FindBy(xpath = "//a[contains(text(),'Laptops')]")
	WebElement click_Laptop;
	@FindBy(xpath = "//a[@class='btn btn-success btn-lg']")
	WebElement add_Cart2;

	@FindBy(xpath = "//a[contains(text(),'Monitors')]")
	WebElement click_Monitor;
	@FindBy(xpath = "//a[@class='btn btn-success btn-lg']")
	WebElement add_Cart3;
	
	//////////////////////////////////////////////////////////////////
	@FindBy(linkText = "Samsung galaxy s6")
	WebElement sam1;
	@FindBy(linkText = "Nokia lumia 1520")
	WebElement nokia;
	@FindBy(linkText = "Nexus 6")
	WebElement nexus;
	@FindBy(linkText = "Samsung galaxy s7")
	WebElement sam2;
	@FindBy(linkText = "Iphone 6 32gb")
	WebElement iphone;
	@FindBy(linkText = "Sony xperia z5")
	WebElement sony;
	@FindBy(linkText = "HTC One M9")
	WebElement htc;
	//////////////////////////////////////////////////////////////////////
	@FindBy(linkText = "Sony vaio i5")
	WebElement sonyi5;
	@FindBy(linkText = "Sony vaio i7")
	WebElement sonyi7;
	@FindBy(linkText = "MacBook air")
	WebElement mac;
	@FindBy(linkText = "Dell i7 8gb")
	WebElement dell;
	@FindBy(linkText = "2017 Dell 15.6 Inch")
	WebElement dell2017;
	@FindBy(linkText = "MacBook Pro")
	WebElement macPro;
	////////////////////////////////////////////////////////////////////
	@FindBy(linkText = "Apple monitor 24")
	WebElement apple;
	@FindBy(linkText = "ASUS Full HD")
	WebElement asus;
	/////////////////////////////////////////////////////////////////////

	public Cart_Page(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}

	public void count_Item() {
		List<WebElement> items = driver.findElements(By.className("success"));
		System.out.println("Number of Items in the Cart is:" + items.size());
	}
	
	public void select_Phone(String phone) throws InterruptedException {

		click_Phone.click();
		driver.findElement(By.linkText(phone)).click();
		Thread.sleep(2000);
		add_Cart1.click();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
	}

	public void select_Laptop(String laptop) throws InterruptedException {

		click_Laptop.click();
		driver.findElement(By.linkText(laptop)).click();
		Thread.sleep(2000);
		add_Cart2.click();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
	}

	public void select_Monitors(String monitor) throws InterruptedException {

		click_Monitor.click();
		driver.findElement(By.linkText(monitor)).click();
		Thread.sleep(2000);
		add_Cart3.click();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
	}

	public void all_Phones() throws InterruptedException {
		 Thread.sleep(3000);
		click_Phone.click();
		Thread.sleep(2000);
		 List<WebElement> noOfPhones = driver.findElements(By.className("hrefch"));
		 int size = noOfPhones.size();
		 System.out.println("no of phones present:"+size);
		 sam1.click();
		 Thread.sleep(1000);
		 add_Cart1.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Phone.click();
		 nokia.click();
		 Thread.sleep(1000);
		 add_Cart1.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Phone.click();
		 nexus.click();
		 Thread.sleep(1000);
		 add_Cart1.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Phone.click();
		 sam2.click();
		 Thread.sleep(1000);
		 add_Cart1.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Phone.click();
		 iphone.click();
		 Thread.sleep(1000);
		 add_Cart1.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Phone.click();
		 sony.click();
		 Thread.sleep(1000);
		 add_Cart1.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Phone.click();
		 htc.click();
		 Thread.sleep(1000);
		 add_Cart1.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		
		 
		 }
	public void all_Laptop() throws InterruptedException {
		click_Laptop.click();
		Thread.sleep(2000);
		List<WebElement> noOfLaptops = driver.findElements(By.className("hrefch"));
		int size = noOfLaptops.size();
		 System.out.println("no of laptops present:"+size);
		 sonyi5.click();
		 Thread.sleep(1000);
		 add_Cart2.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Laptop.click();
		 sonyi7.click();
		 Thread.sleep(1000);
		 add_Cart2.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Laptop.click();
		 mac.click();
		 Thread.sleep(1000);
		 add_Cart2.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Laptop.click();
		 dell.click();
		 Thread.sleep(1000);
		 add_Cart2.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Laptop.click();
		 dell2017.click();
		 Thread.sleep(1000);
		 add_Cart2.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Laptop.click();
		 macPro.click();
		 Thread.sleep(1000);
		 add_Cart2.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		
		
	}
	
	public void all_Monitor() throws InterruptedException {
		click_Monitor.click();
		Thread.sleep(2000);
		List<WebElement> noOfMonitors = driver.findElements(By.className("hrefch"));
		int size = noOfMonitors.size();
		 System.out.println("no of monitors present:"+size);
		 apple.click();
		 Thread.sleep(1000);
		 add_Cart3.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 click_Home();
		 
		 click_Monitor.click();
		 asus.click();
		 Thread.sleep(1000);
		 add_Cart3.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		
		
	}

}