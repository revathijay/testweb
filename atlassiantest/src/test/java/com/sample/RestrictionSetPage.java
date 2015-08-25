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

public class RestrictionSetPage {
	
	//set restriction to the user
	public RestrictionSetPage selectRestrictionViewOption(WebDriver driver) 
	{
		
		if(!(driver.findElement(By.cssSelector("a .select2-chosen")).getText()).contains("Edit restrictions"))
		  {
			driver.findElement(By.xpath("//a[contains(@href,\"javascript:void(0)\")]")).click();	 
			Select dropdown = new Select(driver.findElement(By.id("page-restrictions-dialog-selector")));
			dropdown.selectByVisibleText("Edit restrictions");
		  }
		return this;
	}
	
	
	public boolean assertUser(WebDriver driver,String userName) {
		
		driver.findElement(By.id("s2id_autogen2")).sendKeys(userName);
		WebDriverWait wait = new WebDriverWait(driver,15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("select2-result-selectable")));
		List<WebElement> listOfSpans = driver.findElements(By.cssSelector(".select2-results li"));
		for(WebElement li : listOfSpans) 
		{
		    if(li.getText().equals(userName)) 
		    {
		    	li.click();
		    	return true;
		    }
		    
		}
		return false;
	}
	
	public ConfluencePage setrestrictions(WebDriver driver) {
		
		driver.findElement(By.id("page-restrictions-add-button")).click();
		driver.findElement(By.id("page-restrictions-dialog-save-button")).click();
	  
			
			return new ConfluencePage();
		}
		
	}
	
