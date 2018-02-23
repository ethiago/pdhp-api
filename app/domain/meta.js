

exports.getData = function(){

	return new Promise(function(resolve, reject) {
		resolve({ "version": "v0.1.0" });
	});
}