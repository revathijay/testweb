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

	public static void changeGradeFSport(WebDriver driver)
	{
		WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("chevronItem")));
		driver.findElement(By.xpath("//div[contains(text(), 'luxury')]")).click();	
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("fromPrice")));
		driver.findElement(By.xpath("//div[contains(text(), '+ ADD $8,330')]")).click();
		
	}

	public static void changeColour(WebDriver driver, String colour) {
		
		WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("navColours")));
		driver.findElement(By.cssSelector("#navColours a")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("ColourListSection")));
		//List<WebElement> Colours=driver.findElements(By.cssSelector(".premiumStandard> ul > li > a"));
		driver.findElement(By.xpath("//*[@id='build-and-price']/div[1]/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[2]/ul/li[4]/a")).click();
		//WebElement requiredColour = colourList.get(3);
		//requiredColour.click();
		
	}

	public static void clickOnReview(WebDriver driver) {
		
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("chevronItemReview")));
		driver.findElement(By.xpath("//*[@id='nav']/a/div/div[1]")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("requestTestDrive")));
				
	}

}
