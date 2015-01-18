module.exports = {

    /**
     * By default, we want the Live Reload to work for all tasks; this is
     * overridden in some tasks (like this file) where browser resources are
     * unaffected. It runs by default on port 35729, which your browser
     * plugin should auto-detect.
     */
    options: {
        livereload: false
    },

    /**
     * When the Gruntfile changes, we just want to lint it. In fact, when
     * your Gruntfile changes, it will automatically be reloaded!
     */
    gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfiles'],
        options: {
            livereload: false
        }
    },

    /**
     * When our JavaScript source files change, we want to lint them and then run our unit tests.
     */
    jssrc: {
        files: [
            '<%= app_files.js %>'
        ],
        tasks: ['jshint:src', 'karma:unit', 'copy:build_appjs' /*, 'docs'*/ ]
    },

    /**
     * When our Config source files change, we want to lint them and then re-publish them to the build.
     */
    config: {
        files: ['<%= app_files.config %>'],
        tasks: ['jshint:config', 'copy:build_config']
    },

    /**
     * When assets are changed, copy them. Note that this will *not* copy new
     * files, so this is probably not very useful.
     */

    assets: {
        files: ['src/assets/**/*'],
        tasks: ['copy:build_app_assets']
    },

    /**
     * When index.html changes, we need to compile it.
     */
    html: {
        files: ['<%= app_files.html %>'],
        tasks: ['index:build']
    },

    /**
     * When our templates change, we only rewrite the template cache.
     */
    tpls: {
        files: [
            '<%= app_files.tpl %>'
        ],
        tasks: ['html2js']
    },

    // watching less files
    scss: {
        files: ['**/*.scss'],
        tasks: ['sass:build']
    },

    /**
     * When a JavaScript unit test file changes, we only want to lint it and
     * run the unit tests. We don't want to do any live reloading.
     */
    jsunit: {
        files: [
            '<%= app_files.jsunit %>'
        ],
        tasks: ['jshint:test', 'karma:unit'],
        options: {
            livereload: false
        }
    },

    mocks: {
        files: ['<%= mock_files %>'],
        tasks: ['copy:mocks']
    },

    /*
     * when working on a library, we need to compile in order to avoid linking every time on build
     */
    vendor: {
        files: ['<%= vendor_files.js %>', '<%= vendor_files.css %>'],
        tasks: ['karma:unit', 'less:build', 'copy:build_vendorjs', 'copy:build_vendorcss']
    }

};
