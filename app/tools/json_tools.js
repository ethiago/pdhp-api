

exports.extract = function(object, fields){

	var ret = {};

	fields.forEach(function (elem){
		ret[elem] = object[elem];
	});

	return ret;

}