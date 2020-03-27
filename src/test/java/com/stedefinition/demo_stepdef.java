package com.stedefinition;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.stepdefinition.firefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class demo_stepdef {
	WebDriver driver;
	//To launch browser
	@Given("^the user launched the chromebrowser$")
	public void the_user_launched_the_chromebrowser() throws Throwable {
		String browser = "chrome";
		if(browser.equalsIgnoreCase("chrome"))
		{
	 System.setProperty("webdriver.chrome.driver", "Drivers\\chromedriver.exe");
	 driver=new ChromeDriver();
	 driver.manage().window().maximize();//To maximize the window
	}
		else if(browser.equalsIgnoreCase("firefox"))//To launch firefox browser
		{
	  System.setProperty("webdriver.gecko.driver", "Drivers\\geckodriver.exe");
	  driver=new firefoxDriver();
	  driver.manage().window().maximize();//To maximize the window
		}
		}
	 //To open demoblaze application
	@When("^the user open the Demoblaze website$")
	public void the_user_open_the_Demoblaze_website() throws Throwable {
		driver.get("https://demoblaze.com/index.html");
		System.out.println(driver.getTitle());
	    
	}
    //To enter login
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"login2\"]")).click();
    
	}
    //To enter login details username and password
	@Then("^the user enters the \"([^\"]*)\" and \"([^\"]*)\" clicks on login button$")
	public void the_user_enters_the_username_and_password_clicks_on_login_button(String username,String password) throws Throwable {
		driver.findElement(By.id("loginusername")).sendKeys(username);
		driver.findElement(By.id("loginpassword")).sendKeys(password);
		WebElement d=driver.findElement(By.xpath("//*[@id=\"logInModal\"]//div//div//div[3]//button[2]"));
		d.click();	    
	}
    //To launch chrome browser
	@Given("^the user launched chromebrowser$")
	public void the_user_launched_chromebrowser1() throws Throwable {
		the_user_launched_the_chromebrowser();
	    
	}
   //To launch application
	@When("^the user open Demoblaze$")
	public void the_user_open_Demoblaze() throws Throwable {
		driver.get("https://demoblaze.com/index.html");
		System.out.println(driver.getTitle());	    
	}
    //The user used to select the products
	@Then("^the user selects the Product$")
	public void the_user_selects_the_Product() throws Throwable {
	  	WebElement a= driver.findElement(By.xpath("//*[@id=\"tbodyid\"]//div[1]//div//div"));
		a.click();
	}
    //adding products to cart
	@Then("^the product is added to cart$")
	public void the_product_is_added_to_cart() throws Throwable {
	  		WebElement b=driver.findElement(By.xpath("//*[@id=\"tbodyid\"]//div[2]//div//a"));
		b.click();
		TakesScreenshot ts=((TakesScreenshot)driver);
		File source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File("Screenshots\\addcart.jpg"));
	}
    //To launch browser
	@Given("^user launches chromebrowser$")
	public void user_launches_chromebrowser2() throws Throwable {
		the_user_launched_the_chromebrowser();

	    
	}
    //To open application
	@When("^the DemoBlaze application is opened$")
	public void the_DemoBlaze_application_is_opened() throws Throwable {

		driver.get("https://demoblaze.com/index.html");
		System.out.println(driver.getTitle());  
	}
    //To click on contact details page
	@Then("^the user clicks on Contact$")
	public void the_user_clicks_on_Contact() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"navbarExample\"]/ul/li[2]/a")).click();    
	}
    // To enter the contact details
	@Then("^the user enters the details$")
	public void the_user_enters_the_details() throws Throwable {

		driver.findElement(By.id("recipient-email")).sendKeys("ramya@gmail.com");
		driver.findElement(By.id("recipient-name")).sendKeys("Ramya");
		driver.findElement(By.id("message-text")).sendKeys("hello");	    
	}  
   //To click on the send button
	@Then("^the user clicks the send button\\.$")
	public void the_user_clicks_the_send_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"exampleModal\"]/div/div/div[3]/button[2]")).click();
	}
    //To launch browser
	@Given("^the user Launces the ChromeBrowser$")
	public void the_user_Launces_the_ChromeBrowser() throws Throwable {
		the_user_launched_the_chromebrowser();
	    
	}
    //To open application
	@When("^the user have open the demoBlazeApplication$")
	public void the_user_have_open_the_demoBlazeApplication() throws Throwable {
		driver.get("https://demoblaze.com/index.html");
		System.out.println(driver.getTitle());  
	    
	}
    //moving to next page
	@Then("^user will click the nextpage$")
	public void user_will_click_the_nextpage() throws Throwable {

		WebElement a=driver.findElement(By.id("next2"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("window.scrollBy(0,8000)");
		driver.findElement(By.xpath("//html//body//div[5]//div//div[2]//form//ul//li[2]//button")).click();
		
	
		
	}
    //selecting the product
	@Then("^the user selects the product$")
	public void the_user_selects_the_product() throws Throwable {
	  		driver.findElement(By.xpath("//*[@id=\"tbodyid\"]/div[4]/div/div/h4/a")).click();

	}



}
