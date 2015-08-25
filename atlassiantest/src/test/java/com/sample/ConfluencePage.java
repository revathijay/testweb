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

public class ConfluencePage {
	
	
	public ConfluencePage() 
	{
		
	}
	
	
	
	public ConfluencePage createNewPage(WebDriver driver, String title, String space) 
	{
		
		driver.findElement(By.id("space-menu-link")).click();
		driver.findElement(By.xpath("//a[contains(text(),'"+space+"')]")).click();	
		driver.findElement(By.id("quick-create-page-button")).click();
		driver.findElement(By.name("title")).sendKeys(title);
		driver.findElement(By.xpath("//button[contains(@value, 'Save')]")).click();		
		return this;
	}

	
	public UserManagementPage goToUserManagementPage(WebDriver driver) 
	{
		
		
		driver.findElement(By.id("admin-menu-link")).click();
		driver.findElement(By.id("admin-management-link")).click();
		return new UserManagementPage();
	}
	
	
	public ConfluencePage clickonSpecificPage(WebDriver driver, String pageTitle) 
	{
		
		
		driver.findElement(By.xpath("//a[contains(text(),'"+pageTitle+"')]")).click();	
		return new ConfluencePage();
	}
	
	
	public ConfluencePage applyRestrictions(WebDriver driver, String restrictionType, String userName) 
	{
		
		driver.findElement(By.id("action-menu-link")).click();
		driver.findElement(By.id("action-page-permissions-link")).click();
		driver.findElement(By.xpath("//a[contains(@href,\"javascript:void(0)\")]")).click();
		Select dropdown = new Select(driver.findElement(By.id("page-restrictions-dialog-selector")));


		dropdown.selectByVisibleText("Edit restrictions");
		
		driver.findElement(By.id("s2id_autogen2")).sendKeys(userName);

		WebDriverWait wait = new WebDriverWait(driver, 15);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("select2-result-selectable")));
		
		List<WebElement> listOfSpans = driver.findElements(By.cssSelector(".select2-results li"));
		for(WebElement li : listOfSpans) {
		    String text = li.getText();
		    System.out.println(text);
		    if(text.equals(userName)) {
		    	li.click();
		    	//Select dropdown1 = new Select(driver.findElement(By.id("page-restrictions-permission-selector")));
				//dropdown1.selectByVisibleText(restrictionType);
				driver.findElement(By.id("page-restrictions-add-button")).click();
				driver.findElement(By.id("page-restrictions-dialog-save-button")).click();
			
		        break;
		    }
		    else{
		    	 throw new IllegalStateException("no user found");
		    }
		}
		return this;
		
	}
	
	
	
	
	
	
}