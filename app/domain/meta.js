
var pjson = require('../../package.json');

var jtool = require('../tools/json_tools.js');

var metaFields = ["name", "version", "description"];

exports.getData = function(){

	return new Promise(function(resolve, reject) {

		resolve( jtool.extract(pjson, metaFields) );
	});
}