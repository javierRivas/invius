module.exports = {

    build_app_assets: {
        files: [{
            src: ['**'],
            dest: '<%= build.assets %>',
            cwd: '<%= app_files.assets %>',
            expand: true
        }]
    },

    build_vendor_assets: {
        files: [{
            src: ['<%= vendor_files.assets %>'],
            dest: '<%= build.root %>/assets/',
            cwd: '.',
            expand: true,
            flatten: true
        }]
    },

    build_vendor_fonts: {
        files: [{
            src: ['<%= vendor_files.fonts %>'],
            dest: '<%= build.root %>/assets/fonts/',
            cwd: '.',
            expand: true,
            flatten: true
        }]
    },

    build_vendor_maps: {
        files: [{
            src: ['<%= vendor_files.maps %>'],
            dest: '<%= build.root %>/',
            cwd: '.',
            expand: true
        }]
    },

    publish_vendor_assets: {
        files: [{
            src: ['<%= vendor_files.publish %>'],
            dest: '<%= build.root %>/',
            cwd: '.',
            expand: true,
            flatten: false
        }]
    },

    build_appindex: {
        files: [{
            src: ['<%= app_files.index %>'],
            dest: '<%= build.root %>/index.html',
            cwd: '.',
            flatten: true
        }]
    },

    build_appjs: {
        files: [{
            src: ['<%= app_files.js %>'],
            dest: '<%= build.root %>/',
            cwd: '.',
            expand: true
        }]
    },

    build_config: {
        files: [{
            src: ['<%= app_files.config %>'],
            dest: '<%= build.root %>/',
            cwd: '.',
            expand: false,
            flatten: true
        }]
    },

    build_vendorjs: {
        files: [{
            src: ['<%= vendor_files.js %>'],
            dest: '<%= build.root %>/',
            cwd: '.',
            expand: true
        }]
    },

    build_vendorcss: {
        files: [{
            src: ['<%= vendor_files.css %>'],
            dest: '<%= build.root %>/',
            cwd: '.',
            expand: true
        }]
    },

    // renames one of the files generated per environment ("-ci", "-local") to the default filename "index.html"
    fix_docs_examples: {
        files: [{
            src: ['**/*-local.html'],
            dest: '<%= build.root %>/docs/examples/',
            cwd: '<%= build.root %>/docs/examples/',
            expand: true,
            rename: function (dest, src) {
                'use strict';
                return dest = dest + src.substring(0, src.indexOf('index-')) + 'index.html';
            }
        }]
    },

    mocks: {
        files: [{
            src: ['<%= mock_files %>'],
            dest: '<%= build.root %>/',
            cwd: '.',
            expand: true
        }]

    }

};
