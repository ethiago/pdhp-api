
var metaDomain = require('../../domain/meta');

exports.getMetaData = function (req, res, next) {
    

		metaDomain.getData()
			.then(metaData => {
				res.send(metaData);
			})
			.catch(err => {
				res.send(500);
			});
}