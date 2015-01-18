module.exports = function (grunt) {
    'use strict';

    grunt.registerTask('build', [
        'clean:build',
        'clean:coverage',
        'html2js', // review
        'jsbeautifier:modify',
        'jsbeautifier:verify',
        'jshint',
        'sass:build',
        'copy:build_app_assets',
        //'copy:build_vendor_assets',
        //'copy:build_vendor_fonts',
        //'copy:build_vendor_maps',
        'copy:build_appindex',
        'copy:build_appjs',
        'copy:build_config',
        'copy:build_vendorjs',
        'copy:build_vendorcss',
        'copy:mocks',
        'index:build'
    ]);

};
