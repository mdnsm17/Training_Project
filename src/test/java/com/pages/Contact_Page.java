package com.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Contact_Page {
	WebDriver driver;
	Boolean valid = false;

	public Contact_Page(WebDriver driver) {

		this.driver = driver;
	}

	public void contact_Email(String Email) {
		driver.findElement(By.xpath("//*[@id=\'recipient-email\']")).sendKeys(Email);

	}

	public void contact_Name(String Name) {
		driver.findElement(By.xpath("//*[@id=\'recipient-name\']")).sendKeys(Name);

	}

	public void message(String message) {
		driver.findElement(By.xpath("//*[@id=\'message-text\']")).sendKeys(message);
	}

	public void send(String Text) {
		driver.findElement(By.xpath("//*[@id=\'exampleModal\']/div/div/div[3]/button[2]")).click();
		String text = driver.switchTo().alert().getText();
		if (text.equalsIgnoreCase(Text)) {
			valid = true;
			Assert.assertTrue(valid);
		}
		driver.switchTo().alert().accept();
		
	}

	public void cancel() {
		driver.findElement(By.xpath("//*[@id=\'exampleModal\']/div/div/div[3]/button[1]")).click();

	}

}
