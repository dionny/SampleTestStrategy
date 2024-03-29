var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
var JasmineReporters = require('jasmine-reporters');

var prefix = 'src/test/javascript/'.replace(/[^/]+/g,'..');

exports.config = {
    seleniumServerJar: prefix + 'node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
    chromeDriver: prefix + 'node_modules/protractor/selenium/chromedriver',
    allScriptsTimeout: 20000,

    suites: {
        account: ['./e2e/account/*.js'],
        admin: ['./e2e/admin/*.js'],
        entity: ['./e2e/entities/*.js'],
        component: ['./component/*.js']
    },

    capabilities: {
        'browserName': 'firefox',
        'phantomjs.binary.path': require('phantomjs-prebuilt').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },

    directConnect: true,

    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    mocks: {
        dir: 'mocks'
    },

    onPrepare: function() {
        require('protractor-http-mock').config = {
            rootDirectory: __dirname,
            protractorConfig: 'protractor.conf.js' // default value: 'protractor-conf.js'
        };

        // Disable animations so e2e tests run more quickly
        var disableNgAnimate = function() {
            angular
                .module('disableNgAnimate', [])
                .run(['$animate', function($animate) {
                    $animate.enabled(false);
                }]);
        };

        var disableCssAnimate = function() {
            angular
                .module('disableCssAnimate', [])
                .run(function() {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = 'body * {' +
                        '-webkit-transition: none !important;' +
                        '-moz-transition: none !important;' +
                        '-o-transition: none !important;' +
                        '-ms-transition: none !important;' +
                        'transition: none !important;' +
                        '}';
                    document.getElementsByTagName('head')[0].appendChild(style);
                });
        };

        browser.addMockModule('disableNgAnimate', disableNgAnimate);
        browser.addMockModule('disableCssAnimate', disableCssAnimate);

        browser.driver.manage().window().setSize(1280, 1024);
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            savePath: 'build/reports/e2e',
            consolidateAll: false
        }));
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: "build/reports/e2e/screenshots"
        }));
    }
};
