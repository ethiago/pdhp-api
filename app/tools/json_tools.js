

exports.extract = function(object, fields){

	var ret = {};

	fields.forEach(function (elem){
		ret[elem] = object[elem];
	});

	return ret;

};

exports.split = function(text, str){
	var ret = [];
	var arr = text.split(str);
	for(var idx in arr)
	{
		if(arr[idx].length > 0)
			ret.push(arr[idx]);
	}
	return ret;
}
