
var discDomain = require('../../domain/discs');

exports.query = function (req, res, next) {

	var name = req.query.name || '';
	if(name.length === 0){
		res.send(400);
		return;
	}

	discDomain.search(name, 1, 20)
		.then(data => {
			res.send(data.result);
		})
		.catch(err => {
			res.send(err);
		});

	next();
}

exports.getById = function (req, res, next) {

	var discID = Number(req.params.id);

	discDomain.getById(discID)
		.then(disc => {
			res.send(disc);
		})
		.catch(err => {
			if(Number.isInteger(err)) 
				res.send(err);
			else
				res.send(500, err);
		});

	next();
}