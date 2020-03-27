package com.runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="src/main/resources/Feature/demoblaze.feature",//path of feature file
		glue = {"com\\stedefinition"},//path of stepdefinition file
		plugin = {"pretty","html:test-output","json:json_output/cucmber.json","junit:junit_xml/cucumber.xml","com.cucumber.listener.ExtentCucumberFormatter:output/report.html"},//reports generated
		monochrome=true,//display console output in readable format
		strict=true,//checking if any step is not defined in stepdefinition file
		dryRun=false// mapping between feature and stepdefinition file
)
		
public class runner {

}
