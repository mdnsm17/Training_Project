package com.utilities;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;

public class WrapperClass {
	protected WebDriver driver;
	// choosing and initializing the browser and opening website
	public void launchBrowser(String browser, String url) {
		
		if (browser.equalsIgnoreCase("chrome")) {

			System.setProperty("webdriver.chrome.driver", ".\\driver\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.get(url);
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", ".\\driver\\geckodriver.exe");
			driver = new FirefoxDriver();
			driver.get(url);
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		}
	}

	// closing the browser
	public void quit() {
		driver.close();
	}
  // common links in all pages
	public void click_Home() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'Home')]")).click();
		Thread.sleep(2000);
	}

	public void click_Contact() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'Contact')]")).click();
		Thread.sleep(2000);
	}

	public void click_AboutUs() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'About us')]s")).click();
		Thread.sleep(2000);
	}

	public void click_Cart() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@id='cartur']")).click();
		Thread.sleep(2000);
	}

	public void click_login() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@id='login2']")).click();
		Thread.sleep(2000);
	}

	public void click_signUp() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@id='signin2']")).click();
		Thread.sleep(2000);
	}

	public void click_logOut() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@id='logout2']")).click();
		Thread.sleep(2000);
	}

}
