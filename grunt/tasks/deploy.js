module.exports = function (grunt) {
    'use strict';
    grunt.registerTask('deploy', [
        //'express:dev'
        'shell:start_server'
    ]);
};
