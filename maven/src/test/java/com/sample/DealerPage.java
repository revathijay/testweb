package com.sample;

import java.util.concurrent.TimeUnit;

import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.ScenarioImpl;

public class DealerPage {



	public static void selectOption(WebDriver driver, String selectOption) 
	{
	driver.findElement(By.cssSelector("li.ui-menu-item")).click();
	}
	
   /*
	public static void fillindetails(WebDriver driver, String textfield, String value)
	{
		driver.findElement(By.id(textfield)).sendKeys(value);
	}
	*/

}
