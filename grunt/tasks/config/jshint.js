module.exports = {

    src: [
        '<%= app_files.js %>'
    ],

    test: [
        '<%= test_files.unit %>'
    ],

    gruntfiles: [
        '<%= grunt_files %>'
    ],

    config: [
        '<%= app_files.config %>'
    ],

    locale: [
        '<%= app_files.locale.src %>'
    ],

    options: {
        jshintrc: '.jshintrc'
    }

};
