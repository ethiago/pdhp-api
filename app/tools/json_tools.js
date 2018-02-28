

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
};

//nSetSub = Naive Set Subtract
exports.nSetSub = function(input, list, equals) {

	equals = equals || function(a, b) { return a == b; }

	if( !Array.isArray(input) || !Array.isArray(input) )
		return input;

	var newList = [];
	for(var i in input)
	{
		var any = false;
		for(var j in list)
		{
			if( equals(input[i], list[j]) )
			{
				any = true;
				break;
			}
		}
		if(!any)
				newList.push(input[i]);
	}
	return newList;
}
