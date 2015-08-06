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

public class CommonSteps {
	
	
	//code to click on a link with a linktext
	public static void followLink(WebDriver driver, String link) 
	{
		driver.findElement(By.linkText(link)).click();		
	}
	
	//code to verify a text is present on the page
	public static void i_should_see(String text,WebDriver driver) throws Exception 
	{
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.textToBePresentInElement(By.tagName("body"), text));
	    //System.out.println(driver.findElement(By.tagName("body")).getText());
		String bodyText =driver.findElement(By.tagName("body")).getText();
		if(!(bodyText.contains(text)))
			{	
			throw new Exception("Scenario failed");
			}
	}
	
	//code to fill in multiple text boxes with corresponding values
	public static void fillDetails(WebDriver driver, List<String> formValues) 
	{
		for(int i=0,j=1; i<formValues.size()-1;i+=2,j+=2)
		{
			driver.findElement(By.name(formValues.get(i))).sendKeys(formValues.get(j));
		}
	  		
	}
    //code to wait for a class to be loaded on the page
	public static void waitforClass(WebDriver driver, String className) 
	{
		
		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className(className)));
	}
	
	//code to select an link from dropdown
	public static void select(WebDriver driver, String selectOption) 
	{
		driver.findElement(By.xpath("//a[contains(text(),'"+selectOption+"')]")).click();	
	}
    
	//code to select an option from dropdown
	public static void selectOption(WebDriver driver, String option, String dropdownId) 
	{
		
		Select dropdown = new Select(driver.findElement(By.id(dropdownId)));
		dropdown.selectByVisibleText(option);
				
	}
	
	//code to click on an input with value given
	public static void clickOn(WebDriver driver, String buttonText) {
		
		driver.findElement(By.xpath("//input[contains(@value, '"+buttonText+"')]")).click();		
	}

	
}
