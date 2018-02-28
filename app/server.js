
'use strict';

var restify = require('restify');
var corsMiddleware = require('restify-cors-middleware')

var pjson = require('../package.json');
var jtool = require('./tools/json_tools.js');

var config = require('./config.js');

const dataBase = require('./infrastructure/relationalDb')

dataBase.authenticate()
if( config.get('db').create > 0 ){
  dataBase.createDb(true).then( () => console.log("Ok") ).catch( err => console.log(err) )
  return;
} 


const server = restify.createServer(jtool.extract(pjson, ["name", "version"]));
server.pre(restify.pre.sanitizePath());

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*'],
  allowHeaders: ['API-Token', 'X-Requested-With', 'content-type'],
  exposeHeaders: ['API-Token-Expiry']
})

server.pre(cors.preflight)
server.use(cors.actual)

var routes = require('./routes/v1/routes');

routes.assignRoutes(server);

server.listen( config.get('server').port , function () {
  console.log('%s listening at %s', server.name, server.url);
});