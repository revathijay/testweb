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

public class RequestBrochure {

	public static void selectFirstModel(WebDriver driver) 
	{
		driver.findElement(By.xpath("//*[@id='container']/div[2]/div[3]/ul/li[1]/a")).click();		
	}

	public static void clickOnBrochure(WebDriver driver) 
	{
		driver.findElement(By.xpath("//*[@id='brochureForm']/div[2]/div[9]/input")).click();	
		WebDriverWait wait = new WebDriverWait(driver,0);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("test-drive")));
	}

}
