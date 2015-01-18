module.exports = {
    build: {
        files: [{
            //expand: true,
            //cwd: 'src',
            src: '<%= app_files.sass %>',
            dest: '<%= build.css %>',
            //ext: '.css'
        }]
    }
};
