package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".\\src\\main\\resources\\feature\\testcase.feature",
				plugin = { "pretty", "html:reports/cucumber-html-report" ,"json:reports/cucumber-html-report/jsonreport",
		"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@TC13_ProductStore,@TC14_ProductStore,@TC15_ProductStore,@TC16_ProductStore,@TC17_ProductStore"},
				
		glue = {"com.testCases"},
		monochrome = true
		) 
public class ProductStore_OrderItem_Runner {

}
