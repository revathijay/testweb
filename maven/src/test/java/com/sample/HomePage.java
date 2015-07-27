package com.sample;

import java.util.concurrent.TimeUnit;

import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.ScenarioImpl;

public class HomePage {
	public static void i_am_in_the_home_page(WebDriver driver)
	{
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); 
		driver.get("http://www.lexus.com.au/");
	}

	public static void i_am_in_the_mobile_home_page(WebDriver driver) {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS); 
		driver.manage().window().setSize(new Dimension(320,480));
		driver.get("http://m.lexus.com.au/");
		
		
	}
		
	
}
