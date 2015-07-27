package com.sample;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.it.Data;
import cucumber.runtime.ScenarioImpl;

public class RequestTestDrive {

	public static void selectFirstModel(WebDriver driver) 
	{
	   //driver.findElement(By.cssSelector("ul li a .txt")).click();
	   driver.findElement(By.xpath("//*[@id='testDriveForm']/div[1]/div[2]/ul/li[1]/a")).click();		
	}


	public static void fillLocationTime(WebDriver driver, String postCode) 
	{
		driver.findElement(By.xpath("//*[@id='container']/div[2]/div/div[2]/div[3]/div/h4/a")).click();
		driver.findElement(By.className("postcodeSearch")).clear();
		driver.findElement(By.className("postcodeSearch")).sendKeys(postCode);
		driver.findElement(By.xpath("/html/body/ul/li[1]/a")).click();
		
	}

	public static void clickOnRequest(WebDriver driver) 
	{
		driver.findElement(By.xpath("//*[@id='testDriveForm']/div[3]/div[3]/div[1]/div/div[5]/input")).click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("printDealerDetails")));
	}

	public static void selectYourDetails(WebDriver driver) 
	{
		driver.findElement(By.xpath("//*[@id='container']/div[2]/div/div[2]/div[2]/div/h4/a")).click();
	}

	
		

	
}
