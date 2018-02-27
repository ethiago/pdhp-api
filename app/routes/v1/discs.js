
var discDomain = require('../../domain/discs');

exports.search = function (req, res, next) {

	var q = req.query.q || '';
	if(q.length === 0){
		res.send(400);
		return;
	}

	discDomain.search(q, 1, 20)
		.then(data => {
			res.send(data.result);
		})
		.catch(err => {
			res.send(err);
		});

	next();
}