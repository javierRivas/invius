module.exports = {

    build: {
        src: ['<%= vendor_files.less %>', '<%= app_files.less %>'],
        dest: '<%= build.root %>/assets/css/motherstore.css',
        options: {
            compress: false,
            sourceMap: true,
            dumpLineNumbers: 'all',
            strictMath: true,
            strictImports: true
        }
    },

    compile: {
        src: ['<%= app_files.less %>'],
        dest: '<%= less.build.dest %>',
        options: {
            compress: true,
            cleancss: true,
            strictMath: true,
            strictImports: true
        }
    }

};
