module.exports = function (grunt) {
    'use strict';

    var buildConfig = require('../build.conf.js');

    grunt.registerTask('devserver', 'Process running nginx', function (target) {

        if (target === 'stop') {
            grunt.log.ok('Stopping nginx...');
            grunt.task.run('nginx:stop');
        } else {
            var nginxUser = process.env.SUDO_USER || process.env.USER;
            grunt.log.ok('Starting nginx with user ' + nginxUser + '...');
            grunt.config.set('nginx.options.globals', ['user ' + nginxUser + ' staff;']);
            grunt.task.run('nginx:start');
        }
    });

};
