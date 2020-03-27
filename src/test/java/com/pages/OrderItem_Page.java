package com.pages;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class OrderItem_Page {

	WebDriver driver;
	Boolean result = false;

	public OrderItem_Page(WebDriver driver) {
		this.driver = driver;
	}

	public void count_Item() {
		List<WebElement> items = driver.findElements(By.className("success"));
		System.out.println("Number of Items in the Cart is:" + items.size());
	}

	public void purchase(String name, String country, String city, String credit_card, String month, String year)
			throws InterruptedException {
		driver.findElement(By.xpath("/html/body/div[6]/div/div[2]/button")).click();
		Thread.sleep(1000);
		driver.findElement(By.cssSelector("#name")).sendKeys(name);
		driver.findElement(By.cssSelector("#country")).sendKeys(country);
		driver.findElement(By.cssSelector("#city")).sendKeys(city);
		driver.findElement(By.cssSelector("#card")).sendKeys(credit_card);
		driver.findElement(By.cssSelector("#month")).sendKeys(month);
		driver.findElement(By.cssSelector("#year")).sendKeys(year);
		driver.findElement(By.cssSelector("#orderModal > div > div > div.modal-footer > button.btn.btn-primary"))
				.click();
		
	} public void verify(String identifier) throws InterruptedException {
		String purchaseDetails = driver.findElement(By.xpath("/html/body/div[10]/p")).getText();
		Thread.sleep(1000);
		System.out.println(purchaseDetails);
		if(purchaseDetails.contains(identifier)) {
			result = true;
		}
		Assert.assertTrue("purchase details not related to account details", result);
		driver.findElement(By.xpath("/html/body/div[10]/div[7]/div/button")).click();
	

	}

}
