'use strict';
const {panel} = require("../../constants/index");
const {Utils} = require('../../modules/index');

describe('demo test', function () {
    afterEach(function () {
        // Utils.testBrowserLogs();
    });

    it('should load successfully', function () {
        browser.ignoreSynchronization = true;
        browser.get(panel.webPage);
        expect(browser.getCurrentUrl()).toBe(panel.webPage);
    });
    it('should browse to user registration', function () {
        let loginUrl = $$(panel.loginBtn).first();
        Utils.smartWait(1, loginUrl);
        loginUrl.click();
        let newCustomerSignUp = $(panel.newCustomer);
        Utils.smartWait(1, newCustomerSignUp);
        newCustomerSignUp.click();
    });
    it('should register new user', function () {

        let name = Utils.stringGen(10);
        let passw = Utils.stringGen(12, true);
        let email = $(panel.email);
        let pw = $(panel.password);
        let pw2 = $(panel.passwordRe);
        let registerBtn = $(panel.regBtn);
        Utils.smartWait(1, email);
        email.sendKeys(name + '@email.com');
        console.log(name);
        console.log(passw);

        pw.sendKeys(passw);
        pw2.sendKeys(passw);
        registerBtn.click();


    });

    it('should close dialog ', function () {
        let closeBtn = $$(panel.dismiss).first();
        Utils.smartWait(1, closeBtn);
        closeBtn.click();
    });
    it('should browse to travel categ', function () {
        let travelCateg = Utils.allByTxt(panel.categ, 'Reise');

        Utils.smartWait(1, travelCateg);
        travelCateg.click();
    });
    it('should search', function () {
        let From = $$(panel.from).last();
        let to = $$(panel.to).last();

        Utils.smartWait(1, From);
        From.click();
        Utils.slowType(From, 'Kreta', 50);
        Utils.smartWait(1000);

        From.sendKeys(protractor.Key.ENTER);
        to.click();
        Utils.slowType(to, 'Stuttgart', 50);
        Utils.smartWait(1000);

        to.sendKeys(protractor.Key.ENTER);

        let GoDate = $$(panel.dateIcon).first();
        let ToDate = $$(panel.dateIcon).last();
        GoDate.click();
        Utils.smartWait(1000);

        ToDate.click();
        let duration = $(panel.duration);
        duration.click();
        let durationshort = $(panel.exact);
        Utils.smartWait(1, durationshort);
        durationshort.click();
        let searchBtn = $(panel.searchBtn);
        searchBtn.click();

        Utils.smartWait(10000);
    });


});
