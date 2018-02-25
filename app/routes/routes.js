
var metav1 = require('./v1/meta');
var collectionV1 = require('./v1/collections');

exports.assignRoutes = function (app) {

    app.get('/v1/meta', metav1.getMetaData);

    app.get('/v1/collection/:id', collectionV1.getById);
}