var mock = require('protractor-http-mock');
var menu = require('../e2e/pages/menu');
var username = element(by.id('username'));
var password = element(by.id('password'));

var mocks =
    [
        {
            request: {
                path: 'api\\/users.*',
                regex: true,
                method: 'GET'
            },
            response: {
                headers: {
                    "link": "</api/users?page=0&size=20>; rel=\"last\",</api/users?page=0&size=20>; rel=\"first\"",
                    "X-Total-Count": 1
                },
                data: [
                    {
                        "login": "system",
                        "firstName": "",
                        "lastName": "System",
                        "email": "system@localhost",
                        "activated": true,
                        "langKey": "en",
                        "authorities": ["ROLE_USER", "ROLE_ADMIN"],
                        "id": "user-0",
                        "createdDate": "2016-05-02T12:48:23.594Z",
                        "lastModifiedBy": null,
                        "lastModifiedDate": "2016-05-02T15:32:44.549Z",
                        "password": null
                    }
                ]
            }
        }
    ];

describe('requests made', function () {

    beforeEach(function () {
        mock(mocks);
        browser.get('/');

        menu.accountMenu.click();
        menu.login.click();

        username.sendKeys('admin');
        password.sendKeys('admin');
        element(by.css('button[type=submit]')).click();
    });

    afterEach(function () {
        mock.teardown();
    });

    it('should load user management', function () {
        var adminMenu = element(by.id('admin-menu'));
        adminMenu.click();
        element(by.css('[ui-sref="user-management"]')).click();

        expect(element.all(by.css('h2')).first().getText()).toMatch(/Users/);
    });

});
