package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Title_Page {
	   
	 public Title_Page(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	@FindBy(linkText = "PRODUCT STORE")
	WebElement title;
	
	public void verify(String Title) {
		
		String name=title.getText();
		if(name.equalsIgnoreCase(Title)) {
			System.out.println("title is verified");
		}
		
	}

}
