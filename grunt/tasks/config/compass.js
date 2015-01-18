module.exports = {
    build: {
        options: {
            app: 'stand_alone',
            sassPath: '<%= app_files.sass_dir %>',
            cssDir: '<%= build.css %>',
            fontsDir: '<%= build.fonts %>',
            fontsPath: '<%= app_files.assets.fonts %>',
            noLineComments: true,
            //outputStyle: 'compressed',
            environment: 'production'
        }
    }
};
