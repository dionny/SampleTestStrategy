var mock = require('protractor-http-mock');
var mocks = require('../component/userMocks');
var menu = require('../e2e/pages/menu');
var login = require('../e2e/pages/loginDialog');
var userAdmin = require('../e2e/pages/userAdmin');
var userDialog = require('../e2e/pages/userDetailsDialog');

describe('user management', function () {

    beforeAll(function () {
        mock([mocks.getUsers]);
        browser.get('/');

        menu.accountMenu.click();
        menu.login.click();

        login.username.sendKeys('admin');
        login.password.sendKeys('admin');
        login.submit.click();
    });

    beforeEach(function () {
        browser.ignoreSynchronization = false;

        menu.home.click();
        menu.adminMenu.click();
        menu.userManagement.click();
    });

    afterEach(function () {
        mock.remove([mocks.createUserBadRequest, mocks.createUserInternalError]);
    });

    afterAll(function () {
        mock.teardown();
    });

    it('should load users when viewing user management', function () {
        expect(userAdmin.header.getText()).toMatch(/Users/);
        expect(userAdmin.users.count()).toBe(1);
        expect(userAdmin.users.row(0).id.getText()).toMatch(/user-0/);
        expect(userAdmin.users.row(0).login.getText()).toMatch(/system/);
        expect(userAdmin.users.row(0).email.getText()).toMatch(/system@localhost/);

        browser.pause();
    });

    it('should display error message on bad request', function () {
        mock.add([mocks.createUserBadRequest]);

        userAdmin.newUser.click();

        userDialog.login.sendKeys('abc');
        userDialog.firstName.sendKeys('abc');
        userDialog.lastName.sendKeys('abc');
        userDialog.email.sendKeys('abc@abc');
        userDialog.save.click();

        browser.ignoreSynchronization = true;
        expect(userDialog.error.getText()).toMatch(/Unable to process the transaction./);

        userDialog.cancel.click();
    });

    it('should display error message on internal error', function () {
        mock.add([mocks.createUserInternalError]);

        userAdmin.newUser.click();

        userDialog.login.sendKeys('abc');
        userDialog.firstName.sendKeys('abc');
        userDialog.lastName.sendKeys('abc');
        userDialog.email.sendKeys('abc@abc');
        userDialog.save.click();

        browser.ignoreSynchronization = true;
        expect(userDialog.error.getText()).toMatch(/Unable to process the transaction./);

        userDialog.cancel.click();
    });

});
