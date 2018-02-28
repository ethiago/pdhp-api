
var db = require('../tools/in_memory_db');

var generic = require("./generic");

var _ = require('underscore');

exports.search = function(q, page, per_page) {
    return generic.search(q, page, per_page, db.discs);
}

exports.getById = function(discId) {
    return new Promise(function(resolve, reject) {
        
        var selected = _.select(db.discs, rec => rec.id === discId );
        
        resolve(selected);
    });
}