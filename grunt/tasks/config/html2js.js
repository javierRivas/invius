module.exports = {

    app: {
        options: {
            base: 'src/js'
        },
        src: ['<%= app_files.tpl %>'],
        dest: '<%= build.root %>/templates-app.js'
    }

};
