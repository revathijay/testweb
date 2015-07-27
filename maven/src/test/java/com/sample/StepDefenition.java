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
	
	
	@Given("^I am in the mobile home page$")
	public void i_am_in_the_mobile_home_page()
	{
		HomePage.i_am_in_the_mobile_home_page(driver);
	}
	
	@Given("^I am in the home page$")
	public void i_am_in_the_home_page()
	{
		HomePage.i_am_in_the_home_page(driver);
	}
	
	@Then("^I should see \"([^\"]*)\"$")
	public void i_should_see(String text) throws Exception {
		CommonSteps.i_should_see(text, driver);
	
}
	@Then("^I follow link \"([^\"]*)\"$")
	public void i_follow_link(String link) throws Throwable {
	   
	    CommonSteps.followLink(driver,link);
	}
	/*
	@Then("^I fill in \"([^\"]*)\" with \"([^\"]*)\"$")
	public void i_fill_in_with(String textfield, String value) throws Throwable {
		DealerPage.fillindetails(driver,textfield,value);
	}
	*/
	
	@Then("^I select \"([^\"]*)\"$")
	public void i_select(String selectOption) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		DealerPage.selectOption(driver,selectOption);
	}
	 
	@And("^I select first model$")
	public void i_select_first_model()
	{
		RequestTestDrive.selectFirstModel(driver);
	}
	
	@And("^I select your details$")
	public void i_select_your_details()
	{
		RequestTestDrive.selectYourDetails(driver);
	}

     @Then("^I fill in my details as follows$")
     public void i_fill_in_my_details_as_follows(List<String> formValues) throws Throwable
     {
    	 CommonSteps.fillDetails(driver,formValues);
     }
     
     
     @Then("^I fill in my preferred postcode as \"([^\"]*)\" and select \"([^\"]*)\"$")
     public void i_fill_in_my_preferred_postcode_as_and_select(String postCode, String area) throws Throwable {
    	 RequestTestDrive.fillLocationTime(driver,postCode);
     }
     
   
     @Then("^I click on request my test drive$")
     public void i_click_on_request_my_test_drive() throws Throwable {
    	 RequestTestDrive.clickOnRequest(driver);
     }
     
     @Then("^I select the first model$")
     public void i_select_the_first_model() throws Throwable {
       RequestBrochure.selectFirstModel(driver);
     }
     
     @Then("^I click on request my brochure$")
     public void i_click_on_request_my_brochure() throws Throwable {
    	 RequestBrochure.clickOnBrochure(driver);
     }
     
     @Then("^I select \"([^\"]*)\",\"([^\"]*)\" of \"([^\"]*)\"$")
     public void i_select_of(String model1, String model2, String carType) throws Throwable {
         CompareModels.fillInModelDetails(driver,model1,model2,carType);
     }
     
     @Then("^I enter postcode as \"([^\"]*)\"$")
     public void i_enter_postcode_as(String postcode) throws Throwable {
        CompareModels.fillinPostCode(driver,postcode);
     }
     
     @Then("^I change grade to F Sport$")
     public void i_change_grade_to_F_Sport() throws Throwable {
         BuildAndPrice.changeGradeFSport(driver);
     }
     
     @Then("^I change colour to \"([^\"]*)\"$")
     public void i_change_colour_to(String colour) throws Throwable {
       BuildAndPrice.changeColour(driver, colour);
     }
     
     @Then("^I click on review$")
     public void i_click_on_review() throws Throwable {
    	 BuildAndPrice.clickOnReview(driver);
     }
     
    
	@After public void close()
	{
		driver.manage().deleteAllCookies();
		driver.quit();
	}
	
}
