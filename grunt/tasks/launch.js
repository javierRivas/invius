module.exports = function (grunt) {
    'use strict';

    var NGINX_CONF_LISTEN_EXP = /listen\s+([^:]+:\d+)\s*(ssl)?\s*;/g;

    function getAddresses() {
        var fs = require('fs');

        if (!fs.existsSync('nginx.conf')) {
            throw new Error('Project does not have a properly configured devserver...');
        }

        var nginxConf = fs.readFileSync('nginx.conf').toString();
        var addresses = {
            http: null,
            https: null
        };
        var match = NGINX_CONF_LISTEN_EXP.exec(nginxConf);

        while (match !== null && addresses.https == null) {

            if (match[2] === undefined) {
                addresses.http = 'http://' + match[1];
            } else {
                addresses.https = 'https://' + match[1];
            }

            match = NGINX_CONF_LISTEN_EXP.exec(nginxConf);
        }

        return addresses;
    }

    grunt.registerTask('launch', 'Launching site on default browser', function () {
        var open = require('open');
        var addresses = getAddresses();

        if (addresses.https !== null) {
            open(addresses.https);
        } else if (addresses.http !== null) {
            open(addresses.http + '/docs');
        } else {
            throw new Error('Project does not have a properly configured devserver...');
        }
    });

};
