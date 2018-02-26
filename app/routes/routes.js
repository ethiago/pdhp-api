
var metav1 = require('./v1/meta');
var collectionV1 = require('./v1/collections');
var serachV1 = require('./v1/search')

exports.assignRoutes = function (app) {

    app.get('/v1/meta', metav1.getMetaData);

    app.get('/v1/collection/:id', collectionV1.getById);

    app.get('/v1/search', serachV1.search);
}