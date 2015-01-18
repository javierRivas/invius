module.exports = {

    build: {
        dir: '<%= build.root %>',
        src: [
            '<%= vendor_files.js %>',
            '<%= build.root %>/src/**/*.js',
            '<%= html2js.app.dest %>',
            '<%= vendor_files.css %>'
        ]
    }

};
