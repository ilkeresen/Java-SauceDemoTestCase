package steps;

import com.snapbytes.snaptest.rest.RestClientSteps;
import com.snapbytes.snaptest.service.DictionaryService;
import com.snapbytes.snaptest.sql.SqlSteps;
import com.snapbytes.snaptest.step.CommonSteps;
import com.snapbytes.snaptest.web.WebSteps;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.util.Random;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.slf4j.Logger;import org.slf4j.LoggerFactory;
import steps.login.LoginUsernameEnums;
//import com.google.gson.JsonObject;


public class MySteps {

    private static Logger LOGGER = LoggerFactory.getLogger(MySteps.class);
    private final WebSteps webSteps;
    private final CommonSteps commonSteps;
    private final SqlSteps sqlSteps;
    private final DictionaryService dictionaryService;
    private final RestClientSteps restClientSteps;

    public MySteps(WebSteps webSteps, CommonSteps commonSteps, SqlSteps sqlSteps, RestClientSteps restClientSteps, DictionaryService dictionaryService) {
        this.webSteps = webSteps;
        this.commonSteps = commonSteps;
        this.sqlSteps = sqlSteps;
        this.restClientSteps = restClientSteps;
        this.dictionaryService = dictionaryService;
    }

    @When("^I execute rest service$")
    public void restService(){

        restClientSteps.callRestService("GetAllProductsList");
        Object responseValue = dictionaryService.lookupObject("the response body");
    }

    @When("^I want to click$")
    public void clickParameter(){

        WebDriver driver = webSteps.getDriver();
        driver.findElement(By.xpath("//a[@class='shopping_cart_link']")).click();
    }

    @When("^I want to write randomIntegerCode$")
    public void randomIntegerCode$(){

        int min = 10000; // Minimum
        int max = 99999; // Maximum
        int random_int = (int)Math.floor(Math.random() * (max - min + 1) + min);

        WebDriver driver = webSteps.getDriver();
        /*
         * Burada By id içerisinde ki alınan id dinamik olabilir.
         * sendKeys içerisine sadece int değer yazılamıyor. Mecburen yanına "" boş bir string değer ekleyip yanına +random_int ekledim.
         */
        driver.findElement(By.id("postal-code")).sendKeys(""+random_int);
    }

    @When("^I want to write randomFirstName$")
    public void randomFirstName(){

        String alphabet = "ABCÇDEFGHIİJKLMNOÖPQRSŞTUÜVWXYZabcçdefghıijklmnoöpqrsştuüvwxyz";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        int length = 7;

        for(int i = 0; i < length; i++) {
            int index = random.nextInt(alphabet.length());
            char randomChar = alphabet.charAt(index);
            sb.append(randomChar);
        }

        String randomString = sb.toString();
        WebDriver driver = webSteps.getDriver();
        /*
        * Burada By id içerisinde ki alınan id dinamik olabilir.
        */
        driver.findElement(By.id("first-name")).sendKeys(randomString);
    }

    @When("^I want to write randomLastName$")
    public void randomLastName(){

        String alphabet = "ABCÇDEFGHIİJKLMNOÖPQRSŞTUÜVWXYZabcçdefghıijklmnoöpqrsştuüvwxyz";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        int length = 7;

        for(int i = 0; i < length; i++) {
            int index = random.nextInt(alphabet.length());
            char randomChar = alphabet.charAt(index);
            sb.append(randomChar);
        }

        String randomString = sb.toString();
        WebDriver driver = webSteps.getDriver();
        /*
         * Burada By id içerisinde ki alınan id dinamik olabilir.
         */
        driver.findElement(By.id("last-name")).sendKeys(randomString);
        //System.out.println("Random String is: " + randomString);
        //WebDriver driver = webSteps.getDriver();
        //driver.findElement(By.xpath("//input[@id='last-name']"))
        //this.dictionaryService.putVariable("last name textbox area",randomString);
    }

    @When("^I want to write randomLastName Api$")
    public void randomLastNameApis() throws IOException {

        //TEST APİ İLE İSİM ÇEKME BAŞLANGIÇ
        String url = "https://names.drycodes.com/1?nameOptions=boy_names";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();
        String lastNameString = response.toString();
        System.out.println("Name_Surname = " + lastNameString);
        String lastNameSplit = lastNameString.split("_")[1].toString();
        String lastNameReplace = lastNameSplit.replace("]","").replace("\"","");
        //TEST APİ İLE İSİM ÇEKME BİTİŞ

        WebDriver driver = webSteps.getDriver();
        driver.findElement(By.id("last-name")).sendKeys(lastNameReplace);
    }

    @When("^(?:I)? save (\\w+(?: \\w+)*) single value element$")
     public void saveMultipleValueElement(String firstValue) {
         WebDriver driver = webSteps.getDriver();
         //String savedFirstValue = webSteps.getElementText(firstValue).trim();
         String savedFirstValue = LoginUsernameEnums.standard.value;
         LOGGER.info("First Value : " + savedFirstValue);
         this.dictionaryService.putVariable("saved first value", savedFirstValue);
     }
}