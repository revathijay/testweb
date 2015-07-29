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


public class BuildAndPrice {

	public static void changeGradeFSport(WebDriver driver)
	{
		WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("chevronItem")));
		driver.findElement(By.xpath("//*[@id='navGrade']/a/div/div/div[1]")).click();
		driver.findElement(By.xpath("//*[@id='build-and-price']/div[1]/div[1]/div[3]/div/div/div[2]/div[3]/ul/li[2]/a/div/div[1]/div/div[3]")).click();
	}

	public static void changeColour(WebDriver driver, String colour) {
		driver.findElement(By.xpath("//*[@id='navColours']/a/div/div/div[1]/div[1]/div")).click();
		WebDriverWait wait = new WebDriverWait(driver,50);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("ColourListSection")));
		driver.findElement(By.xpath("//*[@id='build-and-price']/div[1]/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[2]/ul/li[4]/a")).click();
		
	}

	public static void clickOnReview(WebDriver driver) {
		
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("chevronItemReview")));
		driver.findElement(By.xpath("//*[@id='nav']/a/div/div[1]")).click();
		WebDriverWait wait1 = new WebDriverWait(driver,30);
		wait1.until(ExpectedConditions.visibilityOfElementLocated(By.id("requestTestDrive")));
		//driver.findElement(By.className(".chevronItemReview")).click();
		
	}

}
