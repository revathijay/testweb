package com.sample;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.ScenarioImpl;

public class StepDefenition {

	protected WebDriver driver;
	
	
	@Before public void setup() 
	{ 
		driver = new FirefoxDriver();
		driver.manage().deleteAllCookies();
	}
	
	//go to login page
		@Given("^I am in the login page$")
		public void i_am_in_the_login_page() throws Throwable {
		    LoginPage.visitPage(driver);
		}
	 

	    //verify the text is present
		@Then("^I should see \"([^\"]*)\"$")
		public void i_should_see(String text) throws Throwable {
		   CommonSteps.i_should_see(text, driver);
		}

		 @Then("^I fill in my details as follows$")
	     public void i_fill_in_my_details_as_follows(List<String> formValues) throws Throwable
	     {
	    	 CommonSteps.fillDetails(driver,formValues);
	     }
		 
		 @Then("^I click \"([^\"]*)\"$")
			public void i_follow_link(String id) throws Throwable {
			   
			    CommonSteps.followLink(driver,id);
			}
		 @Then("^I select \"([^\"]*)\"$")
			public void i_select(String linkText) throws Throwable {
			   
			    CommonSteps.select(driver,linkText);
			}
		 
		 @Then("^I press \"([^\"]*)\"$")
			public void i_press(String linkText) throws Throwable {
			   
			    CommonSteps.clickOn(driver,linkText);
			}
		 
		 @Then("^I should not see \"([^\"]*)\"$")
		 public void i_should_not_see(String text) throws Throwable {
		    CommonSteps.i_should_not_see(text,driver);
		 }
		 
		 @After("@createPage")
		 public void afterScenario() {
		     CreatePage.deltePageAfterCreation(driver);
		     driver.close();
		     
		 }
		
		 //close the driver
			@After("@all") public void close()
			{
				driver.manage().deleteAllCookies();
				driver.close();
			}
   
	
}
