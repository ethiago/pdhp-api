/**
 * Created by siroramirez on 23/05/17.
 */

var db_tools = require('../tools/db_tools');

// database connect
var db = db_tools.getDBConexion();

exports.saveGroup = function(groupData) {
    console.log("Saving Group");
    console.log(groupData);

    return new Promise(function(resolve, reject) {
        console.log("Grupo saved!");
        resolve(groupData);
    });
}