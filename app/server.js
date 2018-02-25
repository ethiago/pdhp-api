/**
 * Created by siroramirez on 23/05/17.
 *
 * Based on SPAM Server dvicente@solidear.es on 09/06/2016
 */
'use strict';

var restify = require('restify');

var pjson = require('../package.json');
var jtool = require('./tools/json_tools.js');

var port = process.env.PORT || 8000;

const server = restify.createServer(jtool.extract(pjson, ["name", "version"]));
server.pre(restify.pre.sanitizePath());

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

var routes = require('./routes/routes');

routes.assignRoutes(server);

server.listen(port, function () {
  console.log('%s listening at %s', server.name, server.url);
});