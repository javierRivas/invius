module.exports = function (grunt) {
    'use strict';

    grunt.renameTask('watch', 'delta');

    grunt.registerTask('watch', [
        'build',
        'test',
        //'docs',
        'delta'
    ]);

};
