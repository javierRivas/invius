module.exports = {
    options: {
        files: [
            'package.json',
            'bower.json'
        ],
        commit: true,
        commitMessage: 'chore(release): v%VERSION%',
        commitFiles: [
            'package.json',
            'bower.json',
            'CHANGELOG.md'
        ],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'v%VERSION% codename(v%VERSION%)',
        push: false,
        pushTo: 'origin'
    }

};
