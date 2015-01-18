module.exports = function (grunt) {
    'use strict';

    var buildConfig = require('../build.conf.js');

    grunt.registerMultiTask('index', 'Process index.html template', function () {
        var filterForJSTemplate = function (files) {
                return files.filter(function (file) {
                    return file.match(/templates\-\w+.*\.js$/);
                });
            },
            filterForCSS = function (files) {
                return files.filter(function (file) {
                    return file.match(/\.css$/);
                });
            },
            filterForJs = function (files) {
                return files.filter(function (file) {
                    return file.match(/js\/\w+\/.*\.js$/);
                });
            },
            dirRE = new RegExp('^(' + grunt.config('build.root') + '|' + grunt.config('production.root') + ')\/', 'g'),
            cssFiles = filterForCSS(this.filesSrc).map(function (file) {
                return file.replace(dirRE, '');
            }),
            templateFiles = filterForJSTemplate(this.filesSrc).map(function (file) {
                return file.replace(dirRE, '');
            }),
            jsFiles = filterForJs(this.filesSrc).map(function (file) {
                return file.replace(dirRE, '');
            });

        grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
            process: function (contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: buildConfig.vendor_files.js.concat(templateFiles).concat(jsFiles),
                        styles: cssFiles,
                        version: grunt.config('pkg.version')
                    }
                });
            }
        });

    });

};
