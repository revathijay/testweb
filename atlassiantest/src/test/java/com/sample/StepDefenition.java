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
import cucumber.api.java.en.When;
import cucumber.runtime.ScenarioImpl;

public class StepDefenition {

	protected WebDriver driver;
	String url;
	LoginPage login;
	ConfluencePage createPage;
	UserManagementPage userManagementPage;
	
	@Before public void setup() 
	{ 
		driver = new FirefoxDriver();
		driver.manage().deleteAllCookies();
		url="https://sampletestpage.atlassian.net/";
	}
	
	
	//go to login page
			@Given("^I am in the login page$")
			public void i_am_in_the_login_page() throws Throwable {
			   login=new LoginPage(driver,url);
			}
	
	@Given("^I login with userName as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void i_login_with_userName_as_and_password_as(String userName, String Password) throws Throwable {
	  createPage=login.loginWIthUserNameandPassword(driver,userName,Password);
	}
	
	
	@Then("^I create a page \"([^\"]*)\" in space \"([^\"]*)\"$")
	public void i_create_a_page_in_space(String title, String space) throws Throwable {
		createPage=createPage.createNewPage(driver,title,space);
	}
	
	
	@Then("^I create a user with username as \"([^\"]*)\" and email as \"([^\"]*)\"$")
	public void i_create_a_user_with_username_as_and_email_as(String userName, String email) throws Throwable {
		userManagementPage=createPage.goToUserManagementPage(driver);
		userManagementPage.createUser(driver,userName,email);
	}

	@When("^I navigate to page \"([^\"]*)\"$")
	public void i_navigate_to_page(String pageTitle) throws Throwable {
		//createPage=userManagementPage.navigatetoDashboard(driver);
		createPage.clickonSpecificPage(driver,pageTitle);
		
	}

	@Then("^I associate the restriction of \"([^\"]*)\" to the user \"([^\"]*)\"$")
	public void i_associate_the_restriction_of_to_the_user(String restrictionType, String userName) throws Throwable {
		createPage.applyRestrictions(driver,restrictionType,userName);
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
		    // CreatePage.deltePageAfterCreation(driver);
		     driver.close();
		     
		 }
		
		 //close the driver
			@After("@all") public void close()
			{
				driver.manage().deleteAllCookies();
				driver.close();
			}
   
	
}
