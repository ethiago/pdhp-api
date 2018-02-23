/**
 * Created by siroramirez on 23/05/17.
 */
var users = require('./users');
var groups = require('./groups');
var meta = require('./meta');

exports.assignRoutes = function (app) {
    app.post('/users', users.createUser);

    app.post('/groups', groups.createGroup);

    app.get('/meta', meta.getMetaData);
}