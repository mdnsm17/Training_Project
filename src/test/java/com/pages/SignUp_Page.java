package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SignUp_Page {
	WebDriver driver;

	public SignUp_Page(WebDriver driver) {
		
		this.driver = driver;
	}
	public void userName(String username) {
		driver.findElement(By.xpath("//*[@id=\"sign-username\"]")).sendKeys(username);
	}
	public void password(String password) {
		driver.findElement(By.xpath("//*[@id=\"sign-password\"]")).sendKeys(password);
	}
	public void signup(String expectedText) throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"signInModal\"]/div/div/div[3]/button[2]")).click();
		Thread.sleep(2000);
		String text=driver.switchTo().alert().getText();
		if(text.equalsIgnoreCase(expectedText)) {
			System.out.println("sign up verified");
		}
		driver.switchTo().alert().accept();
	}
	public void close() {
		driver.findElement(By.xpath("//*[@id=\"signInModal\"]/div/div/div[3]/button[1]")).click();
	}
	

}
