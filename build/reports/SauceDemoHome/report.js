$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/SauceDemoHome.feature");
formatter.feature({
  "name": "Main Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "WebStepsProxy.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open SauceDemoHome page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebStepsProxy.openPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "True Login Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ilker"
    }
  ]
});
formatter.step({
  "name": "I see user name textbox area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click user name textbox area",
  "keyword": "And "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type \"standard_user\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonUiStepsProxy.typeText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see password textbox area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill:",
  "rows": [
    {
      "cells": [
        "password textbox area",
        "secret_sauce"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.fill(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see login button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see add to cart button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click add to cart button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see click basket button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click basket button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see click remove button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click remove button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see click all items button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click all items button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see add to cart button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click add to cart button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see click basket button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click basket button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see click checkout button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click checkout button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click first name textbox area",
  "keyword": "And "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to write randomFirstName",
  "keyword": "And "
});
formatter.match({
  "location": "MySteps.randomFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 3 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepsProxy.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click last name textbox area",
  "keyword": "And "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to write randomLastName Api",
  "keyword": "And "
});
formatter.match({
  "location": "MySteps.randomLastNameApis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 3 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepsProxy.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click postal code name textbox area",
  "keyword": "And "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to write randomIntegerCode",
  "keyword": "And "
});
formatter.match({
  "location": "MySteps.randomIntegerCode$()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 3 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepsProxy.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see click continue button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click continue button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see click finish button area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click finish button area",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonUiStepsProxy.clickElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see finish complate message area element",
  "keyword": "When "
});
formatter.match({
  "location": "CommonUiStepsProxy.seeElement(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 5 seconds",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepsProxy.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});