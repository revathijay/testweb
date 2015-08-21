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
	
     
     
    
	@After public void close()
	{
		driver.manage().deleteAllCookies();
		driver.close();
	}
	
}
