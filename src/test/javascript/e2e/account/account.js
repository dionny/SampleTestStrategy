// 'use strict';
//
// var menu = require('../pages/menu.js');
//
// describe('account', function () {
//
//     var username = element(by.id('username'));
//     var password = element(by.id('password'));
//
//     beforeAll(function () {
//         browser.get('/');
//     });
//
//     it('should fail to login with bad password', function () {
//         expect(element.all(by.css('h1')).first().getText()).toMatch(/Welcome, Java Hipster!/);
//         menu.accountMenu.click();
//         menu.login.click();
//
//         username.sendKeys('admin');
//         password.sendKeys('foo');
//         element(by.css('button[type=submit]')).click();
//
//         var error = $('.alert-danger').getText();
//         expect(error).toMatch(/Failed to sign in!/);
//     });
//
//     it('should login successfully with admin account', function () {
//         expect(element.all(by.css('h1')).first().getText()).toMatch(/Sign in/);
//
//         username.clear().sendKeys('admin');
//         password.clear().sendKeys('admin');
//         element(by.css('button[type=submit]')).click();
//
//         expect(element(by.css('.alert-success')).getText()).toMatch(/You are logged in as user "admin"/);
//     });
//
//     it('should be able to update settings', function () {
//         menu.accountMenu.click();
//         element(by.css('[ui-sref="settings"]')).click();
//
//         expect(element(by.css('h2')).getText()).toMatch(/User settings for \[admin\]/);
//         element(by.css('button[type=submit]')).click();
//
//         var message = $('.alert-success').getText();
//         expect(message).toMatch(/Settings saved!/);
//     });
//
//     it('should be able to update password', function () {
//         menu.accountMenu.click();
//         element(by.css('[ui-sref="password"]')).click();
//
//         expect(element.all(by.css('h2')).first().getText()).toMatch(/Password for \[admin\]/);
//         password.sendKeys('newpassword');
//         element(by.id('confirmPassword')).sendKeys('newpassword');
//         element(by.css('button[type=submit]')).click();
//
//         var message = $('.alert-success').getText();
//         expect(message).toMatch(/Password changed!/);
//         menu.accountMenu.click();
//         menu.logout.click();
//
//         menu.accountMenu.click();
//         menu.login.click();
//
//         username.sendKeys('admin');
//         password.sendKeys('newpassword');
//         element(by.css('button[type=submit]')).click();
//
//         menu.accountMenu.click();
//         element(by.css('[ui-sref="password"]')).click();
//         // change back to default
//         password.clear().sendKeys('admin');
//         element(by.id('confirmPassword')).clear().sendKeys('admin');
//         element(by.css('button[type=submit]')).click();
//     });
//
//     afterAll(function () {
//         menu.accountMenu.click();
//         menu.logout.click();
//     });
// });
