package com.sample;

import java.util.concurrent.TimeUnit;

import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.runtime.ScenarioImpl;

public class CompareModels {

	public static void fillInModelDetails(WebDriver driver, String model1, String model2, String carType) {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("carTitle")));
		driver.findElement(By.cssSelector(".vehicle[rel="+carType+"]")).click();
		driver.findElement(By.cssSelector("input[rel='"+model1+"']")).click();
		driver.findElement(By.cssSelector("input[rel='"+model2+"']")).click();
	}

	public static void fillinPostCode(WebDriver driver, String postcode) {
		
		driver.findElement(By.cssSelector(".rowElemFieldForm.clearfix input[name='postcode']")).sendKeys(postcode);
	}

	

}
