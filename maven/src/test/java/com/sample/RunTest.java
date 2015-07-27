package com.sample;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/com/sample/HomePageMobile.feature",
				plugin = {
						"pretty",
						"html:target/cucumber",
						"json:target_json/cucumber.json",
						"junit:taget_junit/cucumber.xml"
						}

)
public class RunTest {
// This class will be empty
}