
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