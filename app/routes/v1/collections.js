
var collectionsDomain = require('../../domain/collections');

exports.getById = function (req, res, next) {

	var collectionID = Number(req.params.id);

	collectionsDomain.getById(collectionID)
		.then(collection => {
			res.send(collection);
		})
		.catch(err => {
			if(Number.isInteger(err)) 
				res.send(err);
			else
				res.send(500, err);
		});

	next();
}

exports.create = function(req, res, next){
	
	collectionsDomain.create( collectionID, req.body )
		.then(function(updatedEntity){
			res.send(collection);
		}).catch(err => { res.send(err); });
	
	
	next();
}

exports.update = function(req, res, next){
	
	var collectionID = Number(req.params.id);
	var entity = req.body;

	if( !Number.isInteger(collectionID) ) res.send(400);
	
	if(entity.id !== collectionID) res.send(400);

	if( !collectionsDomain.validate(entity) ) res.send(400);

	collectionsDomain.update( entity )
		.then(function(updatedEntity){
			res.send(updatedEntity);
		}).catch(err => { res.send(err); });
	
	next();
}