module.exports = {

    compile_js: {

        options: {
            banner: '<%= meta.banner %>'
        },

        src: [
            '<%= html2js.app.dest %>',
            '<%= app_files.js %>'
        ],

        dest: '<%= production.root %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
    }

};
