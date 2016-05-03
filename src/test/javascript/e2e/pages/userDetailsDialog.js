module.exports = {
    error: element(by.css('pre')),
    login: element(by.model('vm.user.login')),
    firstName: element(by.model('vm.user.firstName')),
    lastName: element(by.model('vm.user.lastName')),
    email: element(by.model('vm.user.email')),
    cancel: element(by.css('[ng-click*="vm.clear"]')),
    save: element(by.css('button[type=submit]'))
};
