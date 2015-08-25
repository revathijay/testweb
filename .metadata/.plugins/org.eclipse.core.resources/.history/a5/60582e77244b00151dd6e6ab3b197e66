package com.sample;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.ScenarioImpl;

public class UserManagementPage {
	
	
	public UserManagementPage() 
	{
		
	}
	
	
	
	public UserManagementPage createUser(WebDriver driver, String userName, String email) 
	{
		driver.findElement(By.name("names")).sendKeys(userName);
		driver.findElement(By.name("emails")).sendKeys(email);
		driver.findElement(By.id("new-user-quick-add-submit")).click();
		return this;
	}
	
	
	public ConfluencePage navigatetoDashboard(WebDriver driver) 
	{
		driver.findElement(By.cssSelector(".aui-dropdown2-trigger.app-switcher-trigger")).click();	
		driver.findElement(By.linkText("Confluence")).click();	
		return new ConfluencePage();
	}
	
	
	


	
}
