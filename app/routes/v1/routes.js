
var meta = require('./meta');
var collection = require('./collections');
var search = require('./search');
var disc = require('./discs');

exports.assignRoutes = function (app) {

    app.get('/v1/meta', meta.getMetaData);

    app.get('/v1/collection/:id', collection.getById);

    app.post('/v1/collection', collection.create);

    app.post('/v1/collection/:id', collection.update);

    app.get('/v1/search', search.search);

    app.get('/v1/disc' ,disc.query);

    app.get('/v1/disc/:id' ,disc.getById);
}