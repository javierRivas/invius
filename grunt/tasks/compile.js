module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('compile', [
        'build',
        'copy:compile_assets',
        'concat:compile_js',
        'uglify'
    ]);

};
