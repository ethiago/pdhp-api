/**
 * Created by siroramirez on 23/05/17.
 */

var db_tools = require('../tools/db_tools');

// database connect
var db = db_tools.getDBConexion();

exports.saveUser = function(userData) {

    console.log("Saving user");
    console.log(userData);
    
    return new Promise(function(resolve, reject) {
        console.log("User saved!");
        resolve(userData);
    });
}