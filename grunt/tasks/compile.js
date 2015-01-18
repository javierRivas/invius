module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('compile', [
        'build',
        'copy:compile_assets',
        'angularamd:compile',
        'concat:compile_js',
        'uglify'
    ]);

};
