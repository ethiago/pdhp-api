
var convict = require('convict');

var config = convict({
    server: {
        port: {
            doc: "The port to bind.",
            format: "port",
            env: "PORT",
            arg: "port"
        }
    },
    db:{
        connectionString: {
            doc: "Database configuration to connection",
            format: '*',
            default: 'mysql://pdhpapi:pass@localhost:3306/pdhp',
            env: "DATABASE_URL",
            arg: "connectionString"
        }
    }
});

config.validate({allowed: 'strict'});

module.exports = config;