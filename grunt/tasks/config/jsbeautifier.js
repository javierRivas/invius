module.exports = {

    modify: {
        src: [
            '<%= app_files.js %>',
            '<%= test_files.unit %>',
            '<%= grunt_files %>'
        ],
        options: {
            config: '.jsbeautifyrc'
        }
    },

    verify: {
        src: [
            '<%= app_files.js %>',
            '<%= test_files.unit %>',
            '<%= grunt_files %>'
        ],
        options: {
            mode: 'VERIFY_ONLY',
            config: '.jsbeautifyrc'
        }
    }

};
