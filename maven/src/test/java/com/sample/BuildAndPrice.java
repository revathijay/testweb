package com.sample;

import java.util.List;
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


public class BuildAndPrice {

	//code to change the grade to sports ---require changes if page changes
	public static void changeGradeFSport(WebDriver driver)
	{
		WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("chevronItem")));
		driver.findElement(By.xpath("//div[contains(text(), 'luxury')]")).click();	
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("fromPrice")));
		driver.findElement(By.xpath("//div[contains(text(), '+ ADD $8,330')]")).click();
		
	}

	//code to change the colour ---require changes if page changes
	public static void changeColour(WebDriver driver, String colour) throws InterruptedException {
		
		WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("navColours")));
		driver.findElement(By.cssSelector("#navColours a")).click();
		WebDriverWait wait1 = new WebDriverWait(driver,50);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(By.className("ColourListSection")));
		wait1.until(ExpectedConditions.visibilityOfElementLocated(By.className("premiumStandard")));
		driver.findElement(By.xpath("//div/ul/li/a[contains(@style, 'background-color: rgb(88, 0, 2)')]")).click();	
		//driver.findElement(By.xpath("//*[@id='build-and-price']/div[1]/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[2]/ul/li[4]/a")).click();

		
	}
	
    //code to click on review
	public static void clickOnReview(WebDriver driver) {
		
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("chevronItemReview")));
		driver.findElement(By.xpath("//*[@id='nav']/a/div/div[1]")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("requestTestDrive")));
				
	}

}
