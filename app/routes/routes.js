/**
 * Created by siroramirez on 23/05/17.
 */
var usersv1 = require('./v1/users');
var groupsv1 = require('./v1/groups');
var metav1 = require('./v1/meta');

exports.assignRoutes = function (app) {
    app.post('/v1/users', usersv1.createUser);

    app.post('/v1/groups', groupsv1.createGroup);

    app.get('/v1/meta', metav1.getMetaData);
}