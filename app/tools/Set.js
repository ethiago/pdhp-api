
function Set(funcKey) {
	this.hash = {};
	this.funcKey = funcKey;
}

Set.prototype.arrayToObject = function(array, func, hash){
	var hasht = hash || {};

	array.forEach(function(obj)
	{
		hasht[func(obj)] = obj;
	});

	return hasht;
};

Set.prototype.addArray = function(array){
	this.arrayToObject(array, this.funcKey, this.hash);
	return this;
};

Set.prototype.toArray = function(){
	var array = [];
	for (var key in this.hash) {
		// skip loop if the property is from prototype
		if (!this.hash.hasOwnProperty(key)) continue;

		array.push(this.hash[key]);
	}
	return array;
}

exports.newSet = function(fk) { return new Set(fk) };