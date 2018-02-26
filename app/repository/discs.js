
var db = require('../tools/in_memory_db');

var generic = require("./generic");

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.discs);
}

