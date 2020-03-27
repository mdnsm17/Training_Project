package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".\\src\\main\\resources\\feature\\testcase.feature",
				plugin = { "pretty", "html:reports/cucumber-html-report" ,"json:reports/cucumber-html-report/jsonreport",
		"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@TC01_ProductStore,@TC02_ProductStore,@TC03_ProductStore,@TC04_ProductStore,@TC05_ProductStore,@TC06_ProductStore,@TC07_ProductStore,@TC08_ProductStore,@TC09_ProductStore,@TC10_ProductStore,@TC11_ProductStore,@TC12_ProductStore,@TC13_ProductStore,@TC14_ProductStore,@TC15_ProductStore,@TC16_ProductStore,@TC17_ProductStore,@TC18_ProductStore,@TC19_ProductStore,@TC20_ProductStore"},
				
		glue = {"com.testCases"},
		monochrome = true
		) 
public class ProductStore_Total_Runner {

}
