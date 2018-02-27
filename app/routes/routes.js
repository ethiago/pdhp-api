
var metav1 = require('./v1/meta');
var collectionV1 = require('./v1/collections');
var serachV1 = require('./v1/search');
var discV1 = require('./v1/discs');

exports.assignRoutes = function (app) {

    app.get('/v1/meta', metav1.getMetaData);

    app.get('/v1/collection/:id', collectionV1.getById);

    app.post('/v1/collection', collectionV1.create);

    app.post('/v1/collection/:id', collectionV1.update);

    app.get('/v1/search', serachV1.search);

    app.get('/v1/disc' ,discV1.query);
}