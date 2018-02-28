
var convict = require('convict');

var config = convict({
    server: {
        port: {
            doc: "The port to bind.",
            format: "port",
            default: 8000,
            env: "PORT",
            arg: "port"
        }
    },
    db:{
        connectionString: {
            doc: "Database configuration to connection",
            format: '*',
            default: 'mysql://pdhp_api:pdhp_api_pass@localhost:3306/pdhpdb',
            env: "DATABASE_URL",
            arg: "connectionString"
        },
        create: {
            doc: "createDataBase",
            format: 'int',
            default: 0,
            env: "DATABASE_CREATE",
            arg: "createDb"
        }
    }
});

config.validate({allowed: 'strict'});

module.exports = config;