/**
 * Created by siroramirez on 23/05/17.
 */
var metaDomain = require('../domain/meta');

exports.getMetaData = function (req, res, next) {
    

		metaDomain.getData()
			.then(metaData => {
					res.send(metaData);
			})
			.catch(err => {
				res.status(500).send(err);
			});
}