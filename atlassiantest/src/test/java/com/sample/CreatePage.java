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

public class CreatePage {
	
	//go to login page
	public static void deltePageAfterCreation(WebDriver driver) 
	{
		CommonSteps.followLink(driver,"action-menu-link");
	    driver.findElement(By.cssSelector(".action-remove span")).click();
		System.out.println("i am hgere");
		CommonSteps.followLink(driver,"confirm");
		
	}
	
	public static void createNewPage(WebDriver driver) 
	{
		CommonSteps.followLink(driver,"quick-create-page-button");
		driver.findElement(By.name(title).sendKeys("testpermissions");
		CommonSteps.clickOn(driver,"Save");
	}


	
}
