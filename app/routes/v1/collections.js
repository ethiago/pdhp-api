
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