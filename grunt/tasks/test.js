module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('test', [
        'shell:publish_coverage',
        'karma:unit'
    ]);

};
