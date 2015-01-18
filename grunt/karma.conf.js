/*jshint indent:false */
var buildConfig = require('./build.conf.js');

module.exports = function (karma) {
    'use strict';

    karma.set({
        /**
         * From where to look for files, starting with the location of this file.
         */
        basePath: './../',

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: buildConfig.vendor_files.js
            .concat(buildConfig.test_files.js)
            .concat(buildConfig.test_files.unit)
            .concat([{
                pattern: 'build/templates-app.js',
                included: true
            }, {
                pattern: 'src/js/app.js',
                included: false
            }, {
                pattern: 'src/js/**/*.js',
                included: true
            }]),

        exclude: [],
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-coverage', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher'],
        preprocessors: {
            'src/js/**/*.js': 'coverage'
        },

        /**
         * How to report, by default.
         */
        reporters: ['dots', 'coverage'],
        //logLevel: karma.LOG_DEBUG,
        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        // port: 9018,
        // runnerPort: 9100,

        urlRoot: '/',

        /**
         * Disable file watching by default.
         */
        autoWatch: false,
        client: {
            captureConsole: true
        },

        /**
         * The list of browsers to launch to test on. This includes only "Firefox" by
         * default, but other browser names include:
         * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
         *
         * Note that you can also use the executable name of the browser, like "chromium"
         * or "firefox", but that these vary based on your operating system.
         *
         * You may also leave this blank and manually navigate your browser to
         * http://localhost:9018/ when you're running tests. The window/tab can be left
         * open and the tests will automatically occur there during the build. This has
         * the aesthetic advantage of not launching a browser every time you save.
         */
        singleRun: false,
        browsers: [
            'PhantomJS',
            //'Chrome'
            //,'Firefox'
            //,'ChromeCanary'
        ]
    });
};
