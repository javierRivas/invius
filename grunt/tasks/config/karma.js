module.exports = {

    options: {
        configFile: 'grunt/karma.conf.js'
    },

    unit: {
        singleRun: true,
        // overriding this value for development unit testing.
        // the default seems to be FALSE and not TRUE as stated in http://karma-runner.github.io/0.12/config/configuration-file.html
        client: {
            captureConsole: true
        }
    },

    debug: {
        singleRun: false,
        browsers: ['Chrome']
    },

    continuous: {
        logLevel: 'error',
        client: {
            captureConsole: false
        },
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: '../coverage/'
            }, {
                type: 'cobertura'
            }],
        },
        plugins: ['karma-jasmine', 'karma-coverage', 'karma-phantomjs-launcher', 'karma-junit-reporter'],
        reporters: ['dots', 'coverage', 'junit'],
        singleRun: true
    }

};
